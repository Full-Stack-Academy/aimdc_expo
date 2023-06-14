import React, { useState, useEffect } from 'react';
import './Slider.css'; // Create a CSS file for your component styles
import Hyderabad from './Cities/Hyderabad';
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

function Slider({ interval = 45000 }) {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 2);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);


    {/*--------------------------------------------------------------------------------------------------------------------------------------*/}
    {/*City Block State for Rendering*/ }
    const [showComponentHyderabad, setShowComponentHyderabad] = useState(false);


    {/*Hyderabad City Block State for Rendering*/ }
    const handleClickHyderabad = () => {
        console.log("###############################"+showComponentHyderabad)
    
        setShowComponentHyderabad(!showComponentHyderabad);
        console.log("HYD STATE" + showComponentHyderabad);
    }

    {/*--------------------------------------------------------------------------------------------------------------------------------------*/ }

    return (
        <div>
            <div className="rootCarousel">
                {/* Render the slides */}
                <div className="slide" style={{ display: slideIndex === 0 ? 'flex' : 'none' }}>

                    <Place name="Hyderabad" src={HyderabadIcon} date="25-26/Aug/23" action={() => { window.scrollTo(0,1100);   handleClickHyderabad();}} />

                    <Place name="Mumbai" src={MumbaiIcon} date="4/11/23 - 5/11/23" />
                    <Place name="Bangalore" src={BangaloreIcon} date="25/11/23 - 26/11/23" />
                    <Place name="Kochi" src={KochiIcon} date="16/12/23 - 17/12/23" />
                    <Place name="Delhi" src={DelhiIcon} date="TBA" />
                </div>
                <div className="slide" style={{ display: slideIndex === 1 ? 'flex' : 'none' }}>
                    <Place name="Jaipur" src={JaipurIcon} date="TBA" />
                    <Place name="Lucknow" src={KolkataIcon} date="TBA" />
                    <Place name="Ahemdabad" src={AhemdabadIcon} date="TBA" />
                    <Place name="Kolkata" src={LucknowIcon} date="TBA" />
                    <Place name="Chennai" src={ChennaiIcon} date="TBA" />
                </div>
                {/* Render the page indicator */}
                <div className="page-indicator">
                    {[...Array(2)].map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === slideIndex ? 'active' : ''}`}
                            onClick={() => setSlideIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/*Hyderabad Element Rendered Here*/}
            {showComponentHyderabad && <Hyderabad id={"caro"}/>}

        </div>
    );
}

export default Slider;
