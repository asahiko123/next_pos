import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Input from "components/atoms/Input"
import PaymentSelector from "../PaymentSelector"
import Text from "components/atoms/Text"
import { useSelectedBill } from "contexts/SelectedBillContext"
import calcBillCharges from "services/bills/calcBillCharges"
import calcBillTotalCharges from "services/bills/calcBillTotalCharges"
import styled from "styled-components"

const InvoiceBoardTextContainer = styled.div`
    text-align: center;
`

const InvoiceBoard = () => {

    const { selectedBill } = useSelectedBill()

    let orderTotal = calcBillCharges({type: "order"}).orderTotal
    let bottleTotal = calcBillCharges({type: "bottle"}).bottleTotal
    let nominationTotal = calcBillCharges({type: "nomination"}).nominationTotal
    let courceTotal = calcBillCharges({type: "cource"}).courceTotal

    let bill_total = calcBillTotalCharges()

    return(
       <Flex flexDirection={"column"}>
            <Text fontSize={"20px"}width={"120px"} backgroundColor={"gray"} color={"white"} marginBottom={"5px"} paddingLeft={"5px"}>お会計内容</Text>
            <InvoiceBoardTextContainer>
            <Flex flexDirection={"row"}>
                <Flex flexDirection={"column"}>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>日付</Text>
                        {}
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>人数</Text>
                        {}
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>入店時間</Text>
                        
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>お帰り時間</Text>
                        <Text width={"180px"} fontWeight={"bold"}>{ courceTotal }</Text>
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>基本料金</Text>
                        {  }
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>延長料金</Text>
                        
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>オーダー料金</Text>
                        <Text width={"180px"} fontWeight={"bold"}>{ orderTotal }</Text> 
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>ボトル料金</Text>
                        <Text width={"180px"} fontWeight={"bold"}>{ bottleTotal }</Text> 
                    </Flex>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>指名料金</Text>
                        <Text width={"180px"} fontWeight={"bold"}>{ nominationTotal }</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection={"column"}>

                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>小計</Text>
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"150px"} height={"40px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>合計</Text>
                        <Text width={"180px"} fontWeight={"bold"}>{ bill_total }</Text>
                    </Flex>
                </Flex>
            </Flex>
            </InvoiceBoardTextContainer>
       </Flex>
    )
}

export default InvoiceBoard