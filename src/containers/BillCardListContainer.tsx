import Link from 'next/link'
import { useState, useEffect, Fragment } from 'react'
import OrderCard from '../components/organisms/OrderCard'
import BillCardList from 'components/organisms/BillCardList'
import getAllBills from 'services/bills/getAllBills'
import useSearch from 'services/bills/useSearch'
import { ApiContext, Bill } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/proxy',
}

interface BillCardListContainerProps {
  raitenId?: number
  dayId?: number
  bills?: Bill[]
}

const BillCardListContainer = ({
  raitenId,
  dayId,
  bills,
}: BillCardListContainerProps) => {
  // const [bills, setBills] = useState<Bill[]>([])

  // useEffect(() => {
  //   const fetchBills = async () => {
  //     const allBills = await getAllBills(context, { raitenId })
  //     setBills(allBills)
  //   }
  //   fetchBills()
  // }, [raitenId])



  return (
    <BillCardList numberPerRow={6}>
      
      {bills && bills.map((bill) => (
        <Fragment key={bill.raitenId}>
          <Link href={`/bills/${bill.raitenId}`}>
              <OrderCard
                raitenId={bill.raitenId}
                dayId={bill.dayId}
                price={bill.price}
                imageUrl={bill.imageUrl}
              />
          </Link>
        </Fragment>
      ))}
    </BillCardList>
  )
}

export default BillCardListContainer
