import { useSelectedBill } from "contexts/SelectedBillContext"
import calcBillTotalCharges from "services/bills/calcBillTotalCharges"
import { ConversionInvoicePlaceholder } from "types"

 


const conversionInvoicePlaceholder = (() => {

    const { selectedBill } = useSelectedBill()

    const svgElement = document.querySelectorAll('svg text')

    svgElement?.forEach((el) => {

        if(el.textContent === "%合計金額%"){
            console.log('合計金額')
            el.textContent = calcBillTotalCharges().toString()
        }else if(el.textContent === "%会社住所%" ){

        }else if(el.textContent === "会社名"){

        }else if(el.textContent === "%顧客名%"){

        }
    })
    
})


export default conversionInvoicePlaceholder