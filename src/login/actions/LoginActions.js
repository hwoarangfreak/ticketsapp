import * as types from 'Login/actions/LoginConst'
import { redirect } from 'Store/RouterAction'
import axios from 'axios'


export function logInSuccess(response) {
    return {
        type: types.LOG_IN_SUCCESS,
        payload: { response, message: 'Success login' }
    }
}

export function logInFailed() {
    return {
        type: types.LOG_IN_FAILED,
        payload: { message: 'Wrong username or password' }
    }
}

export function logOut() {

    return {
        type: types.LOG_OUT,
    }
}

export function deleteMessage() {
    return {
        type: types.DELETE_MESSAGE
    }
}

export function fetchLogin(userLogin, userPassword) {
    return dispatch => {
        return axios.get('http://localhost:3001/users', {
            params: {
                username: userLogin,
                password: userPassword,
            }})
            .then(response => {
                response.data.length === 0 ?
                    dispatch(logInFailed())
                    :
                    dispatch(logInSuccess(response.data['0']))
            })
            .catch((error) => {
                console.log(error);
            })
    };
}