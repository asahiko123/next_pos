import Select from 'react-select'
import { selectorOptions } from 'utils/data'
import makeAnimated from 'react-select/animated'
import { useSelectedBill } from 'contexts/SelectedBillContext';
import { useBillCardListContext } from 'contexts/BillCardListContext';
import { useState } from 'react';



const CourceSelector = () => {

    const animatedComponents = makeAnimated();
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const handleChange= (value: any) => {


        if(selectedBill){

            console.log(selectedBill.order)

            const courceList = selectedBill.order.courceList

           
            courceList[0].basic_cource = value.value
            courceList[0].price = value.price
            


            const updatedBill = {
                ...selectedBill,
                order: {
                    ...selectedBill.order,
                    courceList: courceList
                }
            }

            updateBill(updatedBill)
            setSelectedBill(updatedBill)
        }


    }

    

    return(
        <Select 
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[selectorOptions[0]]}
            options={selectorOptions}
            onChange={(value)=>handleChange(value)}
             />
    )
}

export default CourceSelector;