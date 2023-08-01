import { ApiContext, Bill } from "types"
import { fetcher } from "utils"

export type UpdateBillParams = {
    raitenId: number,
    data: {}
}

const updateBill = async (
    context : ApiContext,
    { raitenId }: UpdateBillParams,
    data : {}
): Promise<Bill> => {
    const path =  `${context.apiRootUrl.replace(/\/$/g,'')}/bills`
    const params = new URLSearchParams()
    const updateData =  data

    params.append('raitenId',`${raitenId}`)

    const query = params.toString()

    return await fetcher(path,{
        method: "PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    
}

export default updateBill