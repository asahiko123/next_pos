import { ApiContext, Bill } from "types"
import { fetcher } from "utils"

export type UpdateBillParams = {
    raitenId: number,
    data: Bill
}

const updateBill = async (
    context : ApiContext,
    { raitenId }: UpdateBillParams,
    data : Bill
): Promise<Bill> => {
    const path =  `${context.apiRootUrl.replace(/\/$/g,'')}/bills/${data.id}`
    const updateData =  data

    return await fetcher(path,{
        method: "PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    
}

export default updateBill