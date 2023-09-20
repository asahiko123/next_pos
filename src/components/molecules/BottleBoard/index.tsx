import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"


const bottleBoard = () => {

    
  const { selectedBill } = useSelectedBill()
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            <Text 
                as="h4"
            >
                { 'ボトル' }
            </Text>
            {
                selectedBill?.order?.bottleList?.map((bottle,index) => (
                   <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { bottle.bottle }
                        </Text>
                    </Flex>
                ))
            }
        </Flex>
    )
}


export default bottleBoard