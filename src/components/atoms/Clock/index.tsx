import Flex from "components/layout/Flex"
import { useEffect,useState } from "react"
import styled from "styled-components"

const ClockContainer = styled.div`

font-size: 15px;
font-weight: bold;

`
const Clock = () => {

    const [time,setTime] = useState(new Date)

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date)
        },1000)

        return () => {
            clearInterval(timer)
        }
    },[])


    return(
        <Flex flexDirection={"row"} >
            <Flex flexDirection={"row"} paddingRight={"5px"}> 
            <ClockContainer>
                {time.getMonth().toString().padStart(2,"0")}/
                {time.getDate().toString().padStart(2,"0")}
            </ClockContainer>
            </Flex>
            <Flex flexDirection={"row"}>
            <ClockContainer>
                {time.getHours().toString()}:
                {time.getMinutes().toString()}:
                {time.getSeconds().toString()}
            </ClockContainer>
            </Flex>
        </Flex>
    )
}


export default Clock


