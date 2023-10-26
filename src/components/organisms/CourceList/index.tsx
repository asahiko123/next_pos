import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"

interface CourceListProps {
    bill: Bill | null
}


const CourceBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`



const CourceList = ({
    bill
}: CourceListProps) => {
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
          
            {
                bill?.order.courceList?.map((cource,index) => (
                    
                    <Flex flexDirection={{ base: 'row', md: 'row'}}
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                        >
                            { cource.basic_cource }
                        </Text>

                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                        >
                           { cource.price }
                        </Text>
                        
                    </Flex>
                    
                ))
                    
                
            }
            <CourceBoarder/>
            <Flex flexDirection="row">

                <Text as="h4" >
                  { '基本料金' }
                </Text>

                <Text
                    margin={{ base: 'small', md: 'medium'}}>
                    { calcBillCharges({type: "cource"})?.courceTotal }
                </Text>
            </Flex>
            
        </Flex>
    )
}


export default CourceList