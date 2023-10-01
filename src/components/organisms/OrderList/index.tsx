import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"

const OrderBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

interface OrderListProps {
    bill: Bill | null
}
const orderList = ({
    bill
}: OrderListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
            { 
                bill?.order?.orderList?.map((order,index) => (

                    <Flex flexDirection="row">
                    
                    <Text 
                        as="span"
                        fontSize={{ base: 'small', md: 'medium'}}
                        margin={{ base: 'small', md: 'medium'}}
                        key={`${bill.order.raitenId}-${index}` || 'undefined'}
                    >
                        { order.drink }
                    </Text>

                    <Text 
                    as="span"
                    fontSize={{ base: 'small', md: 'medium'}}
                    margin={{ base: 'small', md: 'medium'}}
                    key={`${bill.order.raitenId}-${index}` || 'undefined'}
                    >
                    { order.price }
                    </Text>

                    </Flex>
                
                ))
            }
            <OrderBoarder />
            <Text as="h4">
                { 'オーダー料金' }
            </Text>
        </Flex>
    )
}


export default orderList