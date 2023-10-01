import calcBillCharges from "./calcBillCharges"

const calcBillTotalCharges = () => {
    const BillCharge_All = 

    (calcBillCharges({type: "serviceDrink"})?.serviceDrinkTotal ?? 0 )+
    (calcBillCharges({type: "order"})?.orderTotal ?? 0 )+
    (calcBillCharges({type: "bottle"})?.bottleTotal ?? 0 )+
    (calcBillCharges({type: "nomination"})?.nominationTotal?? 0 )

    return BillCharge_All


}


export default calcBillTotalCharges