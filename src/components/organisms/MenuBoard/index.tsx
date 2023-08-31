import Button from "components/atoms/Button"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useState } from "react"
import styled from "styled-components"
import theme from "themes"
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

    const keyPressed = (key: string) => {
            setInput(key)
            console.log(input)
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
                            <button key={`${el.order}-${index}`} onClick={() => keyPressed(el.order)}>
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