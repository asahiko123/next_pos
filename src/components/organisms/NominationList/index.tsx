
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useState } from "react"
import styled from "styled-components"
import { hostess } from "utils/data"


const NominationListContainer = styled.div`

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


const nominationList = () => {

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
                <NominationListContainer>
                    <Box className="button-wrapper">
                        {
                            hostess.map((el,index) => {
                                return (
                                    <button key={`${el.hostess_id}-${index}`} onClick={() => keyPressed(el.hostess_name)}>
                                        <div> {el.hostess_name} </div>
                                    </button>
                                )
                            })
                        }
                    </Box>
                        {
                            
                            <button onClick={() => resetKeyPressed("C")}>C</button>
                            
                        }
                
                </NominationListContainer>
            </Box>
        </Flex>
    )

}

export default nominationList