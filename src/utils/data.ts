
import bottleBoard from "components/molecules/BottleBoard"
import nominationList from "components/organisms/NominationList"
import orderBoard from "components/molecules/OrderBoard"
import calculator from "components/organisms/Calculator"
import menuBoard from "components/organisms/MenuBoard"
import nominationBoard from "components/molecules/NominationBoard"
import OrderList from "components/organisms/OrderList"
import selector from 'components/organisms/Selector'
import { CalculatorKeysOptions, ComponentMap, CourceOptions, FooterMenuOptions, HostessOptions, MenuBoardKeysOptions, Order} from "types"


export const courceOptions: CourceOptions[] = [
    { value : '60分コース',label: '60分コース'},
    { value : '120分コース',label: '120分コース'},
    { value : 'お試しコース',label: 'お試しコース'},
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


export const menuBoardKeys: MenuBoardKeysOptions[] = [
    { order: 'ゲストドリンク1000'},
    { order: 'ゲストドリンク2000'},
    { order: 'ゲストドリンク1500'},
    { order: 'チーズ盛り合わせ'},
    { order: 'ココナッツ'},
    { order: 'ヴーヴイエロー'},
    { order: 'おかき'},
    { order: 'バナナ'},
    { order: 'たこやき'},
    { order: 'V.O.'},
    { order: '白ワイン'},
    { order: '赤ワイン'},
    { order: 'ドン・ぺリニオン'},
    { order: '酎ハイ'}
] 


export const footerMenu: FooterMenuOptions[] = [
    { value: '基本コース選択'},
    { value: 'オーダー'},
    { value: '指名'},
    { value: 'ボトル'},
    { value: 'お会計'},
    { value: '延長'},
]

export const hostess: HostessOptions[] = [
    { hostess_id: '1', hostess_name: 'ほのか'},
    { hostess_id: '2', hostess_name: 'ありさ'},
    { hostess_id: '3', hostess_name: 'りか'},
    { hostess_id: '4', hostess_name: 'ゆい'},
    { hostess_id: '5', hostess_name: 'れい'},
    { hostess_id: '6', hostess_name: 'あすか'},
    { hostess_id: '7', hostess_name: 'まりん'},
    { hostess_id: '8', hostess_name: 'のの'},
    
]



export const componentMap: ComponentMap[] = [
    {
        type: '基本コース選択',
        components: [
            { type: 'calculator', component: calculator},
            { type: 'selector', component: selector},
        ]
    },
    {
        type: 'オーダー',
        components: [
            { type: 'menuBoard', component: menuBoard},
            { type: 'orderList', component: orderBoard},
        ] 
    },
    {
        type: 'ボトル',
        components: [
            { type: 'menuBoard', component: menuBoard},
            { type: 'bottleList', component: bottleBoard}
        ]
    },
    {
        type: '指名',
        components: [
            { type: 'nominationBoard',component: nominationBoard},
            { type: 'nominationList',component: nominationList}
        ]
    }
    
    
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




