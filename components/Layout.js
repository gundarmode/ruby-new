import dynamic from 'next/dynamic'



 const Navigation = dynamic(() => import('./Navigation'))

const Layout = ({children, windowWidth, windowHeight, display, router}) => {
  return (
    <>
    <Navigation windowWidth={windowWidth} windowHeight={windowHeight} display={display} router={router} />
    <main>{children}</main>
    </>
  )
}

export default Layout