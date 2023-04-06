import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars People</title>
        <meta name="description" content="Vintage People in Star Wars Universe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.grid}>
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
      </main>
    </>
  )
}
