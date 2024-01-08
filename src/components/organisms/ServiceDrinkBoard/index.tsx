
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"
import { hostess,nominations } from "utils/data"
import { useState } from "react"
import { NominationKeysProps, NominationOptions, serviceDrinkKeysProps } from "types"
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
const serviceDrinkBoard = () => {

    
  const { selectedBill,setSelectedBill } = useSelectedBill()
  const { updateBill } = useBillCardListContext()

  const resetKeyPressed = (serviceDrink:  serviceDrinkKeysProps) => {
    
        if(selectedBill){
            const serviceDrinkList = selectedBill?.order?.serviceDrinkList ?? []
            const findIndex = serviceDrinkList?.findIndex((el) => el === serviceDrink) 

            if(findIndex === -1){
                console.log('見つかりません')
            }

        
                const serviceDrinkListItem = [...serviceDrinkList]

                serviceDrinkListItem.splice(findIndex,1)

                const updatedBill = {
                    ...selectedBill,
                    order: {
                        ...selectedBill.order,
                        serviceDrinkList: serviceDrinkListItem
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
                selectedBill?.order?.serviceDrinkList?.map((serviceDrink,index) => (
                   <Flex flexDirection={{ base: 'row', md: 'row'} } justifyContent="flex-end" className="nomination_content"
                    >
                        
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            {  serviceDrink.drink } 
                        </Text>

                        

                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                            
                            key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                        >
                            { serviceDrink.price}
                        </Text>

                        {
                     
                            <button onClick={() => resetKeyPressed(serviceDrink)}>消</button>
                            
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
                { 'ドリンク料金' }
            </Text>
            <Text
                margin={{ base: 'small', md: 'medium'}}>
                { calcBillCharges({type: "serviceDrink"})?.serviceDrinkTotal }
            </Text>
            </Flex>
        </Flex>
        
    )
}


export default serviceDrinkBoard