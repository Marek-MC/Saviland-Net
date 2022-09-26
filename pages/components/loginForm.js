import { Component } from 'react'
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStoreToProps'

class LoginForm extends Component {

    state = {
        username: '',
        password: '',
    }

    login = (event) => {
        event.preventDefault()
        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'LOGIN',
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            })
        } else {
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' })
        }
    }

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }




    render() {
        return (
            <form className="formPanel" onSubmit={this.login} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Login</h2>
                {this.props.store.errors.loginMessage && (
                    <h4 className="alert" role="alert">
                        {this.props.store.errors.loginMessage}
                    </h4>
                )}

                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                            placeholder="Username"
                            autocomplete="off"
                        />
                    </label>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password">
                        <input
                            type="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                            placeholder="Password"
                            autocomplete="off"
                        />
                    </label>
                </div>

                <div>
                    <input className="btn" type="submit" name="submit" value="Log In" />
                </div>
            </form>
        )
    }
}



export default connect(mapStoreToProps)(LoginForm)