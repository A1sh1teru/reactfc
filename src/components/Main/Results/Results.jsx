import React from 'react'
import styles from './Results.module.css'
import table from '../../../img/table.svg'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'


const Results = () => {
  return (
    <section className={styles.results}>
        <div className={styles.container}>
            <div className={styles.fixturesContainer}>
                <ul>
                    <li className={styles.item3first}>Fixtures</li>
                        <div className={styles.borderFixtures}>
                            <li className={styles.item3second}>
                                <a href="#">Perugia - <b>Monza</b></a>
                                <time className={styles.timeFixturesSecond} dateTime="2022-05-06">6 May</time>
                            </li>
                            <li className={styles.item3third}>
                                <a href="#"><b>Monza</b> - Benevento</a>
                                <time className={styles.timeFixturesThird} dateTime="2022-04-30">30 Apr</time>
                            </li>
                            <li className={styles.item3fourth}>
                                <a href="#">Frosinone - <b>Monza</b></a>
                                <time className={styles.timeFixturesFourth} dateTime="2022-04-25">25 Apr</time>
                            </li>
                            <li className={styles.item3fifth}>
                                <a href="#"><b>Monza</b> - Brescia</a>
                                <time className={styles.timeFixturesFifth} dateTime="2022-04-18">18 Apr</time>
                            </li>
                            <li className={styles.item3sixth}>
                                <a href="#"><b>Monza</b> - Benevento</a>
                                <time className={styles.timeFixturesSixth} dateTime="2022-04-30">30 Apr</time>
                            </li>
                            <li className={styles.item3seventh}><a href="#">Show more ...</a></li>
                        </div>
                </ul>
            </div>

            <div className={styles.resultsContainer}>
            <ul>
                    <li className={styles.item4first}>Results</li>
                        <div className={styles.borderResults}>
                            <li className={styles.item4second}>
                                <a href="#">Perugia - <b>Monza</b></a>
                                <p className={styles.scoreSecond}>1 - 0</p>
                            </li>
                            <li className={styles.item4third}>
                                <a href="#"><b>Monza</b> - Benevento</a>
                                <p className={styles.scoreThird}>3 - 0</p>
                            </li>
                            <li className={styles.item4fourth}>
                                <a href="#">Frosinone - <b>Monza</b></a>
                                <p className={styles.scoreFourth}>4 - 1</p>
                            </li>
                            <li className={styles.item4fifth}>
                                <a href="#"><b>Monza</b> - Brescia</a>
                                <p className={styles.scoreFifth}>1 - 1</p>
                            </li>
                            <li className={styles.item4sixth}>
                                <a href="#"><b>Monza</b> - Benevento</a>
                                <p className={styles.scoreSixth}>3 - 0</p>
                            </li>
                            <li className={styles.item3seventh}><a href="#">Show more ...</a></li>
                        </div>
                </ul>
            </div>

            <div className={styles.tableContainer}>
                <ul>
                    <li className={styles.item5first}>Table</li>
                </ul>
                <div className={styles.borderTable}>
                    <img className={styles.imageTable} src={table} alt="table" />
                    <ul>
                        <li className={styles.item5second}><a href="#">Show more ...</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.calendarContainer}>     
                    <ul className={styles.date}>
                        <li className={styles.previousYear}><a href="#"><BsChevronDoubleLeft /></a></li>
                        <li className={styles.previousMonth}><a href="#"><BsChevronLeft /></a></li>
                        <li className={styles.currentMonth}>Month 2022</li>
                        <li className={styles.nextMonth}><a href="#"><BsChevronRight /></a></li>
                        <li className={styles.nextYear}><a href="#"><BsChevronDoubleRight /></a></li>
                    </ul>
                    <ul className={styles.weekdays}>
                        <li className={styles.itemWeekday}>Mo</li>
                        <li className={styles.itemWeekday}>Tu</li>
                        <li className={styles.itemWeekday}>We</li>
                        <li className={styles.itemWeekday}>Th</li>
                        <li className={styles.itemWeekday}>Fr</li>
                        <li className={styles.itemWeekday}>Sa</li>
                        <li className={styles.itemWeekday}>Su</li>
                    </ul>

                    <table className={styles.days}>
                        <tbody>
                            <tr className={styles.row}>
                                <td className={styles.itemOddDay}>30</td>
                                <td className={styles.itemDay1}>1</td>
                                <td className={styles.itemCommonDay}>2</td>
                                <td className={styles.itemCommonDay}>3</td>
                                <td className={styles.itemCommonDay}>4</td>
                                <td className={styles.itemCommonDay}>5</td>
                                <td className={styles.itemCommonDay}>6</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.itemCommonDay}>7</td>
                                <td className={styles.itemCommonDay}>8</td>
                                <td className={styles.itemDay9}>9</td>
                                <td className={styles.itemCommonDay}>10</td>
                                <td className={styles.itemCommonDay}>11</td>
                                <td className={styles.itemCommonDay}>12</td>
                                <td className={styles.itemCommonDay}>13</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.itemCommonDay}>14</td>
                                <td className={styles.itemCommonDay}>15</td>
                                <td className={styles.itemCommonDay}>16</td>
                                <td className={styles.itemCommonDay}>17</td>
                                <td className={styles.itemCommonDay}>18</td>
                                <td className={styles.itemCommonDay}>19</td>
                                <td className={styles.itemCommonDay}>20</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.itemCommonDay}>21</td>
                                <td className={styles.itemCommonDay}>22</td>
                                <td className={styles.itemCommonDay}>23</td>
                                <td className={styles.itemCommonDay}>24</td>
                                <td className={styles.itemCommonDay}>25</td>
                                <td className={styles.itemCommonDay}>26</td>
                                <td className={styles.itemCommonDay}>27</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.itemCommonDay}>28</td>
                                <td className={styles.itemCommonDay}>29</td>
                                <td className={styles.itemCommonDay}>30</td>
                                <td className={styles.itemOddDay}>1</td>
                                <td className={styles.itemOddDay}>2</td>
                                <td className={styles.itemOddDay}>3</td>
                                <td className={styles.itemOddDay}>4</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </section>
  )
}

export default Results
