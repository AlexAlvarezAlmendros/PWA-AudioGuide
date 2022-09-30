import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Visit() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Espacio Trafalgar</title>
        <meta name="description" content="Audio Guide from Espacio Trafalgar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.header_div_visit}>
          <img className={styles.artimage} src="/exampleart.jpg"/>
        </div>
        <audio className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/OGYBORY808_TYPE_BEAT_-_PACKZ.mp3?v=1661082512" type="audio/mpeg"/>Your browser does not support the audio tag.</audio>
        <p className={styles.shortDesc}>Y él sí que sabe cómo hacerlo. Cuando nadie lo espera,
destruye su obra más conocida justo después de ser 
subastada por más de un millón de dólares, planta sus 
trabajos de manera clandestina en los museos más 
famosos del mundo y financia la compra de un barco 
de rescate para salvar vidas en el Mediterráneo.</p>
        <div className={styles.navbuttonscontainer}>
          <button className={styles.navbutton}>PREVIOUS</button>
          <button className={styles.navbutton}>NEXT</button>
        </div>

      </div>
      
    </div>
  )
}