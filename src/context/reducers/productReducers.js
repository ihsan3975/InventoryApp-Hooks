const initState = {
    products: [],
    total: 0,
    action: null
}

export default function(state = initState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload.data,
                total: action.payload.total[0].total
            }
        default:
            return state
    }
}