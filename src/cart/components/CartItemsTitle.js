import React from 'react'

export const CartItemsTitle = ({ name, id, filmName, price, count, total }) => {
    return (
        <div className='cart__items'>
            <div className={`cart__items__title ${name}`}>
                <div className='cart__items__title__id'>{id}</div>
                <div className='cart__items__title__name'>{filmName}</div>
                <div className='cart__items__title__price'>{price}</div>
                <div className='cart__items__title__count'>{count}</div>
                <div className='cart__items__title__total'>{total}</div>
            </div>
        </div>
    )
};
