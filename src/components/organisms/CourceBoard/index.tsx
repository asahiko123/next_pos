import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill, CourceOptions } from "types"
import { useSelectedBill } from "contexts/SelectedBillContext"
import updateBill from "services/bills/updateBill"
import { useBillCardListContext } from "contexts/BillCardListContext"

interface CourceListProps {
    bill: Bill | null
}
const CourceBoard = ({
    bill
}: CourceListProps) => {

    const { selectedBill, setSelectedBill} = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const resetKeyPressed = (cource: CourceOptions) => {
    
        if(selectedBill){
    

                const updatedBill = {
                    ...selectedBill,
                    cource: {
                        ...selectedBill.cource,
                        cource
                    }
                }

                updateBill(updatedBill)
                setSelectedBill(updatedBill)
        }

        
        
  }
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            {
                bill && (
                    <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Flex>
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                        >
                            { bill.cource.basic_cource }

                        </Text>
                        <button onClick={() => resetKeyPressed(bill.cource)}> { "消" }</button>
                        </Flex>
                    </Flex>
                )
            }
        </Flex>
    )
}


export default CourceBoard