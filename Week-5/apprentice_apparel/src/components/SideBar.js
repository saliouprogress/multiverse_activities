import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar-container">

            <ul className ="side-bar-ul">
                <Link to="/aa/mens">
                  <li><a>Men's Clothing</a></li>
                </Link>

                <Link to="/aa/womens">
                  <li><a>Women's Clothing</a></li>
                </Link>

                <Link to="/aa/jewelry">
                  <li><a>Jewelry</a></li>
                </Link>

                <Link to="/aa/electronics">
                  <li><a>Electronics</a></li>
                </Link>

                <Link to="/aa/sale">
                  <li><a>Sale</a></li>
                </Link>
            </ul>
            
        </div>
    );
};

export default SideBar;