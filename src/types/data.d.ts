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
  id: number | null
  table: string | null,
  raitenId: number | null
  dayId: number | null,
  description: string | null,
  category: string | null,
  imageUrl?: string | null, 
  price: number | null,
  condition: string | null,
  entryTime: string | null,
  closingTime: string | null,
  order: {
    raitenId?: number | null,
    dayId?: number | null,
    serviceDrinkList?:
        {
            id: number | null,
            drink: string | null,
            hostess_id: number | null,
            price: number | null
        }[]
    ,
    orderList?: 
        {
            id: number | null,
            drink: string | null,
            hostess_id: number | null,
            price: number | null
        }[]
    ,
    bottleList?: 
        {   
            id: number | null,
            bottle: string | null,
            hostess_id: number | null,
            price : number | null
        }[]
    ,
    nominationList?:
        {
            id: number | null,
            nomination_type_id: number | null,
            hostess_id: number | null,
            price: number | null
        }[]
    ,
    courceList:
        {
            id:number | null,
            basic_cource: string | null,
            numberOfPeople: number | null,
            price: number | null,
            extensionCourceList: {
              id: number | null,
              extension_cource: string | null,
              price: number | null
            }[],      
        }[]
    
  },
  owner: {
    id: number | null,
    username: string | null,
    displayName: string | null,
    email: string | null,
    profileImageUrl: string| null,
    description: string | null
  }
  
}

export type ApiContext = {
  apiRootUrl: string
}


export type SelectorOptions = {
  value: string,
  label: string,
  numberOfPeople: number | null,
  price: number

}

export type PaymentOptions = {
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