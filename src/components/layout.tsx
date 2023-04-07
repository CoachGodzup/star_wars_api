import Head from "next/head";
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import { FooterBar } from "./footerbar";

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
    children?: React.ReactNode; 
} 

export const Layout:React.FC<LayoutProps> = ({children}) => {
    return <>
    <Head>
      <title>Star Wars People</title>
      <meta name="description" content="Vintage People in Star Wars Universe" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
        <section className={styles.content}>
           {children}
        </section>
        <FooterBar></FooterBar>
    </main>
  </>
}