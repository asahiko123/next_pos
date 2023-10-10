import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { useSelectedBill } from "contexts/SelectedBillContext"
import styled from "styled-components"
import { MenuBoardKeysOptions } from "types"
import { useBillCardListContext } from "contexts/BillCardListContext"


const OrderBoardContainer = styled.div`
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
    .order_container{
        flex: 1;
    }
    button{
        margin-left: 10px;
        height: 50px;
        width: 50px;
        font-size: 30px;
        background: red;
        color: white;
        outline: none;
        border: solid 2px #bebebe;
        cursor: pointer
    }
    .price{
        font-size: 15px;
        
    }
`

type OrderKeysProps = {

    id: number;
    drink: string;
    hostess_id: number;
    price: number;

}

const orderBoard = () => {

    
  const { selectedBill, setSelectedBill } = useSelectedBill()
  const { updateBill } = useBillCardListContext()



  const resetKeyPressed = (order: OrderKeysProps) => {

    if(selectedBill){
        const orderList = selectedBill.order?.orderList ?? []
        const findIndex = orderList.findIndex((el) => el === order)

        console.log(findIndex)

        if(findIndex === -1){
            console.log('見つかりません')
        }
        console.log(orderList)
        const orderListItem = [...orderList]
        console.log(orderListItem)
        const newOrderList = orderListItem.splice(findIndex,1)

        console.log(newOrderList)

        const updatedBill = {
            ...selectedBill,
            order: {
                ...selectedBill.order,
                orderList: orderListItem
            }
        }

        updateBill(updatedBill)
        setSelectedBill(updatedBill)

    }

    
  }
    
   
    return(
        <OrderBoardContainer>
        <Flex flexDirection={{ base: 'column', md: 'column'}} className="order_container">
            {
                selectedBill?.order?.orderList?.map((order,index) => (
                   <Flex flexDirection={{ base: 'column', md: 'column'}}
                    >
                        <Flex className="order_content" justifyContent="space-between">
                            <Text 
                                as="span"
                                fontSize={{ base: 'small', md: 'medium'}}
                                key={ `${selectedBill.order.raitenId}-${index}` || 'undefined'}
                            >
                                { order.drink } 
                                
                            </Text>
                            <Flex flexDirection={{ base: 'column', md: 'column'}} >
                               
                                <Text as="span" className="price"> { order.price }</Text>
                            </Flex>
                                <button onClick={()=> resetKeyPressed(order)}>消</button>
                        </Flex>
                        
                    </Flex>
                ))
            }
        </Flex>
        </OrderBoardContainer>
    )
}


export default orderBoard