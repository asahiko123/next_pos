// import Box from "components/layout/Box"
// import Flex from "components/layout/Flex"
// import Text from 'components/atoms/Text'
// import { useSelectedBill } from "contexts/SelectedBillContext"


// const nominationList = () => {

    
//   const { selectedBill } = useSelectedBill()
    
   
//     return(
//         <Flex flexDirection={{ base: 'column', md: 'column'}}>
//             <Text 
//                 as="h4"
//             >
//                 { '指名料金' }
//             </Text>
//             {
//                 selectedBill?.order?.nominationList?.map((nomination,index) => (
//                    <Flex flexDirection={{ base: 'column', md: 'column'}}
//                     >
//                         <Text 
//                             as="span"
//                             fontSize={{ base: 'small', md: 'medium'}}
//                             key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
//                         >
//                             { nomination.nomination } { nomination.price}
//                         </Text>
//                     </Flex>
//                 ))
//             }
//         </Flex>
//     )
// }


// export default nominationList


import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useState } from "react"
import styled from "styled-components"
import { hostess } from "utils/data"


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


const nominationBoard = () => {

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
                <NominationBoardContainer>
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
                
                </NominationBoardContainer>
            </Box>
        </Flex>
    )

}

export default nominationBoard