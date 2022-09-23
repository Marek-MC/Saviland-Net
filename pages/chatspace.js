import Navigation from "./components/navigation.js"

import styles from '../styles/Home.module.css'


export default function Registry() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={null} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        <h1>Chatspace</h1>

        <p>
            A messaging board, hosted on the web. 
        </p>
     

      </main>

    </div>
  )
}
