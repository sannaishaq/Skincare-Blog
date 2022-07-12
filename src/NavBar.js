import React from 'react'
import {Link, Outlet} from 'react-router-dom';

function NavBar() {

  return (
   
    <>
    <div className='navbar'>Welcome To My Blog</div>
    <nav
    
    style={{
          borderBottom: "solid 4px",
          paddingBottom: "1rem",
          font: 'Lucida Console'
        }}
    >
    <Link className="navLink" to='/'>Home</Link> {"    "} {"    "}

    <Link className="navLink" to='/about'>About</Link> {"    "} {"    "}

    <Link className="navLink" to='/likes'>Loves</Link> 

    

   
    </nav>

    <Outlet />
    </>

  )
}

export default NavBar