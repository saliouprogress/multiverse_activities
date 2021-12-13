import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Link to="/contactus">
                <p className="contact-footer">Contact</p>
            </Link>

            <p>Apprentice Apparel © 2021</p>

            <ul className="footer-ul">
                <li>
                  <a><FaFacebook /></a>
                </li>
                
                <li>
                  <a><FaInstagram /></a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
