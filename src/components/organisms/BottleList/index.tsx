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
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            <Text 
                as="h4"
            >
                { 'ボトル' }
            </Text>
            {
                bill?.order?.bottleList?.map((bottle,index) => (
                   <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            key={ `${bill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { bottle.bottle }
                        </Text>
                    </Flex>
                ))
            }
        </Flex>
    )
}


export default BottleList