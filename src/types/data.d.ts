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
  table: string,
  raitenId: number
  dayId: number,
  description: string,
  category: string,
  imageUrl?: string,
  price: number,
  condition: string,
  cource: {
    basic_cource: string,
    numberOfPeople: number,
  },
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


export type CourceOptions = {
  value: string,
  label: string,
}

export interface CalculatorKeysOptions{
  value: number,
}