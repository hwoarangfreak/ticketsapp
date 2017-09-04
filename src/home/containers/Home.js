import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Title } from 'Global/Components'

class Home extends Component {
    render() {
        return (
            this.props.isAuth ?
                <div className='home'>
                    <Title title={`Welcome to the tickets shop, ${this.props.name}`}/>
                    <div className='home__body'>
                        To buy tickets you need to go in tickets page, add to cart some tickets and then buy on cart page<br/>
                    </div>
                </div>
                :
                <div className='home'>
                    <Title title='Welcome to the tickets shop'/>
                    <div className='home__body'>
                        To buy tickets you need to complete authorization <br/>
                        (login:admin, password: admin123 - admin access, login:hello, password:world - for user access)
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth,
        name: state.user.firstname
    }
}

export default connect(mapStateToProps, null, null, {pure: false})(Home)