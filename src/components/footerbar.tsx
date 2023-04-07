import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const FooterBar:React.FC<> = () => {
   return <div className={styles.grid}>
    <a
      href="https://swapi.dev/"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Star Wars API <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Everything regarding Star Wars films.
      </p>
    </a>

    <a
      href="https://imdb-api.com/"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        IMDB <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Everything regarding films
      </p>
    </a>

    <a
      href="https://m.igdb.com/api"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        IGDB <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Everything regarding videogames
      </p>
    </a>

    <a
      href="https://github.com/CoachGodzup"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Github <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        My GITHUB page
      </p>
    </a>
  </div>
}