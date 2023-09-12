import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"

interface OrderListProps {
    bill: Bill | null
}
const orderList = ({
    bill
}: OrderListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            <Text as="h4">
            { 'オーダー' }
            </Text>
            { 
                bill?.order?.orderList?.map((order,index) => (
                    
                    <Text 
                        as="span"
                        fontSize={{ base: 'small', md: 'medium'}}
                        key={`${bill.order.raitenId}-${index}` || 'undefined'}
                    >
                        { order.drink }
                    </Text>
                
                ))
            }
        </Flex>
    )
}


export default orderList