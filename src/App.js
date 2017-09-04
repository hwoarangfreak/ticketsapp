import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from 'Nav/containers/NavigationContainer'
import Tickets from 'Tickets/containers/TicketsContainer'
import Register from 'Register/containers/RegisterContainer'
import Login from 'Login/containers/LoginContainer'
import UserCabinet from 'Cabinet/containers/CabinetContainer'
import Cart from 'Cart/containers/CartContainer'
import Home from 'Home/containers/Home'

export default (
        <BrowserRouter>
                <Nav>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/tickets' component={Tickets}/>
                    <Route exact path='/user' component={UserCabinet}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/login' component={Login}/>
                </Nav>
        </BrowserRouter>
)