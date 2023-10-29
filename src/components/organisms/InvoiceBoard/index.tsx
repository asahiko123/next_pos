import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Input from "components/atoms/Input"
import PaymentSelector from "../PaymentSelector"


const InvoiceBoard = () => {
    return(
        <Box>
            <Flex flexDirection="column">
                <Flex flexDirection="row">
                <PaymentSelector/>
                <Input width={"50%"}></Input>
                <Input width={"50%"}></Input>
                </Flex>
            </Flex>
        </Box>
    )
}

export default InvoiceBoard