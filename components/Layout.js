import dynamic from 'next/dynamic'
import {useState} from 'react'



 const Navigation = dynamic(() => import('./Navigation'))

const Layout = ({children, windowWidth, windowHeight, display, router}) => {

	const[loading, setLoading] = useState(true)

	setTimeout(() => {
		setLoading(false)
	}, 1000);

  return (
	<>
	{

		loading ?	null : <Navigation windowWidth={windowWidth} windowHeight={windowHeight} display={display} router={router} />
	}
	
	<main>{children}</main>
	</>
  )
}

export default Layout