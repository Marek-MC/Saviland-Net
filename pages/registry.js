import styles from '../styles/registry.module.css'

import Navigation from "./components/navigation"
import LoginForm from './components/loginForm'

export default function Registry() {
  return (
    <div className={null}>

      <Navigation />

      <main className={styles.registry}>

        <h1>Register</h1>

        {/* <LoginForm /> */}

        {/* <p>
          Select your Username and Password.
        </p>

        <form>
          <input placeholder="username" /> <input placeholder="password" />
        </form>

        <h1>Login</h1>

        <p>
          If you are already registered, login here.
        </p>

        <form>
          <input placeholder="username" /> <input placeholder="password" />
        </form> */}






      </main>

    </div>
  )
}
