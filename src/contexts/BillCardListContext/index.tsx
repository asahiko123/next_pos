import React, { useReducer } from "react"
import { Bill } from "types"
import { ADD_BILL, REMOVE_BILL, UPDATE_BILL, billReducer } from "./reducer"

type BillCardListContextType = {
    list: Bill[],
    addBillToList: (bill: Bill) => void,
    removeBillToList: (raitenId: number) => void,
    updateBill: (bill: Bill) => void,
}


const BillCardListContext = React.createContext<BillCardListContextType>({ 
    list: [],
    addBillToList: () => {},
    removeBillToList: () => {},
    updateBill: () => {}

})

interface BillCardListContextProviderProps {
    children?: React.ReactNode
}

export const BillCardListContextProvider = ({
    children,
} : BillCardListContextProviderProps) => {
    const bills: Bill[] = []
    const [  listState, dispatch ] = useReducer( billReducer, bills)

    const addBillToList = (bill: Bill) => {
        dispatch({ type: ADD_BILL, payload: bill})
    }
    const removeBillToList = (raitenId: number) => {
        dispatch({ type: REMOVE_BILL, payload: raitenId})
    }

    const updateBill = (newBill: Bill) => {
        dispatch({ type: UPDATE_BILL, payload: newBill })
    }

    return(
        <BillCardListContext.Provider
            value={{
                list: listState,
                addBillToList,
                removeBillToList,
                updateBill,
            }}>
                { children }
        </BillCardListContext.Provider>
    )
}