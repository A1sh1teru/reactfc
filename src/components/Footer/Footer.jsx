import React from 'react'
import styles from "./Footer.module.css"
import {BsInstagram} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.list1}>
            <li className={styles.itemFooterInfo}><a href="#">Youth Team</a></li>
            <li className={styles.itemFooterInfo}><a href="#">Support</a></li>
            <li className={styles.itemFooterInfo}><a href="#">Contact</a></li>
            <li className={styles.itemFooterInfo}><a href="#">Blog</a></li>
            <li className={styles.itemFooterInfo}><a href="#">FAQ</a></li>
        </ul>
        <ul className={styles.list2}>
            <li className={styles.itemIcon}><a href="#"><BsInstagram className={styles.itemSvg} /></a></li>
            <li className={styles.itemIcon}><a href="#"><BsTelegram className={styles.itemSvg} /></a></li>
            <li className={styles.itemIcon}><a href="#"><BsFacebook className={styles.itemSvg} /></a></li>
            <li className={styles.itemIcon}><a href="#"><BsYoutube className={styles.itemSvg} /></a></li>
            <li className={styles.itemIcon}><a href="#"><BsTwitter className={styles.itemSvg} /></a></li>
        </ul>
        <div className={styles.privacy}>
            <p className={styles.privacyPar}>Design by © Misho Gigauri 2022. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer