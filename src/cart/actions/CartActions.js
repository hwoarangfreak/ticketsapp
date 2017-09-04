import * as types from 'Cart/actions/CartConst'
import axios from 'axios'

export function addToCart(id, name, totalCount, price) {
    return {
        type: types.ADD_TO_CART,
        payload: {id, name, totalCount, price}
    }
}

export function incrementCount(id) {
    return {
        type: types.INCREMENT_COUNT,
        payload: { id }
    }
}

export function decrementCount(id) {
    return {
        type: types.DECREMENT_COUNT,
        payload: { id }
    }
}

export function deleteCartItem(id) {
    return {
        type: types.DELETE_CART_ITEM,
        payload: { id }
    }
}

export function buyTickets(id, count) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/tickets/${id}`)
            .then((response) => {
                axios.put(`http://localhost:3001/tickets/${id}`, {...response.data, count: response.data.count - count})
                    .then(dispatch(deleteCartItem(id)))
            })
            .catch(error => {console.log(error);})
    }
}