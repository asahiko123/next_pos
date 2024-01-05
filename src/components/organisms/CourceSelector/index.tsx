import Select from 'react-select'
import { selectorOptions } from 'utils/data'
import makeAnimated from 'react-select/animated'
import { useSelectedBill } from 'contexts/SelectedBillContext';
import { useBillCardListContext } from 'contexts/BillCardListContext';
import { useState } from 'react';
import { Bill } from 'types';



const CourceSelector = () => {

    const animatedComponents = makeAnimated();
    const { selectedBill, setSelectedBill } = useSelectedBill()
    const { updateBill } = useBillCardListContext()

    const handleChange= (value: any) => {


        if(selectedBill?.order.courceList){

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
        }else{

            if(!selectedBill?.id){
                console.log('idが見つかりません')
                return;
            }

            console.log(typeof value.value)
            
            const newCourceList = [
                {
                    id: 4345,
                    basic_cource: value.value,
                    numberOfPeople: null,
                    price: null,
                    extensionCourceList: [
                        {
                            id: 323,
                            extension_cource: '',
                            price: null,
                        }
                    ]
                }
            ]
            

            const updatedBill = {
                ...selectedBill,
                id: selectedBill.id,
                order: {
                    ...selectedBill.order,
                    courceList: newCourceList
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