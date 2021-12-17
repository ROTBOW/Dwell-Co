import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/images/logo.png'
import './navbar.scss';


const Navbar = (props) => {
    const navi = useNavigate();

    return(
        <div id="navbar">
            <div className="navbar-top">
                <img src={logo}/>
            </div>
            <div className="navbar-bottom">
                <button onClick={()=>navi('/', {replace: true})}>Home</button>
                <button>Thank You</button>
                <button>Our Story</button>
            </div>
        </div>
    )
}

export default Navbar;

