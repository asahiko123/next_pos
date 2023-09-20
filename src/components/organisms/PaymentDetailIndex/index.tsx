import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { Bill } from "types"
import BottleList from "../BottleList"
import { useSelectedBill } from "contexts/SelectedBillContext"
import OrderList from "../OrderList"
import CourceList from "../CourceList"
import ServiceDrinkList from "../ServiceDrinkList"
import NominationList from "../NominationList"

interface PaymentDetailIndexProps {
    bill: Bill | null
}

const PaymentDetailIndex = ({
    bill
}: PaymentDetailIndexProps) => {


    return(
        <Flex 
            flexDirection={{ base: 'column', md: 'column'}}>
                
                    <CourceList bill={bill}/>
                
                
                    <ServiceDrinkList bill={bill}/>
                

                
                    <OrderList bill={bill}/>
                
                
                    <BottleList bill={bill} />
                
             
                    <NominationList  />
                
        </Flex>
    )
}


export default PaymentDetailIndex