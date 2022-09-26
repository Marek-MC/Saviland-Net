import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
    };

    registerUser = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'REGISTER',
            payload: {
                username: this.state.username,
                password: this.state.password,
            },
        })
    }

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    render() {
        return (
            <form className="formPanel" onSubmit={this.registerUser} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <h2>Register User</h2>

                {this.props.store.errors.registrationMessage && (
                    <h4 className="alert" role="alert">
                        {this.props.store.errors.registrationMessage}
                    </h4>
                )}

                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            required
                            onChange={this.handleInputChangeFor('username')}
                            placeholder= "Username"
                            autocomplete="off"
                        />
                    </label>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password">
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            required
                            onChange={this.handleInputChangeFor('password')}
                            placeholder="Password"
                            autocomplete="off"
                        />
                    </label>
                </div>

                <div>
                    <input className="btn" type="submit" name="submit" value="Register" />
                </div>
            </form>
        );
    }
}

export default connect(mapStoreToProps)(RegisterForm);