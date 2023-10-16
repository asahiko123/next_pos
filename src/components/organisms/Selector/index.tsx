import Select from 'react-select'
import { selectorOptions } from 'utils/data'
import makeAnimated from 'react-select/animated'
import { useSelectedBill } from 'contexts/SelectedBillContext';
import { useBillCardListContext } from 'contexts/BillCardListContext';
import { useState } from 'react';

const selector = () => {

    const animatedComponents = makeAnimated();
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const handleChange= (value: any) => {

        

        if(selectedBill){
            const cource = { basic_cource: value.value, 
                numberOfPeople: selectedBill?.cource.numberOfPeople,
                price: selectedBill?.cource.price
               }

            console.log(cource)

            const updatedBill = {
                ...selectedBill,
                cource
            }

            console.log(updatedBill)
                updateBill(updatedBill)
                setSelectedBill(updatedBill)
        }

        console.log(selectedBill?.cource)
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

export default selector;