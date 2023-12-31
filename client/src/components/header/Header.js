import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import logo from './logo.png'; 

const Header = () => {

    return (
        <div className="header bg-light">
            
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
             
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                           <img src={logo} alt="Logo" style={{ width: "32.5px", height: "32.5px", objectFit: "contain",marginRight: '10.7px' }} />
                        Ramizon
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
