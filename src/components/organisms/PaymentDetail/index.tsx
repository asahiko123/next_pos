import styled from 'styled-components'
import Flex from "components/layout/Flex"

const PaymentRoot = styled.div`
    height: 100%;
    width: 100%;
    background-color: #191970;
    color: #FFFFFF;
`

const PaymentDetail = ({
    children
}: React.PropsWithChildren) => {
    return(
        <PaymentRoot>
            <Flex 
            flexDirection={{ base: 'column', md: 'column'}}
            >
                { children }
            </Flex>
        </PaymentRoot>
    )
}

export default PaymentDetail