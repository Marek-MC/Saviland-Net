import styles from '../../styles/navigation.module.css'
import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (

      <div className={styles.navigation}>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/registry">Registry</Link>
            </li>
            <li>
              <Link href="/chatspace">Chatspace</Link>
            </li>
            <li>
              <Link href="/coins">coins</Link>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Navigation