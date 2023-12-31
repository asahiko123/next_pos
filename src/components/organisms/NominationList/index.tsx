
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"
import { hostess,nominations } from "utils/data"


const NominationBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

const NominationContainer = styled.div`
    width: 250px;
    
`
const nominationList = () => {

    
  const { selectedBill } = useSelectedBill()

  
    
   

    return(
        
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
            <NominationContainer>
            
            {
                selectedBill?.order?.nominationList?.map((nomination,index) => (
                   <Flex flexDirection={{ base: 'row', md: 'row'}}
                    >
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { hostess.find(item => item.hostess_id === nomination.hostess_id)?.hostess_name} 
                        </Text>
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { nominations.find(item => item.nomination_type_id === nomination.nomination_type_id)?.nomination } 
                        </Text>

                        

                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { nomination.price}
                        </Text>
                    </Flex>
                    
                ))
            }
            </NominationContainer>
            
            <NominationBoarder />
            <Flex flexDirection="row">
            <Text 
                as="h4"
                margin={{ base: 'small', md: 'medium'}}
            >
                { '指名料金' }
            </Text>
            <Text
                margin={{ base: 'small', md: 'medium'}}>
                { calcBillCharges({type: "nomination"})?.nominationTotal }
            </Text>
            </Flex>
        </Flex>
        
    )
}


export default nominationList