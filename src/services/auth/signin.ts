import { ApiContext, User } from '../../types/data.d'
import { fetcher } from 'utils'

export type SigninPatterns = {
  username: string
  password: string
}

const signin = async (
  context: ApiContext,
  params: SigninPatterns,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: ' POST ',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}
