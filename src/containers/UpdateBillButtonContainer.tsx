import Button from "components/atoms/Button"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { Bill } from "types"

interface UpdateBillProps {
    bill: Bill
}

const updateBillButtonContainer = ({
    bill,
}:UpdateBillProps) => {

    const { list , updateBill } = useBillCardListContext()

    const handleUpdateBillClick = () => {
        const raitenId = bill.raitenId
        const findBillIndex = list.map((el:Bill) => el.raitenId === raitenId)

        if(findBillIndex){
            updateBill(bill)
        }
        
    }

    return(
        <Button
            width={{ base: '100%', md: '400px'}}
            height='60px'
            onClick={ handleUpdateBillClick }
        >
            更新する
        </Button>
    )
}

export default updateBillButtonContainer