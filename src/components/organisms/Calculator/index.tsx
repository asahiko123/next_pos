import Button from "components/atoms/Button"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { useSelectedBill } from "contexts/SelectedBillContext"
import { useState } from "react"
import styled from "styled-components"
import theme from "themes"
import { calculatorKeys } from "utils/data"

const CalculatorContainer = styled.div`
    width: 50%;
`
const CalculatorKeyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  
  button {
  font-size: 40px;
  background: #c5c5c5;
  color: white;
  outline: none;
  border: solid 2px #bebebe;
  cursor: pointer
  }
  button:hover {
    background: #b4b4b4;
  }
`

const DisplayContainer = styled.div`
    text-align: right;
    word-break: break-all;
    font-size: 40px
`


const calculator = () => {

    const [ input, setInput ] = useState(0)
    const [ operator, setOperator ] = useState(null)
    const [ additionalInput, setAdditionalInput ] = useState(0)


    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const handleChange = (value: number) => {

        if(selectedBill?.order.courceList){

            const courceList = selectedBill.order.courceList

            courceList[0].numberOfPeople = value

            const updatedBill = { 
                ...selectedBill,
                order: {
                    ...selectedBill.order,
                    courceList: courceList
                }
            }

            updateBill(updatedBill)
            setSelectedBill(updatedBill)
        }
    } 

    
    const keyPressed = (key: number) => {
        if(operator === null){
            setInput(input*10+key)
            handleChange(key)

        }else{
            setAdditionalInput(input*10+key)
        }
    }

    const resetKeyPressed = (key: string) => {
        setInput(0)
        setOperator(null)
        setAdditionalInput(0)
    }
    

    return(
        <CalculatorContainer>
        <Flex flexDirection={{ base: 'column', md: 'column'}}> 
            <Box className="input">
                <DisplayContainer>
                        {
                        `${input}
                         ${operator === null ? "": operator}
                         ${operator === null ? "": additionalInput}`
                        }
                </DisplayContainer>
            </Box>
            <Box className="numbers">
                <CalculatorKeyContainer>
                {
                    calculatorKeys.map((el,index) => {
                        return (
                            <button key={`${el.value}-${index}`} onClick={() => keyPressed(el.value)}>
                                {el.value}
                            </button>
                        )
                    })
                }
                {
                     
                    <button onClick={() => resetKeyPressed("C")}>C</button>
                    
                }
                
                </CalculatorKeyContainer>
            </Box>
        </Flex>
        </CalculatorContainer>
    )

}

export default calculator