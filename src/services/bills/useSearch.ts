import { ApiContext, Bill } from "types"

export type UseSearchProps = {
    raitenId?: number,
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
        order,
        initial
    }:UseSearchProps
):UseSearch => {
    return {
        bills: 
    }
}

export default useSearch