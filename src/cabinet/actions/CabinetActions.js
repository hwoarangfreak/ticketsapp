import * as types from 'Cabinet/actions/CabinetConst'
import axios from 'axios'

function addTicketSuccess() {
    return {
        type: types.ADD_SUCCESS,
        payload: 'Success'
    }
}

function addTicketFailed() {
    return {
        type: types.ADD_FAILED,
        payload: 'Failed'
    }
}

export function deleteCabinetMessage() {
    return {
        type: types.DELETE_CABINET_MESSAGE
    }
}

export function addTicket(values) {
    return dispatch => {
        return axios.post('http://localhost:3001/tickets', {
            name: values.name,
            title: values.title,
            price: values.price,
            count: values.count,
            eventTime: values.eventTime,
            url: values.url
        })
            .then(() => {
            dispatch(addTicketSuccess())
            })
            .catch((error) => {
            console.log(error);
            dispatch(addTicketFailed())
            })
    }
}