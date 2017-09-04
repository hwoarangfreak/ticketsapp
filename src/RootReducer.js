import { combineReducers } from 'redux'
import tickets from 'Tickets/reducers/TicketsReducer'
import user from 'Login/reducers/LoginReducer'
import cart from 'Cart/reducers/CartReducer'
import {reducer as formReducer} from 'redux-form'
import cabinet from 'Cabinet/reducers/CabinetReducer'

export default combineReducers({
    tickets,
    user,
    cart,
    cabinet,
    form: formReducer
})
