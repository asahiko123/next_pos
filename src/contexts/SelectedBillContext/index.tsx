import React, { useContext } from "react"
import { useState } from "react"
import { Bill } from "types"


type selectedBillContextType = {
    selectedBill: Bill | null,
    setSelectedBill: (bill: Bill) => void
}

const selectedBillContext = React.createContext<selectedBillContextType>({
    selectedBill: null,
    setSelectedBill: () => {}
})

interface selectedBillContextProviderProps {
    children?: React.ReactNode
}

export const useSelectedBill = () => useContext(selectedBillContext)

export const SelectedBillContextProvider = ({
    children,
}: selectedBillContextProviderProps) => {

    const [ selectedBill , setSelectedBill] = useState<Bill | null>(null)

    return(
        <selectedBillContext.Provider value = {{ selectedBill, setSelectedBill }}>
            { children }
        </selectedBillContext.Provider>
    )
}