
import bottleBoard from "components/molecules/BottleBoard"
import orderBoard from "components/molecules/OrderBoard"
import calculator from "components/organisms/Calculator"
import nominationBoard from "components/organisms/NominationBoard"
import { CalculatorKeysOptions, ComponentMap, CourceOptions, FooterMenuOptions, HostessOptions, MenuBoardKeysOptions, NominationOptions, Order, PaymentOptions, SelectorOptions} from "types"
import BottleMenuBoard from "components/organisms/BottleMenuBoard"
import OrderMenuBoard from "components/organisms/OrderMenuBoard"
import NominationMenuBoard from "components/organisms/NominationMenuBoard"
import InvoicePreview from "components/organisms/InvoicePreview"
import InvoiceBoard from "components/organisms/InvoiceBoard"
import cource_selector from "components/organisms/CourceSelector"
import serviceDrinkMenuBoard from "components/organisms/ServiceDrinkMenuBoard"
import ServiceDrinkBoard from "components/organisms/ServiceDrinkBoard"


export const selectorOptions: SelectorOptions[] = [
    { value : '60分コース',label: '60分コース',numberOfPeople: null, price: 1500},
    { value : '120分コース',label: '120分コース',numberOfPeople: null, price: 2000},
    { value : 'お試しコース',label: 'お試しコース',numberOfPeople: null, price: 1000},
]

export const paymentOptions: PaymentOptions[] = [
    { value: '現金',label: '現金'},
    { value: 'カード10%',label: 'カード10%'},
    { value: 'カード0%',label: 'カード0%'}
]

export const courceOptions: CourceOptions[] = [
    { basic_cource : '60分コース',numberOfPeople: null, price: 1500},
    { basic_cource : '120分コース',numberOfPeople: null, price: 2000},
    { basic_cource : 'お試しコース',numberOfPeople: null, price: 1000},
]
export const calculatorKeys: CalculatorKeysOptions[] = [
    { value: 1},
    { value: 2},
    { value: 3},
    { value: 4},
    { value: 5},
    { value: 6},
    { value: 7},
    { value: 8},
    { value: 9},
]


export const orderBoardKeys: MenuBoardKeysOptions[] = [
    { order: 'ゲストドリンク1000',price: 1000},
    { order: 'ゲストドリンク2000',price: 2000},
    { order: 'ゲストドリンク1500',price: 3000},
    { order: 'チーズ盛り合わせ',price: 2000},
    { order: 'ココナッツ',price: 1000},
    { order: 'ヴーヴイエロー',price: 20000},
    { order: 'おかき', price: 4000},
    { order: 'バナナ', price: 2000},
    { order: 'たこやき', price:1500},
    { order: 'V.O.', price: 2000},
    { order: '白ワイン', price: 1500},
    { order: '赤ワイン', price: 1000},
    { order: 'ドン・ぺリニオン',price: 500},
    { order: '酎ハイ',price: 1500}
] 


export const serviceDrinkKeys: MenuBoardKeysOptions[]= [
    { order:'キャストドリンク1000', price: 1000},
    { order: 'キャストドリンク2000', price: 2000},
    { order: 'キャストドリンク1500', price: 1500},
]

export const bottleBoardKeys: MenuBoardKeysOptions[] = [
    { order: 'いいちこ',price: 1000},
    { order: '黒霧島',price: 2000},
    { order: '四日市',price: 3000},
    { order: '泡盛',price: 2000},
    { order: 'ジャックダニエル',price: 1000},
    { order: 'ヴーヴイエロー',price: 20000},
    { order: 'ジャンパン', price: 4000},
    { order: 'モーツアルト', price: 2000},
    { order: 'ワイルドターキー', price:1500},
    { order: 'V.O.', price: 2000},
    { order: '白ワイン', price: 1500},
    { order: '赤ワイン', price: 1000},
    { order: 'ドン・ぺリニオン',price: 500},
    { order: '酎ハイ',price: 1500}
] 


export const footerMenu: FooterMenuOptions[] = [
    { value: '基本コース選択'},
    { value: 'オーダー'},
    { value: 'ドリンク'},
    { value: '指名'},
    { value: 'ボトル'},
    { value: '領収'},
    { value: '延長'},
]

export const hostess: HostessOptions[] = [
    { hostess_id: 1, hostess_name: 'ほのか'},
    { hostess_id: 2, hostess_name: 'ありさ'},
    { hostess_id: 3, hostess_name: 'りか'},
    { hostess_id: 4, hostess_name: 'ゆい'},
    { hostess_id: 5, hostess_name: 'れい'},
    { hostess_id: 6, hostess_name: 'あすか'},
    { hostess_id: 7, hostess_name: 'まりん'},
    { hostess_id: 8, hostess_name: 'のの'},
    { hostess_id: 9, hostess_name: 'まりあ'},
    { hostess_id: 10, hostess_name: 'るい'},
    { hostess_id: 11, hostess_name: 'れい'},
    { hostess_id: 12, hostess_name: 'あやの'},
    { hostess_id: 13, hostess_name: 'かな'},
    { hostess_id: 14, hostess_name: 'ぼたん'},
    { hostess_id: 15, hostess_name: 'りゅう'},
    { hostess_id: 16, hostess_name: 'さくら'},
    
]

export const nominations: NominationOptions[] = [
    {nomination_type_id: 1, nomination: '本指',price: 2000},
    {nomination_type_id: 2, nomination: '場内',price: 1000},
    {nomination_type_id: 5, nomination: '同伴', price: 1500},
]



export const componentMap: ComponentMap[] = [
    {
        type: '基本コース選択',
        components: [
            { type: 'calculator', component: calculator},
            { type: 'selector', component: cource_selector},
        ]
    },
    {
        type: 'オーダー',
        components: [
            { type: 'menuBoard', component: OrderMenuBoard},
            { type: 'orderList', component: orderBoard},
        ] 
    },
    {
        type: 'ボトル',
        components: [
            { type: 'menuBoard', component: BottleMenuBoard},
            { type: 'bottleList', component: bottleBoard}
        ]
    },
    {
        type: '指名',
        components: [
            { type: 'nominationBoard',component: NominationMenuBoard},
            { type: 'nominationList',component: nominationBoard}
        ]
    },
    {
        type: '領収',
        components: [
            { type: 'nominationBoard',component: InvoicePreview},
            { type: 'nominationList',component: InvoiceBoard}
        ]
    },
    {
        type: 'ドリンク',
        components: [
            { type: 'serviceDrinkBoard',component: serviceDrinkMenuBoard},
            { type: 'serviceDrinkList',component: ServiceDrinkBoard}
        ]
    },

    
    
]

export const orderMenu: Order[] = [
    {
        order_id: '1',
        order_menu: 'ピラフ'
    },
    {
        order_id: '2',
        order_menu: 'カボチャ'
    },
    {
        order_id: '3',
        order_menu: '餃子'
    },
    {
        order_id: '4',
        order_menu: 'チーズ盛り合わせ'
    },
    {
        order_id: '5',
        order_menu: 'ミックスナッツ'
    }
]




