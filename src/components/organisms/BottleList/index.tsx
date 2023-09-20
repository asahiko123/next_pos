import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"

const BottleBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

interface BottleListProps {
    bill: Bill | null
}
const bottleList= ({
    bill
}: BottleListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
            {
                bill?.order?.bottleList?.map((bottle,index) => (
                   <Flex flexDirection={{ base: 'column', md: 'column'}} 
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            key={ `${bill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { bottle.bottle } { bottle.price}
                        </Text>
                    </Flex>
                ))
            }
            <BottleBoarder />
            <Text 
                as="h4"
            >
                { 'ボトル料金' }
            </Text>
        </Flex>
    )
}


export default bottleList