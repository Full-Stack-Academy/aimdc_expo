import React from 'react';
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavbarDisplayImage from "/Images/logo.png"
import './Navbar.css';

export default function Navbar() {

    function clickHandler() {
        const menu = document.querySelector(".navbar-menu-listht");
        menu.classList.add("active");
    }

    function cancelbtn() {
        const menu = document.querySelector(".navbar-menu-listht");
        menu.classList.remove("active");
    }

    function changeBackground() {
        const bar = document.querySelector('.navbarht');
        if (window.scrollY > 20) {
            bar.classList.add('navbar-sticky');
        } else {
            bar.classList.remove('navbar-sticky');
        }
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <div className="navbarht">
            <div className="navbar-contentht">
                <div className="logoht">
                    <a href="#">
                        <img src={NavbarDisplayImage} className="navbar-logoht" />
                    </a>
                </div>


                <ul className="navbar-menu-listht">
                    <div className="navbar-icon cancel-btnht" onClick={cancelbtn}><FontAwesomeIcon icon={faXmark} /></div>
                    <li><Link to="home" spy={true} smooth={true} duration={500} onClick={cancelbtn}>Home </Link></li>
                    <li><Link to="about" spy={true} smooth={true} duration={500} onClick={cancelbtn}>About</Link></li>
                    <li><Link to="who" spy={true} smooth={true} duration={500} onClick={cancelbtn}>Who Exhibits</Link></li>
                    <li><Link to="cal" spy={true} smooth={true} duration={500} onClick={cancelbtn}>Expo Calendar</Link></li>
                    <li><Link to="foot" spy={true} smooth={true} duration={500} onClick={cancelbtn}>Contact</Link></li>
                    <div className='navbar-regiht'><Link to="regNow" spy={true} smooth={true} duration={500} onClick={cancelbtn}>Register Now</Link></div>
                </ul>

                <div className="navbar-icon menu-btnht" onClick={clickHandler}><FontAwesomeIcon icon={faBars} /></div>
            </div>
        </div>
    );
}
