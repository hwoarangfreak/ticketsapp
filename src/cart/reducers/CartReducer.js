import * as types from 'Cart/actions/CartConst'

const initialState = {

};

export default function cart (state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART: {
                return {
                    ...state,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        count: state[action.payload.id] ? state[action.payload.id].count + 1 : 1
                    }
                };
        }
        case types.DECREMENT_COUNT:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: state[action.payload.id].name,
                    price: state[action.payload.id].price,
                    count: state[action.payload.id].count - 1
                }
            };
        case types.INCREMENT_COUNT:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: state[action.payload.id].name,
                    price: state[action.payload.id].price,
                    count: state[action.payload.id].count + 1
                }
            };
        case types.DELETE_CART_ITEM:
            delete state[action.payload.id];
            return {...state};
        default:
            return state;
    }
}