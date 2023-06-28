import React from 'react'
import styles from "../PlayersStore/PlayersStore.module.css"
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'
import player1 from "../../../img/player1.svg"
import player2 from "../../../img/player2.svg"
import player3 from "../../../img/player3.svg"
import player4 from "../../../img/player4.svg"
import player5 from "../../../img/player5.svg"
import storeItem1 from "../../../img/storeItem1.svg"
import storeItem2 from "../../../img/storeItem2.svg"
import storeItem3 from "../../../img/storeItem3.svg"

const PlayersStore = () => {
  return (
    <section className={styles.containerPS}>
            <div className={styles.containerPlayers}>
                <div className={styles.titlePlayers}>Players</div>
                <div className={styles.borderPlayers}>
                    <ul className={styles.listPlayers}>
                        <li className={styles.arrowLeft}><a href="#"><FiArrowLeftCircle /></a></li>
                        <div className={styles.containerNewPlayers}>
                        <li className={styles.itemListPlayer}>
                            <img className={styles.playerImage} src={player1} alt="player1" />
                            <div className={styles.containerProfile}>
                                <p className={styles.name}>Mario Sampirisi</p>
                                <ul className={styles.playerInfo}>
                                    <li className={styles.itemPlayerInfo}>age: 29</li>
                                    <li className={styles.itemPlayerInfo}>position: DEF</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListPlayer}>
                            <img className={styles.playerImage} src={player2} alt="player2" />
                            <div className={styles.containerProfile}>
                                <p className={styles.name}>Gabriel Paletta</p>
                                <ul className={styles.playerInfo}>
                                    <li className={styles.itemPlayerInfo}>age: 36</li>
                                    <li className={styles.itemPlayerInfo}>position: DEF</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListPlayer}>
                            <img className={styles.playerImage} src={player3} alt="player3" />
                            <div className={styles.containerProfile}>
                                <p className={styles.name}>Valentin Antov</p>
                                <ul className={styles.playerInfo}>
                                    <li className={styles.itemPlayerInfo}>age: 21</li>
                                    <li className={styles.itemPlayerInfo}>position: DEF</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListPlayer}>
                            <img className={styles.playerImage} src={player4} alt="player4" />
                            <div className={styles.containerProfile}>
                                <p className={styles.name}>Davide Bettella</p>
                                <ul className={styles.playerInfo}>
                                    <li className={styles.itemPlayerInfo}>age: 22</li>
                                    <li className={styles.itemPlayerInfo}>position: MID</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListPlayer}>
                            <img className={styles.playerImage} src={player5} alt="player5" />
                            <div className={styles.containerProfile}>
                                <p className={styles.name}>Mario Sampirisi</p>
                                <ul className={styles.playerInfo}>
                                    <li className={styles.itemPlayerInfo}>age: 29</li>
                                    <li className={styles.itemPlayerInfo}>position: DEF</li>
                                </ul>
                            </div>
                        </li>
                        </div>
                        <li className={styles.arrowRight}><a href="#"><FiArrowRightCircle /></a></li>
                    </ul>
                    <ul className={styles.listShowMore}>
                        <li className={styles.itemShowMore}><a href="#">Show more ...</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.containerStore}> 
                <div className={styles.titleStore}>Store</div>
                <div className={styles.borderStore}>
                    <ul className={styles.listStore}>
                        <li className={styles.itemListStore}>
                            <img className={styles.storeItem1} src={storeItem1} alt="storeItem1" />
                            <div className={styles.containerCard1}>
                                <p className={styles.nameCard}>PHONE CASE</p>
                                <ul className={styles.bottomInfo}>
                                    <li className={styles.itemBottomInfo1}>10-15$</li>
                                    <li className={styles.itemBottomInfo2}><a href="#">Show more ...</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListStore}>
                            <img className={styles.storeItem2} src={storeItem2} alt="storeItem2" />
                            <div className={styles.containerCard2}>
                                <p className={styles.nameCard}>SPECIAL JERSEYS</p>
                                <ul className={styles.bottomInfo}>
                                    <li className={styles.itemBottomInfo1}>110-115$</li>
                                    <li className={styles.itemBottomInfo2}><a href="#">Show more ...</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.itemListStore}>
                            <img className={styles.storeItem3} src={storeItem3} alt="storeItem3" />
                            <div className={styles.containerCard2}>
                                <p className={styles.nameCard}>NEW JERSEYS 22/23</p>
                                <ul className={styles.bottomInfo}>
                                    <li className={styles.itemBottomInfo1}>80-89$</li>
                                    <li className={styles.itemBottomInfo2}><a href="#">Show more ...</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </section>
  )
}

export default PlayersStore