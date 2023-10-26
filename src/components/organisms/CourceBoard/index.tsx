import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill, CourceListKeyProps, CourceOptions } from "types"
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

    const resetKeyPressed = (cource: CourceListKeyProps) => {
    
        if(selectedBill){
                const courceList = selectedBill?.order?.courceList ?? []
                const findIndex = courceList.findIndex((el) => el === cource)

                if(findIndex === -1){
                    console.log('見つかりません')
                }

                const courceListItem = [...courceList]

                courceListItem.splice(findIndex,1)


                const updatedBill = {
                    ...selectedBill,
                    order: {
                        ...selectedBill.order,
                        courceList: courceListItem
                    }
                }

                updateBill(updatedBill)
                setSelectedBill(updatedBill)
        }

        
        
  }
    
   
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}}>
            {
                selectedBill?.order?.courceList?.map((cource,index) => (

                    <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Flex>
                        <Text 
                            as="span"
                            fontSize={{ base: 'small', md: 'medium'}}
                            margin={{ base: 'small', md: 'medium'}}
                        >
                            { cource.basic_cource }

                        </Text>
                        <button onClick={() => resetKeyPressed(cource)}> { "消" }</button>
                        </Flex>
                    </Flex>

                ))
            }
        </Flex>
    )
}


export default CourceBoard