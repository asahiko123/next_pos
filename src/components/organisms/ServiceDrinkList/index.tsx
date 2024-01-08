import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"

const OrderBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

interface ServiceDrinkListProps {
    bill: Bill | null
}
const orderList = ({
    bill
}: ServiceDrinkListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
            { 
                bill?.order?.serviceDrinkList?.map((order,index) => (

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
            <Flex flexDirection="row">
            <Text as="h4"
                margin={{ base: 'small', md: 'medium'}}>
                { 'ドリンク料金' }
            </Text>
            <Text
                margin={{ base: 'small', md: 'medium'}}>
                { calcBillCharges({type: "order"})?.orderTotal }
            </Text>
            </Flex>
        </Flex>
    )
}


export default orderList