import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"
import calcBillCharges from "services/bills/calcBillCharges"

const ServiceDrinkBoarder = styled.div`
  padding: ${({ theme }) => theme.small} 0px;
  width: 50%;
  border-bottom: 1px solid  ${({ theme }) => theme.colors.border};
  opacity:0.5;
`


interface ServiceDrinkListProps {
    bill: Bill | null
}
const ServiceDrinkList = ({
    bill
}: ServiceDrinkListProps) => {
    return(
        <Flex flexDirection={{ base: 'column', md: 'column'}} >
            
                {
                    bill?.order?.serviceDrinkList?.map((serviceDrink,index) => (
                        <Flex flexDirection="row">
                        <Text
                            as="span"
                            fontSize={{ base: 'small' ,md: 'medium'}}
                            margin={{ base: 'small' ,md: 'medium'}}
                            key={`${bill.order.raitenId}-${index}` || 'undefined'}>
                                { serviceDrink.drink }
                        </Text>

                        <Text
                            as="span"
                            fontSize={{ base: 'small' ,md: 'medium'}}
                            margin={{ base: 'small' ,md: 'medium'}}
                            key={`${bill.order.raitenId}-${index}` || 'undefined'}>
                                { serviceDrink.price }
                        </Text>
                        </Flex>
                    ))
                }
                <ServiceDrinkBoarder />
                <Flex>
                    
                    <Text 
                        as="h4"
                        margin={{ base: 'small', md: 'medium'}}>
                        { 'ドリンク料金' } 
                    </Text>

                    <Text
                    margin={{ base: 'small', md: 'medium'}}>
                        { calcBillCharges({type: "serviceDrink"})?.serviceDrinkTotal }
                    </Text>
                </Flex>
        </Flex>
    )
}


export default ServiceDrinkList