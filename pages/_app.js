
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./../styles/theme.config";
import Navigation from '../components/Navigation';
import {useState, useEffect, useRef} from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps}) {

    const[navAnimation,setNavAnimation] = useState(true)
    const [display, setDisplay] = useState(false);

	// Init window width and height
	const [size, setSize] = useState({})

	const router = useRouter()
	const headerRef = useRef(null)	
	

	const updateSize = () => {
		setSize({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
	}

	useEffect(() => {
		// Get intitial window width/height
		updateSize()
		
		// Get window dimensions everytime it is resized
		window.onresize = updateSize
	}, [])

    useEffect(() => {

		// Change nav styling when not on homepage
        setDisplay(router.pathname !== "/" ? true : false)

	}, [router])
	
    return (
        <ThemeProvider theme={lightTheme} key={router.asPath}>
            <GlobalStyles />
            <Navigation navAnimation={navAnimation} setNavAnimation={setNavAnimation} windowWidth={size.windowWidth} windowHeight={size.windowHeight} display={display} router={router} />
            <Component windowWidth={size.windowWidth} windowHeight={size.windowHeight} {...pageProps} router={router} headerRef={headerRef} />
        </ThemeProvider>
    )
 
}

export default MyApp
