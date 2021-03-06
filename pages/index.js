import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from "react";
import Header from '../components/Header';


export default function Home({windowWidth, windowHeight, router, display, animationEffectTimed}) {

  return (
    <>
    
    <Head>
        <title>Rubyann Yau - My Portfolio</title>
        <meta name="description" content="Rubyann Yau Portfolio" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;800&display=swap" rel="stylesheet"/>
      </Head>
     
      <Header windowWidth={windowWidth} windowHeight={windowHeight} router={router} display={display} animationEffectTimed={animationEffectTimed} />
      
    </>
  )
}
