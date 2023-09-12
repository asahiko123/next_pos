import Button from "components/atoms/Button";
import { useBillCardListContext } from "contexts/BillCardListContext";
import { Bill } from "types";



type AddToBillListButtonProps = {

    bill: Bill

}

const addToBillListContainer = ({
    bill,
}: AddToBillListButtonProps) => {

    const { list, addBillToList } = useBillCardListContext()

    const handleAddToBillListClick = () => {
        const raitenId = bill.raitenId
        const findIndex = list.findIndex((el: Bill) => raitenId === el.raitenId)

        if(findIndex === -1){
            addBillToList(bill)
        }

    }
    
    return(
        <Button
            width={{base: '100%',md:'400px'}}
            height='60px'
            onClick={handleAddToBillListClick}>
                追加する
        </Button>
    )
}

export default addToBillListContainer


