import  type { ApiContext, User } from '../../types/data.d'
import { fetcher } from 'utils'

export type GetUserPatterns = {
    id: number
}

const getUser = async(
    context: ApiContext,
    { id }: GetUserPatterns,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,'')}/users/${id}`,
        {
           headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
           } ,
        },
    )

}

export default getUser