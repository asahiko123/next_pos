import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { Bill } from "types"
import BottleList from "../BottleList"
import { useSelectedBill } from "contexts/SelectedBillContext"
import OrderList from "../OrderList"

interface PaymentDetailIndexProps {
    bill: Bill | null
}

const PaymentDetailIndex = ({
    bill
}: PaymentDetailIndexProps) => {


    return(
        <Flex 
            flexDirection={{ base: 'column', md: 'column'}}>
                <Box
                >
                    <OrderList bill={bill}/>
                </Box>
                <Box
                >
                    <BottleList bill={bill} />
                </Box>
        </Flex>
    )
}


export default PaymentDetailIndex