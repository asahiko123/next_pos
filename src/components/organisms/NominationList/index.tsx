
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"

const NominationBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

const nominationList = () => {

    
  const { selectedBill } = useSelectedBill()
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
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
                            { nomination.nomination } 
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
            <NominationBoarder />
            <Text 
                as="h4"
            >
                { '指名料金' }
            </Text>
        </Flex>
    )
}


export default nominationList