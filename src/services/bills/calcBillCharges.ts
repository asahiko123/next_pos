import { useSelectedBill } from "contexts/SelectedBillContext"
import { calcBillChargesProps, TypeMapping } from "types"



const calcBillCharges = ({ type }: calcBillChargesProps) => {


    const { selectedBill } = useSelectedBill()
    let LIST_TYPE: keyof TypeMapping = "error"
    ';'


    let prevOrderTotal = 0
    let prevBottleTotal = 0
    let prevNominationTotal = 0
    let prevServiceDrinkTotal = 0

    let orderTotal = 0
    let nominationTotal = 0
    let bottleTotal = 0
    let serviceDrinkTotal = 0


    switch(type){
        case "bottle":
            LIST_TYPE = "bottleList"
            break
        case "nomination":
            LIST_TYPE = "nominationList"
            break
        case "order":
            LIST_TYPE = "orderList"
            break
        case "serviceDrink":
            LIST_TYPE = "serviceDrinkList"
        
    }

    

    if(LIST_TYPE === "error"){
        return;
    }

    (selectedBill?.order[LIST_TYPE] as TypeMapping[typeof LIST_TYPE][])?.map((el,index)=> {

        if(LIST_TYPE === "orderList"){
            orderTotal = prevOrderTotal + el.price
            prevOrderTotal = orderTotal
        }
        if(LIST_TYPE === "bottleList"){
            bottleTotal = prevBottleTotal + el.price
            prevBottleTotal = bottleTotal

        }
        if(LIST_TYPE === "nominationList"){
            nominationTotal = prevNominationTotal + el.price
            prevNominationTotal = nominationTotal
        }
        if(LIST_TYPE === "serviceDrinkList"){
            serviceDrinkTotal = prevServiceDrinkTotal + el.price
            prevServiceDrinkTotal = serviceDrinkTotal
        }
        
    })

    return { orderTotal: orderTotal, bottleTotal: bottleTotal, nominationTotal: nominationTotal, serviceDrinkTotal: serviceDrinkTotal}

}

export default calcBillCharges