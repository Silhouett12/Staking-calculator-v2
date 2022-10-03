import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <>
        <div className={styles.navbarContainer}>
            <div className={styles.navbarItem}>
                <a href='https://pablolamadrid.netlify.app/'>My page</a>
            </div>
        </div>
    </>
  )
}

export default Navbar