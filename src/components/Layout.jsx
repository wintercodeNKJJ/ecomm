import React from 'react'
import ChartList from './ChartList'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">

          <NavBar/>
          <div className=" mx-0 md:mx-10 lg:mx-20">
            {children} 
          </div>
          <Footer/>
        
        </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ChartList/>
      </div>
      </div>
    </div>
  )
}

export default Layout