import React from 'react'
import {Link} from 'react-router-dom'

export const NavItem = ({ value, addressTo }) => {
    return (
        <li className='navigation__item'>
            <Link to={addressTo}>{value}</Link>
        </li>
    )
};