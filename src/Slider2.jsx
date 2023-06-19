import React, { useState, useEffect } from 'react';
import './Slider2.css'; // Create a CSS file for your component styles
import Hyderabad from './Cities/Hyderabad';
import Mumbai from './Cities/Mumbai';
import Bangalore from './Cities/Bangalore';
import Kochi from './Cities/Kochi';
import Place from './Place';

import HyderabadIcon from './Icon/Hyderabad.png';
import MumbaiIcon from './Icon/Mumbai.png';
import BangaloreIcon from './Icon/Bangalore.png';
import KochiIcon from './Icon/Kochi.png';
import DelhiIcon from './Icon/Delhi.png';

import AhemdabadIcon from './Icon/Ahemdabad.png';
import KolkataIcon from './Icon/Kolkata.png';
import ChennaiIcon from './Icon/Chennai.png';
import LucknowIcon from './Icon/Lucknow.png';
import JaipurIcon from './Icon/Jaipur.png';

function Slider2({ interval = 45000 }) {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 2);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }
    {/*City Block State for Rendering*/ }
    const [showComponentMumbai, setShowComponentMumbai] = useState(false);


    {/*Hyderabad City Block State for Rendering*/ }
    const handleClickMumbai = () => {
        console.log("###############################" + showComponentMumbai)

        setShowComponentMumbai(!showComponentMumbai);
        console.log("Mum STATE" + showComponentMumbai);
    }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }
    {/*City Block State for Rendering*/ }
    const [showComponentHyderabad, setShowComponentHyderabad] = useState(false);


    {/*Hyderabad City Block State for Rendering*/ }
    const handleClickHyderabad = () => {
        console.log("###############################" + showComponentHyderabad)

        setShowComponentHyderabad(!showComponentHyderabad);
        console.log("HYD STATE" + showComponentHyderabad);
    }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }
    {/*City Block State for Rendering*/ }
    const [showComponentBangalore, setShowComponentBangalore] = useState(false);


    {/*Bangalore City Block State for Rendering*/ }
    const handleClickBangalore = () => {
        console.log("###############################" + showComponentBangalore)

        setShowComponentBangalore(!showComponentBangalore);
        console.log("Ban STATE" + showComponentBangalore);
    }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }
    {/*City Block State for Rendering*/ }
    const [showComponentKochi, setShowComponentKochi] = useState(false);


    {/*Bangalore City Block State for Rendering*/ }
    const handleClickKochi = () => {
        console.log("###############################" + showComponentKochi)

        setShowComponentKochi(!showComponentKochi);
        console.log("Ban STATE" + showComponentKochi);
    }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }
    const handleCityResetHyderabad = () => {
        setShowComponentMumbai(false);
        setShowComponentBangalore(false);
        setShowComponentKochi(false);
    };

    const handleCityResetMumbai = () => {
        setShowComponentHyderabad(false);
        setShowComponentBangalore(false);
        setShowComponentKochi(false);
    };

    const handleCityResetBangalore = () => {
        setShowComponentMumbai(false);
        setShowComponentHyderabad(false);
        setShowComponentKochi(false);
    };

    const handleCityResetKochi = () => {
        setShowComponentMumbai(false);
        setShowComponentBangalore(false);
        setShowComponentHyderabad(false);
    };

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    return (
        <div>
            <div className="rootCarousel">
                {/* Render the slides */}
                <div className="slide" style={{ display: slideIndex === 0 ? 'flex' : 'none' }}>
                    <Place className="cityCard" name="Hyderabad" src={HyderabadIcon} date="25-26/Aug/23" action={() => { window.scrollTo(0, 1100); handleClickHyderabad(); handleCityResetHyderabad(); }} />
                    <Place className="cityCard" name="Mumbai" src={MumbaiIcon} date="4/11/23 - 5/11/23" action={() => { window.scrollTo(0, 1100); handleClickMumbai(); handleCityResetMumbai(); }} />
                </div>
                <div className="slide" style={{ display: slideIndex === 1 ? 'flex' : 'none' }}>
                    <Place className="cityCard" name="Bangalore" src={BangaloreIcon} date="25/11/23 - 26/11/23" action={() => { window.scrollTo(0, 1100); handleClickBangalore(); handleCityResetBangalore(); }} />
                    <Place className="cityCard" name="Kochi" src={KochiIcon} date="16/12/23 - 17/12/23" action={() => { window.scrollTo(0, 1100); handleClickKochi(); handleCityResetKochi(); }} />
                </div>

                <div className="slide" style={{ display: slideIndex === 2 ? 'flex' : 'none' }}>
                    <Place className="cityCard" name="Delhi" src={DelhiIcon} date="TBA" />
                    <Place className="cityCard" name="Jaipur" src={JaipurIcon} date="TBA" />
                </div>

                <div className="slide" style={{ display: slideIndex === 3 ? 'flex' : 'none' }}>
                    <Place className="cityCard" name="Lucknow" src={KolkataIcon} date="TBA" />
                    <Place className="cityCard" name="Ahemdabad" src={AhemdabadIcon} date="TBA" />
                </div>

                <div className="slide" style={{ display: slideIndex === 4 ? 'flex' : 'none' }}>
                    <Place className="cityCard" name="Kolkata" src={LucknowIcon} date="TBA" />
                    <Place className="cityCard" name="Chennai" src={ChennaiIcon} date="TBA" />
                </div>

                {/* Render the page indicator */}
                <div className="page-indicator">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === slideIndex ? 'active' : ''}`}
                            onClick={() => setSlideIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/*Cities Element Rendered Here*/}
            {showComponentHyderabad && <Hyderabad id={"caro"} />}
            {showComponentBangalore && <Bangalore id={"caro"} />}
            {showComponentKochi && <Kochi id={"caro"} />}
            {showComponentMumbai && <Mumbai id={"caro"} />}

        </div>
    );
}

export default Slider2;
