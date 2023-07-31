import Flex from "components/layout/Flex"
import Box from "components/layout/Box"
import Text from 'components/atoms/Text'
import styled from "styled-components"
import { Bill } from "types"

const FooterRoot = styled.footer`
    height: 100px;
    padding: ${({ theme }) => theme.small} 0px;
    border-top: 1px solid ${ ({ theme }) => theme.colors.border};
    opacity: 0.5;

`

interface PaymentDetailFooterProps {
    bill: Bill | null
}

const PaymentDetailFooter = ({
    bill
}: PaymentDetailFooterProps) => {
    
    return(
        <FooterRoot>
            <Flex 
                justifyContent="space-between"
            >
                <Box>
                    <Text
                    as="h2"
                        fontSize={{ base: 'small', md: 'medium'}}
                    >
                        { '小計：' }
                    </Text>
                    <Text
                        as="span"
                        fontSize={{ base: 'medium', md: 'mediumLarge'}}
                    >
                        { `合計: `}
                    </Text>
                </Box>
            </Flex>
        </FooterRoot>
    )
}

export default PaymentDetailFooter

