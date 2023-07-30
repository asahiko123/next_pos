import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"

interface BottleListProps {
    bill: Bill | null
}
const BottleList = ({
    bill
}: BottleListProps) => {
    
   
    return(
        <Flex>
            {
                bill?.order?.bottleList?.map((bottle,index) => (
                   <Text 
                        as="span"
                        fontSize={{ base: 'small', md: 'medium'}}
                        key={ `${bill.order.raitenId}-${index}` || 'undefined'}
                    >
                        { bottle.bottle }
                    </Text>
                ))
            }
        </Flex>
    )
}


export default BottleList