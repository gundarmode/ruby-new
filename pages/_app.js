
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./../styles/theme.config";
import {useState, useEffect, useRef} from "react";
import { useRouter } from 'next/router'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps}) {

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
			<Layout windowWidth={size.windowWidth} windowHeight={size.windowHeight} display={display} router={router}>
            	<Component windowWidth={size.windowWidth} windowHeight={size.windowHeight} {...pageProps} router={router} headerRef={headerRef} />
			</Layout>
        </ThemeProvider>
    )
 
}

export default MyApp
