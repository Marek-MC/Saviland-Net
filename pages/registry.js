import Navigation from "./components/navigation"
import LoginForm from './components/loginForm'
import RegisterForm from "./components/registerForm"

import styles from '../styles/Home.module.css'


export default function Registry() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.registry} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        <h1>Registry</h1>

        <LoginForm />

        <RegisterForm />

      </main>

    </div>
  )
}



