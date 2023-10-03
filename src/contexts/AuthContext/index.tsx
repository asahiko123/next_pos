import React, { useContext, useEffect } from 'react'
import signout from 'services/auth/signout'
import useSWR from 'swr'
import signin from 'services/auth/signin'
import type { ApiContext, User } from 'types'
import router from 'next/router'

type AuthContextType = {
  authUser?: User
  isLoading: boolean
  signin: (username: string, password: string) => Promise<void>
  signout: () => Promise<void>
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean,
  ) => Promise<User | undefined>
}

type AuthContextProviderProps = {
  context: ApiContext
  authUser?: User
}

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
})

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext)

/**
 * 認証コンテキストプロバイダー
 * @param params パラメータ
 */
export const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/me`,
  )
  const isLoading = !data && !error



  // サインイン
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password })
    await mutate()
  }

  // サインアウト - mutateでキャッシュをクリア
  const signoutInternal = async () => {
    await signout(context)
    await mutate(undefined)
  }

  return (
    <AuthContext.Provider
      value={{
        authUser: data ?? authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
        mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
