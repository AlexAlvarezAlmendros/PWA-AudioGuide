import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'
let index = 0;
let url = " ";

export default function Visit({ info }) {
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  console.log(router.query.floor);

  switch (router.query.floor){ 
    case '1':
      return (
        <div className={styles.container}>
          <Script src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/DataHandler.js" strategy="beforeInteractive"/>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audio Guide from Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div_visit}>
              <img className={styles.artimage} src={"images/".concat(info.ES.Floor1[count].image)}/>
            </div>
            <audio className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/OGYBORY808_TYPE_BEAT_-_PACKZ.mp3?v=1661082512" type="audio/mpeg"/>Your browser does not support the audio tag.</audio>
            <h1 id="desctitle" className={styles.shortDescTitlte}> { info.ES.Floor1[count].title} </h1> 
            <p id="desc" className={styles.shortDesc}> {info.ES.Floor1[count].shortDesc} </p> 
            <div className={styles.navbuttonscontainer}>
                <button className={styles.navbutton} onClick={()=>{if (count > 0)setCount(count-1)}}>PREVIOUS</button>
                <button className={styles.navbutton} onClick={()=>{if (count < parseInt(info.ES.Info.Floor1Size) - 1)setCount(count+1)}}>NEXT</button>
            </div>
          </div>
        </div>
        
      )
    break;

    case '2':
      return (
        <div className={styles.container}>
          <Script src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/DataHandler.js" strategy="beforeInteractive"/>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audio Guide from Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div_visit}>
              <img className={styles.artimage} src={"images/".concat(info.ES.Floor2[count].image)}/>
            </div>
            <audio className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/OGYBORY808_TYPE_BEAT_-_PACKZ.mp3?v=1661082512" type="audio/mpeg"/>Your browser does not support the audio tag.</audio>
            <h1 id="desctitle" className={styles.shortDescTitlte}> { info.ES.Floor2[count].title} </h1> 
            <p id="desc" className={styles.shortDesc}> {info.ES.Floor2[count].shortDesc} </p> 
            <div className={styles.navbuttonscontainer}>
                <button className={styles.navbutton} onClick={()=>{if (count > 0)setCount(count-1)}}>PREVIOUS</button>
                <button className={styles.navbutton} onClick={()=>{if (count < parseInt(info.ES.Info.Floor2Size) - 1)setCount(count+1)}}>NEXT</button>
            </div>
          </div>
        </div>
        
      )
    break;

    case '3':
      return (
        <div className={styles.container}>
          <Script src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/DataHandler.js" strategy="beforeInteractive"/>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audio Guide from Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div_visit}>
              <img className={styles.artimage} src={"images/".concat(info.ES.Floor3[count].image)}/>
            </div>
            <audio className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/OGYBORY808_TYPE_BEAT_-_PACKZ.mp3?v=1661082512" type="audio/mpeg"/>Your browser does not support the audio tag.</audio>
            <h1 id="desctitle" className={styles.shortDescTitlte}> { info.ES.Floor3[count].title} </h1> 
            <p id="desc" className={styles.shortDesc}> {info.ES.Floor3[count].shortDesc} </p> 
            <div className={styles.navbuttonscontainer}>
                <button className={styles.navbutton} onClick={()=>{if (count > 0)setCount(count-1)}}>PREVIOUS</button>
                <button className={styles.navbutton} onClick={()=>{if (count < parseInt(info.ES.Info.Floor3Size) - 1)setCount(count+1)}}>NEXT</button>
            </div>
          </div>
        </div>
        
      )
    break;
    default:
    return (
      <div className={styles.container}>
        <Script src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/DataHandler.js" strategy="beforeInteractive"/>
        <Head>
          <title>Espacio Trafalgar</title>
          <meta name="description" content="Audio Guide from Espacio Trafalgar" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <div className={styles.header_div_visit}>
            <img className={styles.artimage} src={"images/".concat(info.ES.Floor3[count].image)}/>
          </div>
          <audio className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src="https://cdn.shopify.com/s/files/1/0462/4485/5961/files/OGYBORY808_TYPE_BEAT_-_PACKZ.mp3?v=1661082512" type="audio/mpeg"/>Your browser does not support the audio tag.</audio>
          <h1 id="desctitle" className={styles.shortDescTitlte}> { info.ES.Floor3[count].title} </h1> 
          <p id="desc" className={styles.shortDesc}> {info.ES.Floor3[count].shortDesc} </p> 
          <div className={styles.navbuttonscontainer}>
              <button className={styles.navbutton} onClick={()=>{if (count > 0)setCount(count-1)}}>PREVIOUS</button>
              <button className={styles.navbutton} onClick={()=>{if (count < parseInt(info.ES.Info.Floor3Size) - 1)setCount(count+1)}}>NEXT</button>
          </div>
        </div>
      </div>
      
    )
    break;
  }
  
  
}

export async function getStaticProps() {
  const info = await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/Content.json').then(res => res.json());
  return {
    props: {
      info
    }
  }
}