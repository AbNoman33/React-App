import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
         <div className="logo-menu">
            <div className="logo">
                <a href="#"><img src="./images/logo.png" alt="" /></a>
                </div>
                <div className="menu">
                    <div class="header__right d-flex justify-content-end align-items-center">
                    <nav>
                        <ul>
                            <li ><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            
                        </ul>
                        <form action="">
                            <input type="text" placeholder='search'  />
                        </form>
                    </nav>
                    </div>
                    
                </div>
                </div>   
        </>
    );
};

export default Nav;