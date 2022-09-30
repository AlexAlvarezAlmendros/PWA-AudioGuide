import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Espacio Trafalgar</title>
        <meta name="description" content="Audio Guide from Espacio Trafalgar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.header_div}>
          <Image className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
          <p className={styles.infotext}>Select the floor where you are</p>
        </div>
        <div className={styles.main_div} >
          <Link className={styles.menubutton} href="/visit">
            <a><Image width={400} height={115} src="/topbtn.png"/></a>
          </Link>
          <Link className={styles.menubutton} href="/visit">
            <a><Image width={400} height={115} src="/centerbtn.png"/></a>
          </Link>
          <Link className={styles.menubutton} href="/visit">
            <a><Image width={400} height={115} src="/botombtn.png"/></a>
          </Link>
            
        </div>
        <h1 className={styles.Info} >Select your preferred languaje:</h1>
        <div className={styles.languajeSelector}>
          <button className={styles.langButton}><Image width={230} height={230} src="/spain.png"/></button>
          <button className={styles.langButton}><Image width={230} height={230} src="/catalonia.png"/></button>
          <button className={styles.langButton}><Image width={230} height={230} src="/france.png"/></button>
          <button className={styles.langButton}><Image width={230} height={230} src="/italy.png"/></button>
          <button className={styles.langButton}><Image width={230} height={230} src="/britain.png"/></button>
        </div>
      </div>
      
    </div>
  )
}
