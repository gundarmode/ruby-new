import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import { StyledSection } from './../styles/Section.styled'


const SectionTwo = () => {

	return (
		<motion.section
            className="alt"
        >
            <StyledSection>
                <div className='row'>
                    <div className='col-half images'>
                        <div className="img-box-main">
                            <div className="column left">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.25}}    
                                >
                                     <img src="./../assets/images/work/2/1.jpg" alt="work 1" />
                                </motion.div>
                            </div>
                            <div className="column right">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.75}}
                                >
                                     <img src="./../assets/images/work/2/2.jpg" alt="work 1" />
                                </motion.div>
                
                            </div>
                        </div>
                        <div className="img-box-bottom">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:1}}
                                >
                                     <img src="./../assets/images/work/2/3.jpg" alt="work 1" />
                                </motion.div>
                        </div>
                    </div>
                    <div className='col-half'>
                        <motion.div    
                            initial={{opacity:0, translateY:50}}
                            animate={{opacity:1, translateY:0}}
                            transition={{duration:1, delay:1.25}}
                        >
                            <h1>Chinese Opera Mixed Media</h1>
                            <h2>Background/Inspiration</h2>
                            <p>This piece is my Chinese Opera Mixed Media painting that I had created, showing my expression through the art that I have created from my own imagination, after watching a Beijing Opera Performance. </p>
                            <p>Initially, I was inspired by the Beijing Opera which dates to the Tang Dynasty 618-907. Furthermore, the Beijing Opera established by an opera school with the poetic name 'Liyuan' (Pearl Garden). </p>
                            <p>I have always been intrigued about my heritage and the culture that has been passed down from my previous ancestors and to learn about the performing arts. </p>

                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, translateY:50}}
                            animate={{opacity:1, translateY:0}}
                            transition={{duration:1, delay:1.5}}
                        >
                            <h2>Work Process</h2>
                            <p>I wanted to be able to capture the details of the extravagant head dresses and makeup that they had performed in, using a variety of mediums such as watercolour, acrylic paints, pens and pencils. As a result, the outer edges of the painting were much darker to create more depth and vibrancy to the facial features. </p>

                        </motion.div>
                    </div>
                </div>
            </StyledSection>
        </motion.section>
			
		
	)
}

export default SectionTwo
