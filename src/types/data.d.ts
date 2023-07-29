export type category = 'shoes' | 'clothes' | 'book'
export type Condition = 'new' | 'used'

export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileName: string
  description: string
}

export type Bill = {
  id: number
  raitenId: number
  dayId: number,
  description: string,
  category: string,
  imageUrl?: string,
  price: number,
  condition: string,
  order: {
    raitenId?: number,
    dayId?: number,
    orderList?: [
        {
            drink: string,
            hostess_id: number,
            price: number
        }
    ],
    bottleList?: [
        {
            bottle: string,
            hostess_id: number,
            price : number
        }
    ]
  },
  owner: {
    id: number,
    username: string,
    displayName: string,
    email: string,
    profileImageUrl: string,
    description: string
  }
  
}

export type ApiContext = {
  apiRootUrl: string
}
