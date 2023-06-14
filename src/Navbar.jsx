import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
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
                        <img src="src\Image\logo.png" className="navbar-logoht" />
                    </a>
                </div>


                <ul className="navbar-menu-listht">
                    <div className="navbar-icon cancel-btnht" onClick={cancelbtn}><FontAwesomeIcon icon={faXmark} /></div>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#who">Who Exhibits</a></li>
                    <li><a href="#cal">Expo Calendar</a></li>
                    <li><a href="#foot">Contact</a></li>
                    <div className='navbar-regiht'><a href="#regNow">Register Now</a></div>
                </ul>

                <div className="navbar-icon menu-btnht" onClick={clickHandler}><FontAwesomeIcon icon={faBars} /></div>
            </div>
        </div>
    );
}
