import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"

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
                   <Flex flexDirection={{ base: 'row', md: 'row'}} 
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            key={ `${bill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { bottle.bottle } 
                        </Text>

                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            key={ `${bill.order.raitenId}-${index}` || 'undefined'}
                        >
                             { bottle.price}
                        </Text>
                    </Flex>
                ))
            }
            <BottleBoarder />
            <Flex flexDirection="row">
            <Text 
                as="h4"
                margin={{ base: 'small', md: 'medium'}}
            >
                { 'ボトル料金' }
            </Text>
            <Text
                margin={{ base: 'small', md: 'medium'}}>
                { calcBillCharges({type: "bottle"})?.bottleTotal }
            </Text>
            </Flex>
        </Flex>
    )
}


export default bottleList