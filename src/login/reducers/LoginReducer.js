import * as types from 'Login/actions/LoginConst'

const initialState = {
    username: null,
    access: 'watcher',
    isAuth: false
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            return {...state,
                isAuth: true,
                username: action.payload.response.username,
                access: action.payload.response.access,
                firstname: action.payload.response.firstname,
                secondname: action.payload.response.secondname,
                email: action.payload.response.email,
                message: action.payload.message};
        case types.LOG_IN_FAILED:
            return {...state, message: action.payload.message};
        case types.LOG_OUT:
            return {...state,
                isAuth: false,
                username: null,
                access: 'watcher',
                firstname: null,
                secondname: null,
                email: null,
                message: null};
        case types.DELETE_MESSAGE:
            return {...state, message: null};
        default:
            return state;
    }
}