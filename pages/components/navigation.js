import styles from '../../styles/navigation.module.css'
import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (

      <div className={styles.navigation}>

        <header>

            Saviland Net

        </header>

        <Link href="/">
          <a>
            <svg id='moon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
            </svg>
          </a>
        </Link>
        
        <nav>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/vault">Vault</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/extra">Extra</Link>
            </li>
          </ul>

        </nav>
      </div>
    )
  }
}

export default Navigation