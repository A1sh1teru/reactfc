import React from 'react'
import logo from "../../img/logo.svg"
import searchIcon from "../../img/searchIcon.svg"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <a href="/">
                <img src={logo} alt="logo" className={styles.logo} />
            </a>
            
        </div>
        <nav className={styles.menu}>
            <ul>
                <li className={styles.item}><a href="#">Home</a></li>
                <li className={styles.item}><a href="#">Fixtures & Results</a></li>
                <li className={styles.item}><a href="#">Standings</a></li>
                <li className={styles.item}><a href="#">Players & Staff</a></li>
                <li className={styles.item}><a href="#">Blog</a></li>
                <li className={styles.item}><a href="#">FAQ</a></li>
            </ul>
        </nav>

      <form className={styles.form}>
             <input type="search" name="q" placeholder="Search ..." className={styles.searchPlaceholder} />
                <button 
                        type="submit" className={styles.buttonSearch}>
                </button>
                <img src={searchIcon} alt="searchIcon" className={styles.searchIcon} />
      </form>

    </header>
  )
}

export default Header