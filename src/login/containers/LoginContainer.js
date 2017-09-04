import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchLogin, deleteMessage } from 'Login/actions/LoginActions'
import { Title } from 'Global/Components'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getAccess(this.user.value, this.password.value)
    }
    render() {
        return (
            <div className='login'>
                <Title title='Login page'/>
                <div className='login__form'>
                    <form className='login__form__body' onSubmit={this.handleSubmit}>
                        <input type='text' className='login__form__body__input' placeholder='Username' ref={node => { this.user = node }}/>
                        <input type='text' className='login__form__body__input' placeholder='Password' ref={node => { this.password = node }}/>
                        {
                            this.props.isAuth ?
                                <Redirect to={'/'}/>
                                :
                                <button className='login__form__body__button' type='submit'>Sign in</button>
                        }
                        <div className='login__form__message'>{this.props.message}</div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth,
        message: state.user.message
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAccess: (userName, password) => {
            dispatch(fetchLogin(userName, password))
                .then(setTimeout(() => dispatch(deleteMessage()), 5000))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Login)