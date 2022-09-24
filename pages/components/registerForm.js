

export default function registerForm() {
    return (
        <div className={null}>

            <main className={null} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <h1>Register</h1>

                <p>
                    Register a new account with only a username and a password.
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