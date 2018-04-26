import React, { Component } from 'react';

import Button from '../../../components/UI/Buttton/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHanlder = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            costumer: {
                name: 'Luiz Sol',
                address: {
                    street: 'Rua dos bobos',
                    zipCode: '0',
                    country: 'Brazil'
                },
                email: 'luizedusol@gmail.com',
            },
            deliveryMethod: 'fastest',
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                })
                this.props.history.push('/');
            })
            .catch(error => this.setState({
                loading: false,
            }));
    }

    render() {
        let form = (
            <form>
                <input
                    className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    className={classes.Input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="street"
                    placeholder="Your Street"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="postal"
                    placeholder="Your postal code"
                />
                <Button clicked={this.orderHanlder} btnType="Success">ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;