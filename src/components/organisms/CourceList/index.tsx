import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"

interface CourceListProps {
    bill: Bill | null
}
const CourceList = ({
    bill
}: CourceListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            <Text 
                as="h4"
            >
                { '基本料金' }
            </Text>
            {
                bill && (
                    <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                        >
                            { bill.cource.basic_cource }
                        </Text>
                        
                    </Flex>
                )
            }
        </Flex>
    )
}


export default CourceList