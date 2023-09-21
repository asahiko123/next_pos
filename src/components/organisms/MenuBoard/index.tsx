import Button from "components/atoms/Button"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { useSelectedBill } from "contexts/SelectedBillContext"
import { useState } from "react"
import styled from "styled-components"
import theme from "themes"
import { MenuBoardKeysOptions } from "types"
import { calculatorKeys, menuBoardKeys } from "utils/data"


const MenuBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  
  button {
  font-size: 10px;
  background: #f58718;
  color: white;
  outline: none;
  border: solid 2px #bebebe;
  cursor: pointer
  }
  button:hover {
    background: #b4b4b4;
  }
`


const menuBoard = () => {

    const [ input, setInput ] = useState('')
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const keyPressed = (key: MenuBoardKeysOptions) => {
            const newOrder = { id: 3, drink: key.order, hostess_id: 12, price: key.price}
            

            if(selectedBill){
                const orderList = selectedBill?.order?.orderList ?? []
                const newOrderList = [...orderList, newOrder]
                console.log('hello')
                
                
               const updatedBill = {
                ...selectedBill,
                order:{
                    ...selectedBill.order,
                    orderList: newOrderList
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
                    menuBoardKeys.map((el,index) => {
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

export default menuBoard