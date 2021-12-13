import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Logo from '../../public/Logo.png';

import './NavigationBar.css';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">
               <div className="logo"><img src = {Logo} /></div>
            </Link>

            <ul className ="nav-ul">
                <Link to="/aa/admin">
                  <li>Menu</li>
                </Link>

                <Link to="/aa/sale">
                  <li>Sale</li>
                </Link>

                <Link to="/aa/login">
                  <li>Account</li>
                </Link>

                <Link to="aa/2/cart">
                  <li className="cart-style"><FaCartPlus /></li>
                </Link>
            </ul>
            
        </nav>
    );
};

export default Navigation;