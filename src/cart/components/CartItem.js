import React, { Component } from 'react';

export class CartItem extends Component {
    constructor(props) {
        super(props);
        this.decrementCount = ::this.decrementCount;
        this.incrementCount = ::this.incrementCount;
        this.buyTickets = ::this.buyTickets;
        this.deleteCartItem = ::this.deleteCartItem;
    }

    decrementCount() {
        this.props.decrementCount(this.props.id);
    }

    incrementCount() {
        this.props.incrementCount(this.props.id);
    }

    buyTickets() {
        this.props.buyTickets(this.props.id, this.props.count)
    }

    deleteCartItem() {
        this.props.deleteCartItem(this.props.id);
    }

    render() {
        return (
            <div className='cart__items__title'>
                <div className='cart__items__title__id'>{this.props.id}</div>
                <div className='cart__items__title__name'>{this.props.name}</div>
                <div className='cart__items__title__price'>&#36;{this.props.price}</div>
                <div className='cart__items__title__count'>
                    <button
                        disabled={this.props.count === 1}
                        className='cart__items__title__button'
                        onClick={this.decrementCount}>-</button>
                    <span>{this.props.count}</span>
                    <button
                        disabled={this.props.tickets.count === this.props.count}
                        className='cart__items__title__button'
                        onClick={this.incrementCount}>+</button>
                </div>
                <div className='cart__items__title__total'>&#36;{this.props.price * this.props.count}</div>
                <button className='cart__items__title__buy' onClick={this.buyTickets}>Buy</button>
                <button className='cart__items__title__delete' onClick={this.deleteCartItem}>Delete</button>
            </div>
        )
    }
}