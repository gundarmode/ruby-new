import React, {useState, useEffect, useRef} from 'react'
import { StyledHeader } from './../styles/Header.styled'
import Link from 'next/link'
import {motion} from "framer-motion"

const Header = ({windowWidth, windowHeight, router}) => {

	const headerRef = useRef(null)
	const headerElem1Ref = useRef(null)	
	const headerElem2Ref = useRef(null)	
	const headerElem3Ref = useRef(null)	

	let headerTimer, headerElem1Timer, headerElem2Timer, headerElem3Timer

	const timer = (el, time) => {
		return setTimeout(() => {el.current.classList.add("active")}, time);
	}

	useEffect(() => {
		// add header background animation using css
		if(router.pathname === "/") {
			headerTimer = timer(headerRef, 750)
			headerElem1Timer = timer(headerElem1Ref, 1000)
			headerElem2Timer = timer(headerElem2Ref, 1250)
			headerElem3Timer = timer(headerElem3Ref, 1500)
		}

		// clear setTimeout when Header component unmounts
		return () => {
			clearTimeout(headerTimer)
			clearTimeout(headerElem1Timer)
			clearTimeout(headerElem2Timer)
			clearTimeout(headerElem3Timer)
		}
	}, [])

	return (
		<StyledHeader ref={headerRef} style={{width:`${windowWidth}px`, height:`${windowHeight}px`}}>
			<div className='extra-bg'></div>
			<div className="header-elements">
				<div className="header-element element-1" ref={headerElem1Ref}/>
				<div className="header-element element-2" ref={headerElem2Ref}/>
				<div className="header-element element-3" ref={headerElem3Ref}/>
			</div>
			<motion.div className="intro-box slide" initial={{translateY:50, opacity:0}} animate={{translateY:0, opacity:1}} transition={{duration:.2, delay:1.75}}>
				<h1>Rubyann Yau</h1>
				<div className="sub-title">Graphic Designer</div>
			</motion.div>
			{/* <div className="cool-text" ref={coolTextRef}>Rubyann Yau</div> */}

			<Link href="/section-one"><motion.a className='btn' initial={{translateY:50, translateX:`${-50}%`, opacity:0}} animate={{translateY:0,  translateX:`${-50}%`, opacity:1}} transition={{duration:.2, delay:2}}>View Portfolio</motion.a></Link>
		</StyledHeader>

	)
}

export default Header
