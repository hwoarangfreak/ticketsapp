import React  from 'react'
import { connect } from 'react-redux'
import { fetchTickets } from 'Tickets/actions/TicketsActions'
import { addToCart } from 'Cart/actions/CartActions'
import TicketsList from 'Tickets/components/TicketsListComponent'

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.checkbox = false;
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.show5 = this.show.bind(this, 5);
        this.show10 = this.show.bind(this, 10);
        this.showAll = this.show.bind(this, 'all');
    }
    prevPage() {
        if (this.props.currentPage === 1) {
            return null;
        } else {
            this.props.getTickets(this.props.currentPage - 1, this.props.limit)
        }
    }
    nextPage() {
        if (this.props.tickets.length === 0) {
            return null;
        } else {
            this.props.getTickets(this.props.currentPage + 1, this.props.limit)
        }
    }
    show(limit) {
        this.props.getTickets(1, limit)
    }

    componentWillMount() {
        this.props.getTickets(this.props.currentPage, this.props.limit);
    }

    render() {
        if (!this.props.tickets) {
            return null;
        } else {
            let nodes = this.props.tickets.map(ticket => {
                return <TicketsList
                    isAuth={this.props.isAuth}
                    checkbox={this.checkbox}
                    current={this.props.cart}
                    ticket={ticket}
                    addToCart={this.props.addToCart}
                    key={ticket.id}
                />
            })
            return (
                <div className='tickets'>
                    <div className='tickets__prev-next'>
                        <button className='tickets__prev-next__prev-page' onClick={this.prevPage}>{'<'}</button>
                        <button className='tickets__prev-next__next-page' onClick={this.nextPage}>{'>'}</button>
                    </div>
                    <div className='tickets__buttons-box'>
                        <button className='tickets__buttons-box__show' onClick={this.show5}>5</button>
                        <button className='tickets__buttons-box__show' onClick={this.show10}>10</button>
                        <button className='tickets__buttons-box__show' onClick={this.showAll}>All</button>
                    </div>
                    {nodes}
                </div>
            );
        }
    }
}

function mapStateToProps(store) {
    return {
        tickets: store.tickets.tickets,
        cart: store.cart,
        isAuth: store.user.isAuth,
        limit: store.tickets.limit,
        currentPage: store.tickets.currentPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTickets: (page, limit) => {
            dispatch(fetchTickets(page, limit));
        },
        addToCart: (id, name, count, price) => {
            dispatch(addToCart(id, name, count, price));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Tickets)