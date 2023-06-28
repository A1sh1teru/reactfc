import React from 'react'
import image1 from "../../../img/image1.svg"
import imagelist1 from "../../../img/imagelist1.svg"
import imagelist2 from "../../../img/imagelist2.svg"
import imagelist3 from "../../../img/imagelist3.svg"
import imagelist4 from "../../../img/imagelist4.svg"
import imagelist5 from "../../../img/imagelist5.svg"
import imagelist6 from "../../../img/imagelist6.svg"

import styles from "./News.module.css"

const News = () => {
  return (
    <section className={styles.sectionNews}>
        <div className={styles.container}>
          <div className={styles.titleNews}>
            Latest News
          </div>
        </div>
        <div className={styles.container}>
                <div className={styles.imageContainer}>
                  <img className={styles.image1} src={image1} alt="image1" />
                </div>
                <ul className={styles.listNews}>
                    <li className={styles.item2first}>
                      <img className={styles.imagelist1} src={imagelist1} alt="imagelist1" />
                      <a href="#">FILIPPO RANOCCHIA È BIANCOROSSO</a>
                      <time className={styles.timelist1} dateTime="2022-07-24">07/24/2022</time>
                      <p className={styles.par1}><a href="#">Show more ...</a></p>
                    </li>
                    <li className={styles.item2second}>
                      <img className={styles.imagelist2} src={imagelist2} alt="imagelist2" />
                      <a href="#">BENVENUTO GIANLUCA CAPRARI</a>
                      <time className={styles.timelist2} dateTime="2022-07-18">07/18/2022</time>
                      <p className={styles.par2}><a href="#">Show more ...</a></p>
                    </li>
                    <li className={styles.item2second}>
                      <img className={styles.imagelist3} src={imagelist3} alt="imagelist3" />
                      <a href="#">IL CORDOGLIO DEL MONZA</a>
                      <time className={styles.timelist3} dateTime="2022-07-14">07/14/2022</time>
                      <p className={styles.par3}><a href="#">Show more ...</a></p>
                    </li>
                    <li className={styles.item2second}>
                      <img className={styles.imagelist4} src={imagelist4} alt="imagelist4" />
                      <a href="#">DIAW IN PRESTITO AL MODENA</a>
                      <time className={styles.timelist4} dateTime="2022-06-29">06/29/2022</time>
                      <p className={styles.par4}><a href="#">Show more ...</a></p>
                    </li>
                    <li className={styles.item2second}>
                      <img className={styles.imagelist5} src={imagelist5} alt="imagelist5" />
                      <a href="#">MOROSINI IN  SANGIULIANO CITY</a>
                      <time className={styles.timelist5} dateTime="2022-06-15">06/15/2022</time>
                      <p className={styles.par5}><a href="#">Show more ...</a></p>
                    </li>
                    <li className={styles.item2second}>
                      <img className={styles.imagelist6} src={imagelist6} alt="imagelist6" />
                      <a href="#">WEDNESDAY 20 JULY FRIENDLY</a>
                      <time className={styles.timelist6} dateTime="2022-06-03">06/03/2022</time>
                      <p className={styles.par6}><a href="#">Show more ...</a></p>
                    </li>
                </ul>
         </div>
    </section>
  )
}

export default News