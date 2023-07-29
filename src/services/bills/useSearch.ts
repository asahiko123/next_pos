import { URLSearchParams } from "url"
import useSWR from "swr"
import { ApiContext, Bill } from "types"

export type UseSearchProps = {
    raitenId?: number,
    dayId?: number,
    order?: 'asc' | 'desc'
    initial?: Bill[]
}

export type UseSearch = {
   bills: Bill[],
   isloading: boolean,
   isError: boolean,
}

const useSearch = (
    context: ApiContext,
    {
        raitenId,
        dayId,
        initial
    }:UseSearchProps = {}
):UseSearch => {
    const path = `${context.apiRootUrl.replace(/\/$/g, '')}/mainBoard`
    const params = new URLSearchParams()

    raitenId && params.append('raitenId',`${raitenId}`)
    dayId && params.append('dayId',`${dayId}`)

    const query = params.toString()
    console.log(query)
    const { data, error } = useSWR<Bill[]>(
        query.length > 0 ? `${path}?${query}` : path
    )

    return{
        bills: data ?? initial ?? [],
        isloading : !error && !data,
        isError : !!error,
    }
}
export default useSearch
