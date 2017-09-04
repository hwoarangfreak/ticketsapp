import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AddTicketsForm from 'Cabinet/components/AddTicketsForm'
import { TitleData } from 'Cabinet/components/TitleData'
import {Title} from 'Global/Components'
import { ADMIN } from 'Cabinet/actions/CabinetConst'
import { addTicket, deleteCabinetMessage } from 'Cabinet/actions/CabinetActions'

class Cabinet extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }
    handleSubmit(values) {
        this.props.addTicket(values);
    }
    render() {
        return (
            this.props.isAuth ?
                <div className='cabinet'>
                    <Title title='User cabinet'/>
                    <div className='cabinet__body'>
                        <div className='cabinet__body__left'>
                        <TitleData title='First name: ' data={this.props.firstName}/>
                        <TitleData title='Second name: ' data={this.props.secondName}/>
                        <TitleData title='E-mail: ' data={this.props.email}/>
                        </div>
                        {
                            this.props.access === ADMIN ?
                                <div className='cabinet__body__right'>
                                    <div className='cabinet__body__right__title'>Add new tickets</div>
                                    <AddTicketsForm message={this.props.message} onSubmit={this.handleSubmit}/>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>

                :

                <Redirect to={'/'}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth,
        firstName: state.user.firstname,
        secondName: state.user.secondname,
        email: state.user.email,
        access: state.user.access,
        message: state.cabinet.message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTicket: (values) => {
            dispatch(addTicket(values))
                .then(setTimeout(() => dispatch(deleteCabinetMessage()), 5000))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Cabinet)