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
    height: 250px;
    overflow-y: scroll;
  }
  
  button {
  display:flex;
  flex-flow: column;
  width: 100%;
  height: 50px;
  font-size: 20px;
  background: #6633CC;
  color: white;
  outline: none;
  border: solid 2px #bebebe;
  cursor: pointer

  }
  button:hover {
    background: #b4b4b4;
  }

  .nomination_container{
    height: 50px;
    font-weight: bold;
    background: #ada8b2;
    border: solid 1px #bebebe;
  }

  .nomination_hostess_name{
    font-size: 20px;
  }

  .nomination_pressKey{
    background: orange;
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


    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}> 
        
            <Box className="numbers">
                <NominationBoardContainer>
                    <Box className="button-wrapper">
                        
                        {
                            hostess.map((el,index) => {
                               

                                return (
                                    <Flex key={`${el.hostess_id}-${index}`} justifyContent="space-between"className="nomination_container">
                                        <div className="nomination_hostess_name"> {el.hostess_name} </div>
                                        <NominationSelectBoxContainer>
                                        {
                                            nominations.map((item,index) => {
                                                return(
                                                    <button key={`${item.nomination_type_id}-${index}`} onClick={() => keyPressed({id: index ,hostess_id: el.hostess_id,nomination_type_id: item.nomination_type_id,price: item.price})}
                                                        className="nomination_pressKey">{item.nomination}</button>
                                                )
                                            })
                                        }
                                        </NominationSelectBoxContainer>
                                    </Flex>
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