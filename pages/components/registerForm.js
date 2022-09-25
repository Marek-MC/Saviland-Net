import { Component } from 'react'

class RegisterForm extends Component {


    render() {
        return (
            <div>

                <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <h1>Register</h1>

                    <p>
                        Register for a fresh account with just a username and password.
                    </p>

                    <form>
                        <input placeholder="username" />
                        <br /> <br />
                        <input placeholder="password" />
                    </form>
                    
                </main>
            </div>
        )
    }
}

export default RegisterForm