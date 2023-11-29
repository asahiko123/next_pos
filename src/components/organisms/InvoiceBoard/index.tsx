import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Input from "components/atoms/Input"
import PaymentSelector from "../PaymentSelector"
import Text from "components/atoms/Text"
import { useSelectedBill } from "contexts/SelectedBillContext"
import calcBillCharges from "services/bills/calcBillCharges"

const InvoiceBoard = () => {

    const { selectedBill } = useSelectedBill()

    return(
       <Flex flexDirection={"column"}>
            <Text fontSize={"20px"}width={"120px"} backgroundColor={"gray"} color={"white"} marginBottom={"5px"} paddingLeft={"5px"}>お会計内容</Text>
            <Flex flexDirection={"row"}>
                <Flex flexDirection={"column"}>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>日付</Text>
                        {}
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>人数</Text>
                        {}
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>入店時間</Text>
                        
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>お帰り時間</Text>
                        { }
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>基本料金</Text>
                        {  }
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>延長料金</Text>
                        
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>オーダー料金</Text>
                        <Text width={"200px"}>{ calcBillCharges({type: "order"}).orderTotal}</Text>
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>ボトル料金</Text>
                        
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>指名料金</Text>
                        
                    </Flex>
                    
                    
                </Flex>
                <Flex flexDirection={"column"}>
                <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>小計</Text>
                <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginBottom={"1px"} paddingLeft={"5px"}>合計</Text>
                </Flex>
            </Flex>
       </Flex>
    )
}

export default InvoiceBoard