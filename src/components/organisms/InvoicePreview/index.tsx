import { SvgIcon } from "components/atoms/SvgIcon"
import calcBillTotalCharges from "services/bills/calcBillTotalCharges"

const InvoicePreview = () => {

    return(
        <SvgIcon fileName="InvoicePreview" width={600} height={700} billTotal={calcBillTotalCharges()} stroke="#333" strokeWidth={1.5} />
    )
}

export default InvoicePreview