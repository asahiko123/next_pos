import styled from 'styled-components'
import Flex from "components/layout/Flex"
import ShapeImage from 'components/atoms/ShapeImage'
import Text from 'components/atoms/Text'
import { useAuthContext } from 'contexts/AuthContext'

const PaymentRoot = styled.div`
    height: 100%;
    width: 100%;
    background-color: #191970;
    color: #FFFFFF;
`

const PaymentDetail = ({
    children
}: React.PropsWithChildren) => {
    const { authUser, isLoading} = useAuthContext()

    return(
        <PaymentRoot>

            <Flex flexDirection="row">
            <ShapeImage
                  shape="circle"
                  src={'https://placehold.jp/50x50.png'}
                  width={50}
                  height={50}
                  data-testid="profile-shape-image"
                  alt={''}
                />
            <Flex flexDirection="column">
              <Text>{`${authUser?.username}`}</Text>
            </Flex>            
          </Flex>
            <Flex 
            flexDirection={{ base: 'column', md: 'column'}}
            >
                { children }
            </Flex>
        </PaymentRoot>
    )
}

export default PaymentDetail


