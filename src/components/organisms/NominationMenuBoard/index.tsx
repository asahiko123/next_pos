import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { useSelectedBill } from "contexts/SelectedBillContext"
import { useState } from "react"
import styled from "styled-components"
import { NominationKeysProps } from "types"
import { hostess, nominations } from "utils/data"


const NominationBoardContainer = styled.div`

  .button-wrapper{
    height: 150px;
    overflow-y: scroll;
  }
  
  button {
  display:flex;
  flex-flow: column;
  width: 100%;
  height: 50px;
  font-size: 10px;
  background: #6633CC;
  color: white;
  outline: none;
  border: solid 2px #bebebe;
  cursor: pointer

  }
  button:hover {
    background: #b4b4b4;
  }
`

const NominationSelectBoxContainer = styled.div`
   display: flex;
   
   button {
    width: 60px;
    height : 30px;
   }

`


const nominationBoard = () => {

    const [ input, setInput ] = useState('')
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const keyPressed = (key: NominationKeysProps) => {
            
            if(selectedBill){
                const nominationList = selectedBill?.order?.nominationList ?? []
                const newNominationList = [...nominationList,key]

                const updatedBill = {
                    ...selectedBill,
                    order:{
                        ...selectedBill.order,
                        nominationList: newNominationList
                    }
                }

                updateBill(updatedBill)
                setSelectedBill(updatedBill)
            }
           
    }

    const resetKeyPressed = (key: string) => {
            setInput('')
    }
    

    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}> 
        
            <Box className="numbers">
                <NominationBoardContainer>
                    <Box className="button-wrapper">
                        
                        {
                            hostess.map((el,index) => {
                               

                                return (
                                    <button key={`${el.hostess_id}-${index}`}>
                                        <div> {el.hostess_name} </div>
                                        <NominationSelectBoxContainer>
                                        {
                                            nominations.map((item,index) => {
                                                return(
                                                    <button key={`${item.nomination_type_id}-${index}`} onClick={() => keyPressed({id: index ,hostess_id: el.hostess_id,nomination_type_id: item.nomination_type_id,price: item.price})}>{item.nomination}</button>
                                                )
                                            })
                                        }
                                        </NominationSelectBoxContainer>
                                    </button>
                                )
                            })
                        }
                        
                        
                    </Box>  
                </NominationBoardContainer>
            </Box>
        </Flex>
    )

}

export default nominationBoard