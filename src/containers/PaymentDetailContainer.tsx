import PaymentDetail from "components/organisms/PaymentDetail"
import PaymentDetailHeader from "components/organisms/PaymentDetailHeader"
import PaymentDetailIndex from "components/organisms/PaymentDetailIndex"
import { useSelectedBill } from "contexts/SelectedBillContext"
import { Bill } from "types"




const PaymentDetailContainer  = () => {

    const { selectedBill } = useSelectedBill()
    
    return(
        <PaymentDetail>
            <PaymentDetailHeader bill={ selectedBill } />
            <PaymentDetailIndex bill={ selectedBill } />
            {/* <PaymentDetailFooter /> */}
        </PaymentDetail>
    )
}

export default PaymentDetailContainer