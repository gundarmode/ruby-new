import React from 'react'
import Navigation from './Navigation'

const Layout = ({children, windowWidth, windowHeight, display, router}) => {
  return (
    <>
    <main>{children}</main>
    <Navigation windowWidth={windowWidth} windowHeight={windowHeight} display={display} router={router} />
    </>
  )
}

export default Layout