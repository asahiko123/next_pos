import { SvgIcon } from "components/atoms/SvgIcon"
import calcBillTotalCharges from "services/bills/calcBillTotalCharges"
import PaymentSelector from "../PaymentSelector"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Input from "components/atoms/Input"
import Text from "components/atoms/Text"

const InvoicePreview = () => {

    return(
        <Flex flexDirection={"column"}>

        <SvgIcon fileName="InvoicePreview" width={600} height={230}  billTotal={calcBillTotalCharges()} stroke="#333" strokeWidth={1.5} />

        <Flex flexDirection={"row"} marginBottom={"5px"}>
            <Text width={"90px"} backgroundColor={"gray"} color={"white"} marginRight={"1px"} paddingLeft={"5px"}>支払い方法</Text>
            <Text width={"200px"} backgroundColor={"gray"} color={"white"} marginRight={"1px"} paddingLeft={"5px"}>カード種</Text>
            <Text width={"200px"} backgroundColor={"gray"} color={"white"} marginRight={"1px"} paddingLeft={"5px"}>預り金額</Text>
        </Flex>
        <Box>
            <Flex flexDirection="column">
                <Flex flexDirection="row">
                <PaymentSelector/>
                <Input width={"200px"}></Input>
                <Input width={"200px"}></Input>
                </Flex>
            </Flex>
        </Box>

        </Flex>
    )
}

export default InvoicePreview