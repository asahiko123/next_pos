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
  dayId: number
  category: string
  order: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

export type ApiContext = {
  apiRootUrl: string
}
