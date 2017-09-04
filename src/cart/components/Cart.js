import React from 'react'
import { CartItem } from 'Cart/components/CartItem'
import { CartItemsTitle } from 'Cart/components/CartItemsTitle'
import { Title } from 'Global/Components'

export const Cart = ({cart, totalCount, totalPrice, decrementCount, incrementCount, buyTickets, deleteCartItem, tickets}) => {
    const hasItems = cart.length > 0;
    const items = hasItems ? (
        cart.map((cart) =>
            <CartItem
                id={cart.id}
                name={cart.name}
                price={cart.price}
                count={cart.count}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                buyTickets={buyTickets}
                deleteCartItem={deleteCartItem}
                tickets={tickets[cart.id - 1]}
                key={cart.id}
            />
        )
    ) : (
        <div>You didn't bought anything</div>
    );
    const count = totalCount === 0 ? null : totalCount;
    const price = totalPrice === 0 ? null : '$'+totalPrice;
    return (
        <div className='cart'>
            <Title title='Cart'/>
            <CartItemsTitle id='ID' filmName='Film name' price='Price' count='Count' total='Total' name='blue'/>
            <div className='cart__items white'>{items}</div>
            <CartItemsTitle count={count} total={price} name='blue'/>
        </div>
    )
};