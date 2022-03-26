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
						<div className="column row">
							<motion.div 
								className='img-box'
								initial={{opacity:0, translateY:50}}
								animate={{opacity:1, translateY:0}}
								transition={{duration:1, delay:.25}}    
							>
								<img src="./../assets/images/work/3/1.jpg" alt="work 1" />
							</motion.div>
							<motion.div 
								className='img-box'
								initial={{opacity:0, translateY:50}}
								animate={{opacity:1, translateY:0}}
								transition={{duration:1, delay:.5}} 
							>
								<img src="../assets/images/work/3/2.jpg" alt="work 2" />
							</motion.div>
						</div>
					   
					</div>
					<div className="img-box-full">
						<motion.div 
							className='img-box'
							initial={{opacity:0, translateY:50}}
							animate={{opacity:1, translateY:0}}
							transition={{duration:1, delay:.75}}
						>
							<img src="../assets/images/work/3/3.jpg" alt="work 3" />
						</motion.div>
		
					</div>
					<div className="img-box-bottom">
							<motion.div 
								className='img-box'
								initial={{opacity:0, translateY:50}}
								animate={{opacity:1, translateY:0}}
								transition={{duration:1, delay:1}}
							>
								<img src="../assets/images/work/3/4.jpg" alt="work 4" />
							</motion.div>
					</div>
				</div>
				<div className='col-half'>
					<motion.div    
						initial={{opacity:0, translateY:50}}
						animate={{opacity:1, translateY:0}}
						transition={{duration:1, delay:1.25}}
					>
						<h1>Digital Drawing</h1>
						<p>Inspiration for doing this drawing digitally, was referenced from a secondary source. I wanted to showcase my digital drawing skills and to also be more confident as digital media is not usually the medium that I work with. </p>
						<p>I wanted this drawing to have more of a super realistic approach therefore being able to create more depth to areas and highlights. In addition to this, I was able to use near enough the same colour palette as the secondary source.</p>
					</motion.div>
					
				</div>
			</div>
		</StyledSection>
	   
			
		
	)
}

export default SectionOne
