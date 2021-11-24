import React from 'react'
import styles from './styles.module.css';
import {useDate}from '../../hooks/useDate'

function Header() {
  const time = useDate();
  console.log(time)
  return (
    <nav className={styles.navbar}>
      <div className={styles.titledetails}>
        <h1>Cera<span><i class="fas fa-plus-square"></i></span></h1>
        <div className={styles.detail}>
          <h2>Carers</h2>
          <p>Here you'll be a ble to schedule your carers visits</p>
        </div>
      </div>
      <div className={styles.navtime}>
        {time.time}
      </div>
    </nav>
  )
}

export default Header
