import Flex from "components/layout/Flex"
import Text from 'components/atoms/Text'
import { Bill } from "types"
import styled from "styled-components"

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
                <Text as="h4">
                { 'ドリンク料金' } { '見本 円'}
            </Text>
        </Flex>
    )
}


export default ServiceDrinkList