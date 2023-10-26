export type category = 'shoes' | 'clothes' | 'book'
export type Condition = 'new' | 'used'


export type User = {
  id: number
  username: string
  displayName?: string
  email?: string
  profileName?: string
  description?: string
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
  entryTime: string,
  closingTime: string,
  order: {
    raitenId?: number,
    dayId?: number,
    serviceDrinkList?:
        {
            id: number,
            drink: string,
            hostess_id: number,
            price: number
        }[]
    ,
    orderList?: 
        {
            id: number,
            drink: string,
            hostess_id: number,
            price: number
        }[]
    ,
    bottleList?: 
        {   
            id: number,
            bottle: string,
            hostess_id: number,
            price : number
        }[]
    ,
    nominationList?:
        {
            id: number,
            nomination_type_id: number,
            hostess_id: number,
            price: number
        }[]
    ,
    courceList:
        {
            id:number,
            basic_cource: string,
            numberOfPeople: number | null,
            price: number,
            extensionCourceList: {
              id: number,
              extension_cource: string,
              price: number
            }[],      
        }[]
    
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


export type SelectorOptions = {
  value: string,
  label: string,
}

export type CourceOptions = {
  basic_cource: string,
  numberOfPeople: number | null,
  price: number
}

export interface CalculatorKeysOptions{
  value: number,
}

export type MenuBoardKeysOptions = {
  order: string,
  price: number
}

export type ResetKey = {
  value: string
}

export type FooterMenuOptions = {
  value : string
}

export type HostessOptions = {
  hostess_id : number,
  hostess_name: string,
}

export type NominationOptions = {
  nomination_type_id: number,
  nomination: string,
  price: number
}

export type ComponentMap = {
  type : string,
  components: [
    {type: string, component: React.FC},
    {type: string, component: React.FC}
  ]
}

export type TypeMapping = {
  bottleList: BottleKeysProps
  orderList: OrderKeysProps
  nominationList: NominationKeysProps
  serviceDrinkList: serviceDrinkKeysProps
  courceList: CourceListKeyProps
  error: ErrorMassageProps
}

export type Order = {
  order_id: string,
  order_menu: string 
}


export type ListProps = [
  {
    id: string,
    content: string
  }
]

export type OrderKeysProps = {

  id: number;
  drink: string;
  hostess_id: number;
  price: number;

}

export type BottleKeysProps = {

  id: number;
  bottle: string;
  hostess_id: number;
  price: number;

}

export type NominationKeysProps = {
  id: number;
  nomination_type_id: number,
  hostess_id: number;
  price: number;
}


export type CourceListKeyProps = {
  id: number,
  basic_cource: string,
  numberOfPeople: number | null,
  price: number,
  extensionCourceList: {
    id: number,
    extension_cource: string,
    price: number
  }[],   

}


export type serviceDrinkKeysProps = {
  id: number,
  drink: string,
  hostess_id: number,
  price: number
}

export type ErrorMassageProps = {
  id: 0
  drink: "error"
  hostess_id: 0
  price: 0
  bottle: "error"
  massage: "データが取得できませんでした。システム管理者に問い合わせてください"
}

type calcBillChargesProps = {
  type: "bottle" | "order" | "nomination" | "cource" | "serviceDrink" | "cource"
}

type BillKeys = "bottleList" | "orderList" | "serviceDrinkList" | "nominationList" | "courceList";



type SvgIconProps = SVGAttributes<SVGElement> & {
  fileName: string;
  width: number;
  height: number;
}


type ConversionInvoicePlaceholder = {
  placeholder: string
}