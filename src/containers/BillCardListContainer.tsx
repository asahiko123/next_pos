import Link from 'next/link'
import { useState, useEffect, Fragment } from 'react'
import OrderCard from '../components/organisms/OrderCard'
import BillCardList from 'components/organisms/BillCardList'
import getAllBills from 'services/bills/getAllBills'
import useSearch from 'services/bills/useSearch'
import { ApiContext, Bill } from 'types'
import { useSelectedBill } from 'contexts/SelectedBillContext'
import Box from 'components/layout/Box'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/proxy',
}

interface BillCardListContainerProps {
  bills?: Bill[]
}

const BillCardListContainer = ({
  bills,
}: BillCardListContainerProps) => {

  const { selectedBill , setSelectedBill } = useSelectedBill()

  useEffect(() => {
    console.log(selectedBill)
  },[selectedBill])

  return (
    <BillCardList numberPerRow={6}>
      
      {bills && bills.map((bill,index) => (
        <Fragment key={`${bill.raitenId}-${index}`}>
          <Box onClick={ () => {setSelectedBill(bill);console.log('clicked')}} key={`${bill.raitenId}-${index}`}>
              <OrderCard
                raitenId={bill.raitenId}
                dayId={bill.dayId}
                price={bill.price}
                imageUrl={bill.imageUrl}
                table={bill.table}
              />
          </Box>
        </Fragment>
      ))}
    </BillCardList>
  )
}

export default BillCardListContainer
