
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"
import { hostess,nominations } from "utils/data"
import { useState } from "react"
import { NominationKeysProps, NominationOptions } from "types"
import { useBillCardListContext } from "contexts/BillCardListContext"


const NominationBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`

const NominationContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: scroll;

    .nomination_content{
        padding: 5px 0px;
        align-items: center;
        font-weight: bold;
        border: solid 1px #bebebe;
        background-color: #ada8b2;
    }

    button {
        font-size: 30px;
        background: red;
        color: white;
        outline: none;
        border: solid 2px #bebebe;
        cursor: pointer
        height: 50px;
        width: 50px;
        }
        button:hover {
          background: #b4b4b4;
        }
    
`
const nominationBoard = () => {

    
  const { selectedBill,setSelectedBill } = useSelectedBill()
  const { updateBill } = useBillCardListContext()

  const resetKeyPressed = (nomination:  NominationKeysProps) => {
    
        if(selectedBill){
            const nominationList = selectedBill?.order?.nominationList ?? []
            const findIndex = nominationList?.findIndex((el) => el === nomination) 

            if(findIndex === -1){
                console.log('見つかりません')
            }

        
                const nominationListItem = [...nominationList]

                nominationListItem.splice(findIndex,1)

                const updatedBill = {
                    ...selectedBill,
                    order: {
                        ...selectedBill.order,
                        nominationList: nominationListItem
                    }
                }

                updateBill(updatedBill)
                setSelectedBill(updatedBill)
        }

        
        
  }
    
   

    return(
        
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            
            <NominationContainer>
            
            {
                selectedBill?.order?.nominationList?.map((nomination,index) => (
                   <Flex flexDirection={{ base: 'row', md: 'row'} } justifyContent="flex-end" className="nomination_content"
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

                        {
                     
                            <button onClick={() => resetKeyPressed(nomination)}>消</button>
                            
                        }
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


export default nominationBoard