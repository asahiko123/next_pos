import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import styled from "styled-components"
import { Bill } from "types"


const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.small} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  opacity:0.8;
`

interface PaymentDetailHeaderProps {
    bill: Bill | null
}

const PaymentDetailHeader = ({
    bill
}: PaymentDetailHeaderProps) => {

    return(
        <HeaderRoot>
            <Flex justifyContent="space-between">
                <Box>
                    <Text
                        as="h2"
                        fontSize={{ base: 'medium', md: 'mediumLarge'}}
                    >
                        { `テーブル： ${bill?.table}` }
                    </Text>
                    <Text
                        as="span"
                        fontSize={{ base: 'small', md: 'medium'}}
                    >
                        { `来店番号: ${bill?.raitenId}`}
                    </Text>
                </Box>
            </Flex>
        </HeaderRoot>

    )
}


export default PaymentDetailHeader