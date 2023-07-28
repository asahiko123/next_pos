import Link from 'next/link'
import { useState, useEffect, Fragment } from 'react'
import OrderCard from '../components/organisms/OrderCard'
import BillCardList from 'components/organisms/BillCardList'
import getAllBills from 'services/bills/getAllBills'
import { ApiContext, Bill } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/proxy',
}

interface BillCardListContainerProps {
  raitenId?: number
  dayId?: number
}

const BillCardListContainer = ({
  raitenId,
  dayId,
}: BillCardListContainerProps) => {
  // const [bills, setBills] = useState<Bill[]>([])

  // useEffect(() => {
  //   const fetchBills = async () => {
  //     const allBills = await getAllBills(context, { raitenId })
  //     setBills(allBills)
  //   }
  //   fetchBills()
  // }, [raitenId])

  const { bills: bills} = useSearch(context,{
    raitenId,
    initial: bills,
  })

  return (
    <BillCardList numberPerRow={6}>
      {bills.map((bill) => (
        <Fragment key={bill.raitenId}>
          <Link href={`/bills/${bill.raitenId}`}>
            <a>
              <OrderCard
                raitenId={bill.raitenId}
                dayId={bill.dayId}
                order={bill.order}
                price={bill.price}
                imageUrl={bill.imageUrl}
              />
            </a>
          </Link>
        </Fragment>
      ))}
    </BillCardList>
  )
}

export default BillCardListContainer
