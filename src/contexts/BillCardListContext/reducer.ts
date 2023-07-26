import React from "react"
import { Bill } from "types"


export const ADD_BILL = 'ADD_BILL'
export const REMOVE_BILL = 'REMOVE_BILL'

type BillReducerAction = 
    | {
        type: 'ADD_BILL',
        payload: Bill
    }
    | {
        type: 'REMOVE_BILL',
        payload: number
    }



const addBillToList = (bill: Bill, state: Bill[]) => {
    return [...state,bill]
}

const removeBillToList = (raitenId: number,state: Bill[]) => {
    const removeItemIndex = state.findIndex((bill) => {
        bill.raitenId === raitenId
    })

    state.splice(removeItemIndex,1)

    const newState = [...state]
    newState.splice(removeItemIndex,1)

    return newState
}


export const billReducer : React.Reducer<Bill[],BillReducerAction> = (
    state: Bill[],
    action: BillReducerAction,
) => {
    switch(action.type){
        case ADD_BILL: 
            return addBillToList(action.payload, state)
        case REMOVE_BILL:
            return removeBillToList(action.payload, state)
        default: 
            return state
    }

}