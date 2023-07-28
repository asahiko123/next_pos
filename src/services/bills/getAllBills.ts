import { ApiContext, Bill } from 'types'
import { fetcher } from 'utils'

export type GetAllBillsParams = {
  raitenId?: number
  order?: 'asc' | 'desc'
  initial?: Bill[]
}

const getAllBills = async (
  context: ApiContext,
  { raitenId, order, initial }: GetAllBillsParams = {},
): Promise<Bill[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/board`
  const params = new URLSearchParams()

  raitenId && params.append('raitenId', `${raitenId}`)
  order && params.append('order', order)
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllBills
