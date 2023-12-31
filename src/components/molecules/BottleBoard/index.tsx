import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"
import { useBillCardListContext } from "contexts/BillCardListContext"
import { BottleKeysProps, OrderKeysProps } from "types"

const BottleBoardContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    .order_content{
        padding: 5px 0px;
        align-items: center;
        font-weight: bold;
        border: solid 1px #bebebe;
        background-color: #ada8b2;
    }
    .bottle_container{
        flex: 1;
    }
    button{
        margin-left: 10px;
        height: 50px;
        width: 50px;
        font-size: 20px;
        background: red;
        color: white;
        outline: none;
        border: solid 2px #bebebe;
        cursor: pointer
    }
`


const bottleBoard = () => {

    
  const { selectedBill, setSelectedBill } = useSelectedBill()
  const { updateBill } = useBillCardListContext()


  const resetKeyPressed = (bottle: BottleKeysProps) => {

    if(selectedBill){
        const bottleList = selectedBill.order?.bottleList ?? []
        const findIndex = bottleList.findIndex((el) => el === bottle)

        console.log(findIndex)

        const bottleListItem = [...bottleList]

        if(findIndex === -1){
            console.log('見つかりません')
        }

        
        bottleListItem.splice(findIndex,1)

        const updatedBill = {
            ...selectedBill,
            order: {
                ...selectedBill.order,
                bottleList: bottleListItem
            }
        }

        updateBill(updatedBill)
        setSelectedBill(updatedBill)

    }

    
  }
    
   
    return(
        <BottleBoardContainer>
        <Flex>
            
            <Flex flexDirection={{ base: 'column', md: 'column'}} className="bottle_container">
                
                
                {
                    selectedBill?.order?.bottleList?.map((bottle,index) => (
                        <Flex className="order_content" justifyContent="space-between">
                            <Text 
                                as="span"
                                fontSize={{ base: 'small', md: 'medium'}}
                                key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                            >
                                { bottle.bottle} 
                            </Text>

                            <Text 
                                as="span"
                                fontSize={{ base: 'small', md: 'medium'}}
                                key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                            >
                                { bottle.price} 
                            </Text>
                            
                                <button onClick={() => resetKeyPressed(bottle)}>消</button>
                        </Flex>
                    ))
                }
                
            </Flex>
        </Flex>
        </BottleBoardContainer>
        
    )
}


export default bottleBoard