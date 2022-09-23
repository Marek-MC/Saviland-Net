import { Component } from 'react'

class LoginForm extends Component {


    render() {
        return (
            <div>

                <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <h1>Login</h1>

                    <p>
                        If you are already registered, login here.
                    </p>

                    <form>
                        <input placeholder="username" /> <input placeholder="password" />
                    </form>
                    
                </main>
            </div>
        )
    }
}

export default LoginForm