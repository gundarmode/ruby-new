import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import { StyledSection } from './../styles/Section.styled'
// import axios from 'axios';

const SectionOne = () => {

	return (
		
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
                                <img src="./../assets/images/work/1/1.jpg" alt="work 1" />
                            </motion.div>
                            <motion.div 
                                className='img-box'
                                initial={{opacity:0, translateY:50}}
                                animate={{opacity:1, translateY:0}}
                                transition={{duration:1, delay:.5}} 
                            >
                                <img src="../assets/images/work/1/2.jpg" alt="work 2" />
                            </motion.div>
                        </div>
                        <div className="column right">
                            <motion.div 
                                className='img-box'
                                initial={{opacity:0, translateY:50}}
                                animate={{opacity:1, translateY:0}}
                                transition={{duration:1, delay:.75}}
                            >
                                <img src="../assets/images/work/1/3.jpg" alt="work 3" />
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
                                <img src="../assets/images/work/1/4.jpg" alt="work 4" />
                            </motion.div>
                    </div>
                </div>
                <div className='col-half'>
                    <motion.div    
                        initial={{opacity:0, translateY:50}}
                        animate={{opacity:1, translateY:0}}
                        transition={{duration:1, delay:1.25}}
                    >
                        <h1>Jennie Kim - Transcription</h1>
                        <h2>Background/Inspiration</h2>
                        <p>The inspiration behind doing this transcription, was that my attention was drawn to the use of the colour palette of the poster design and the positioning of the hand movement. </p>
                    </motion.div>
                    <motion.div 
                        initial={{opacity:0, translateY:50}}
                        animate={{opacity:1, translateY:0}}
                        transition={{duration:1, delay:1.5}}
                    >
                        <h2>Work Process</h2>
                        <p>The process of the drawing, took just over 5 days to complete, adding layers of yellows and pink undertones to attempt to match with the reference photograph.  </p>
                        <p>In addition to this, I also used a white pen to add in the extra details to the overall drawing, trying to therefore make it realistic.​</p>
                        <p>As a result of doing this drawing, I really liked the overall outcome of the drawing as it does resemble the reference photograph in which I had used. Furthermore, I really enjoyed using a variety of the colour palette to get her skin complexion as realistic as possible.</p>
                    </motion.div>
                </div>
            </div>
        </StyledSection>
       
			
		
	)
}

export default SectionOne
