import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class TicketsList extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        this.props.addToCart(this.props.ticket.id, this.props.ticket.name, this.props.ticket.count, this.props.ticket.price);
    }

    render() {
        return (
            <div key={this.props.ticket.id} className='tickets__box'>
                <div className='tickets__box__left'>
                    <img src={this.props.ticket.url} alt=''/>
                </div>
                <div className='tickets__box__right'>
                    <div className='tickets__box__right__name'>{this.props.ticket.name}</div>
                    <div className='tickets__box__right__title'>{this.props.ticket.title}</div>
                    <div className='tickets__box__right__price'>Cost: {this.props.ticket.price}</div>
                    <div className='tickets__box__right__count'>Current count: {this.props.ticket.count}</div>
                    <div className='tickets__box__right__count'>Event time: {this.props.ticket.eventTime}</div>
                    {
                        this.props.ticket.count === 0 ?
                            <div className='tickets__box__right__price'>Not available</div>
                            :
                            this.props.isAuth ?
                                <button
                                    disabled={this.props.current[this.props.ticket.id] && this.props.current[this.props.ticket.id].count === this.props.ticket.count}
                                    className='tickets__box__right__button'
                                    onClick={this.addToCart}>
                                    Add to cart</button>
                                :
                                <Link to='/login'>
                                    <button className='tickets__box__right__button'>Add to cart</button>
                                </Link>
                    }
                </div>
            </div>
        );
    }
}