import actionsType from '../actions/actionType'

const initState = [
    {
        id: 1,
        title: '苹果',
        price: 555,
        amount: 10
    },
    {
        id: 2,
        title: '香蕉',
        price: 666,
        amount: 15
    }
]

export default (state = initState, action) => {
    switch (action.type) {
        case actionsType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount += 1
                }
                return item
            })
        case actionsType.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount -= 1
                }
                return item
            })
        default:
            return state
    }
}