import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Cart } from 'Cart/components/Cart'
import {decrementCount, incrementCount, buyTickets, deleteCartItem} from 'Cart/actions/CartActions'

class CartContainer extends Component {
    constructor(props) {
        super(props);
    }

    getArrObj(obj) {
        let arr = [];
        for (let i in obj) {
            arr.push(obj[i]);
        }
        return arr;
    }

    getPriceCount(obj) {
        let totalCount = 0;
        let totalPrice = 0;
        for (let i in obj) {
            totalCount += obj[i].count;
            totalPrice += obj[i].count * obj[i].price;
        }
        return {totalCount, totalPrice};
    }

    render() {
        let temp = this.getArrObj(this.props.cart);
        let total = this.getPriceCount(temp);
        return (
                this.props.isAuth ?
                <Cart
                    cart={temp}
                    totalCount={total.totalCount}
                    totalPrice={total.totalPrice}
                    decrementCount={this.props.decrementCount}
                    incrementCount={this.props.incrementCount}
                    buyTickets={this.props.buyTickets}
                    deleteCartItem={this.props.deleteCartItem}
                    tickets={this.props.tickets}
                />
                :
                <Redirect to={'/'}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        tickets: state.tickets.tickets,
        isAuth: state.user.isAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCount: (id) => {
            dispatch(incrementCount(id))
        },
        decrementCount: (id) => {
            dispatch(decrementCount(id))
        },
        buyTickets: (id, count) => {
            dispatch(buyTickets(id, count))
        },
        deleteCartItem: (id) => {
            dispatch(deleteCartItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CartContainer)