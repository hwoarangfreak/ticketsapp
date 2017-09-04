import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from 'Login/actions/LoginActions'
import { NavItem } from 'Nav/components/NavItem'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.logOut = ::this.logOut;
    }

    logOut() {
        this.props.logOut();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='app'>
                <header className='navigation'>
                    <Link className='navigation__logo' to='/'/>
                    <ul className='navigation__list'>
                        <NavItem value='Tickets' addressTo='/tickets'/>
                        {
                            this.props.isAuth ?
                                <NavItem value='User' addressTo='/user'/>
                                :
                                <NavItem value='Register' addressTo='/register'/>
                        }
                        {
                            this.props.isAuth ?
                                <NavItem value='Cart' addressTo='/cart'/>
                                :
                                null
                        }
                        {
                            this.props.isAuth ?
                                <li className='navigation__item' onClick={this.logOut}>Log out</li>
                                :
                                <NavItem value='Log in' addressTo='/login'/>
                        }
                    </ul>
                </header>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Nav))
