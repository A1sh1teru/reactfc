import React from 'react'
import News from './News/News'
import Results from './Results/Results'
import PlayersStore from './PlayersStore/PlayersStore'
import styles from "./Main.module.css"


const Main = () => {
  return (
    <main className={styles.main}>
        <News />
        <Results />
        <PlayersStore />
    </main>
  )
}

export default Main