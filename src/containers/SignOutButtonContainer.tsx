import Button from "components/atoms/Button"
import Flex from "components/layout/Flex"
import { useAuthContext } from "contexts/AuthContext"
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext"
import { useRouter } from "next/router"
import styled from "styled-components"

const Nav = styled(Flex)`
& > span:not(:first-child) {
  margin-left: ${({ theme }) => theme.small};
}
`



const SignOutButtonContainer = () => {

    const { signout } = useAuthContext()
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const router = useRouter()

    const handleSignOut= async () => {
        try{
            // setGlobalSpinner(true)
            await signout()
        }catch(err: unknown){
            if(err instanceof Error) {
                window.alert(err.message)
            }
        }finally{
            const redirect_to = (router.query['redirect_to'] as string) ?? '/signin'
            console.log('redirect_to',redirect_to)
            await router.push(redirect_to)
             
        }
    }

    return(
        <Nav as="nav" height="56px" alignItems="center">
            <Button onClick={handleSignOut}>サインアウト</Button>
        </Nav>
    )
}

export default SignOutButtonContainer