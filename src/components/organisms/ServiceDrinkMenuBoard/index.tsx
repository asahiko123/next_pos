import Button from "components/atoms/Button"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { useSelectedBill } from "contexts/SelectedBillContext"
import { useState } from "react"
import styled from "styled-components"
import { MenuBoardKeysOptions } from "types"
import { serviceDrinkKeys } from "utils/data"


const MenuBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  
  button {
  height: 50px;
  font-weight: bold;
  background: #f58718;
  color: black;
  outline: none;
  border: solid 2px #bebebe;
  cursor: pointer;
  }
  button:hover {
    background: #b4b4b4;
  }
`


const serviceDrinkBoard = () => {

    const [ input, setInput ] = useState('')
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const keyPressed = (key: MenuBoardKeysOptions) => {
            const newDrink = { id: 3, drink: key.order, hostess_id: 12, price: key.price}
            

            if(selectedBill){
                const serviceDrinkList = selectedBill?.order?.serviceDrinkList ?? []
                const newServiceDrinkList = [...serviceDrinkList, newDrink]
                
                
               const updatedBill = {
                ...selectedBill,
                order:{
                    ...selectedBill.order,
                    serviceDrinkList: newServiceDrinkList
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
                <MenuBoardContainer>
                {
                    serviceDrinkKeys.map((el,index) => {
                        return (
                            <button key={`${el.order}-${index}`} onClick={() => keyPressed(el)}>
                                {el.order} 
                            </button>
                        )
                    })
                }
                {
                     
                    <button onClick={() => resetKeyPressed("C")}>C</button>
                    
                }
                
                </MenuBoardContainer>
            </Box>
        </Flex>
    )

}

export default serviceDrinkBoard