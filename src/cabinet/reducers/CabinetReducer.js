import * as types from 'Cabinet/actions/CabinetConst'

const initialState = {
    message: null
};

export default function cabinet(state = initialState, action) {
    switch (action.type) {
        case types.ADD_SUCCESS:
            return {...state, message: action.payload};
        case types.ADD_FAILED:
            return {...state, message: action.payload};
        case types.DELETE_CABINET_MESSAGE:
            return {...state, message: null};
        default:
            return state;
    }
}