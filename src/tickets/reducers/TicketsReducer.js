import * as types from '../actions/TicketsConst'

const initialState = {
    limit: 10,
    currentPage: 1
};

export default function tickets(state = initialState, action) {
    switch (action.type) {
        case types.GET_TICKETS:
            return {
                ...state,
                tickets: action.payload.tickets,
                currentPage: action.payload.currentPage,
                limit: action.payload.limit
            };
        default:
            return state;
    }
}