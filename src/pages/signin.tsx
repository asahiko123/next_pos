import { Box } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'

const SigninPage: NextPage = () => {
  const router = useRouter()
  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redirectTo = (router.query['redirect_to'] as string) ?? '/'
      console.log('Redirecting', redirectTo)
      await router.push(redirectTo)
    }
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box>
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}