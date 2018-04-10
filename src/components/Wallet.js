import React, { Component } from 'react';
import { connect } from 'react-redux';
import balance from '../reducers/balance';

export class Wallet extends Component {
    state = {
        balance: undefined
    };

    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) });
    }

    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
                <hr />
                <input className="input-wallet" onChange={this.updateBalance} />
            </div>
        );
    }
}

export default connect(state => ({ balance: state }), null)(Wallet);