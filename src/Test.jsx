
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Create a CSS file for your component styles 
import Cities from './Cities'
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
// import { useState } from "react"; 


function Carousel({ interval = 45000 }) {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 5);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);


    {/*City Block State for Rendering*/ }
    const [showComponent, setShowComponent] = useState(false);
    const [showComponentHyderabad, setShowComponentHyderabad] = useState(false);

    const handleClick = () => {
        setShowComponent(prevState => !prevState);
        // console.log(showComponent); 
    }

    {/*Hyderabad City Block State for Rendering*/ }
    0
    const handleClickHyderabad = () => {

        setShowComponentHyderabad(prevState => !prevState);
        console.log("HYD STATE" + showComponentHyderabad);
    }




    return (
        <div>
            <div className="rootCarousel">
                {/* Render the slides */}
                <div className="slide" style={{ display: slideIndex === 0 ? 'flex' : 'none' }}>
                    <Place name="Hyderabad" src={HyderabadIcon} date="25-26/Aug/23" action={() => { window.scrollTo(0, 1100); handleClickHyderabad(); }} />
                    <Place name="Lucknow" src={KolkataIcon} date="25-26/Aug/23" />
                    <Place name="Ahemdabad" src={AhemdabadIcon} date="25-26/Aug/23" />
                    <Place name="Mumbai" src={MumbaiIcon} date="25-26/Aug/23" action={handleClick} />

                </div>
                {/* ... Repeat the pattern for the other slides ... */}

                <div className="slide" style={{ display: slideIndex === 1 ? 'flex' : 'none' }}>
                    <Place name="Bangalore" src={BangaloreIcon} date="25-26/Aug/23" />
                    <Place name="Kochi" src={KochiIcon} date="25-26/Aug/23" />
                    <Place name="Lucknow" src={KolkataIcon} date="25-26/Aug/23" />
                    <Place name="Ahemdabad" src={AhemdabadIcon} date="25-26/Aug/23" />


                    {/* <div className="content"> 
                        <h2>Bangalore</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: 25/11/2023 - 26/11/2023</div> 
                                <div>Venue: Nalapad</div> 
                                <div>Time: 08:00 AM - 10:00 PM</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/1384436831/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=SlB465aXeCpl-WL1VLreKAF1Sll-ZA2YllYDvxQC3qQ=' alt='Bangalore' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> 
                    <div className="content"> 
                        <h2>Kochi</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: 16/12/2023 - 17/12/2023</div> 
                                <div>Venue: CIAL<br></br>Cochin Intl. Airport</div> 
                                <div>Time: 08:00 AM - 10:00 PM</div>

> Hitesh Mallick:
</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/177728373/photo/palm-tree-tropical-forest-in-backwater-of-kochin-kerala-india.jpg?s=612x612&w=0&k=20&c=bIbeYoYtKBMa4KmjkWwzOMTroQbFKHDOM63667YKDLA=' alt='Kochi' /> 
                        </div> 
 
                        <a onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                </div>
                <div className="slide" style={{ display: slideIndex === 2 ? 'flex' : 'none' }}>
                    <Place name="Delhi" src={DelhiIcon} date="25-26/Aug/23" />
                    <Place name="Jaipur" src={JaipurIcon} date="25-26/Aug/23" />
                    <Place name="Lucknow" src={KolkataIcon} date="25-26/Aug/23" />
                    <Place name="Ahemdabad" src={AhemdabadIcon} date="25-26/Aug/23" />


                    {/* <div className="content"> 
                        <h2>Ahmedabad</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div> 
                                <div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/1263787610/photo/ghodasar-ahmedabad-india-december-2019-shree-muktajeevan-swamibapa-smruti-mandir-and-world.jpg?s=612x612&w=0&k=20&c=zJSdVQbHy-7xrgd0BQGSmTmxibTkqec2q-qEVLGGkrQ=' alt='Ahmedabad' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                    {/* <div className="content"> 
                        <h2>Jaipur</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div> 
                                <div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/155540677/photo/hawa-mahal-the-palace-of-winds-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=D-AyVNjea4jHGPBXfzxMtmOrApa9sOVmNpprq7iGB_Y=' alt='Jaipur' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                </div>
                <div className="slide" style={{ display: slideIndex === 3 ? 'flex' : 'none' }}>
                    <Place name="Lucknow" src={KolkataIcon} date="25-26/Aug/23" />
                    <Place name="Ahemdabad" src={AhemdabadIcon} date="25-26/Aug/23" />



                    {/* <div className="content"> 
                        <h2>Kolkata</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div> 
                                <div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/1442974118/photo/kolkata-night.jpg?s=612x612&w=0&k=20&c=BsHfjDy8mFbby-XZx0YjUJceSd7Amy_Nh-aDstoz7mg=' alt='Kolkata' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                    {/* <div className="content"> 
                        <h2>Delhi</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div>

> Hitesh Mallick:
<div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/1044788252/photo/sunrise-at-india-gate-delhi.jpg?s=612x612&w=0&k=20&c=2bMHlCJKOXLchLh2rB0NyZegj1WD0BkBhc1-9RylOdM=' alt='Delhi' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                </div>
                <div className="slide" style={{ display: slideIndex === 4 ? 'flex' : 'none' }}>

                    <Place name="Kolkata" src={LucknowIcon} date="25-26/Aug/23" />
                    <Place name="Chennai" src={ChennaiIcon} date="25-26/Aug/23" />



                    {/* <div className="content"> 
                        <h2>Lucknow</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div> 
                                <div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/1215899088/photo/lucknow-clock-tower-uttar-pradesh.jpg?s=612x612&w=0&k=20&c=y-OvnvoZ4Q3l3qPzWh2RTZQMAYGz8fFHRGAs9vdV1e4=' alt='Lucknow' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
                    {/* <div className="content"> 
                        <h2>Chennai</h2> 
 
                        <div className='citydetails'> 
                            <div className='event-details'> 
                                <div>Date: To Be Announced</div> 
                                <div>Venue: To Be Announced</div> 
                                <div>Time: To Be Announced</div> 
                            </div> 
                            <img src='https://media.istockphoto.com/id/808904726/photo/detail-work-in-gopuram-hindu-temple-kapaleeshwarar-chennai-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=Visstf2o5X4i8t4nbfVSCb5ajUd7dPgrT-e20wjPKDk=' alt='Chennai' /> 
                        </div> 
 
                        <a href='#caro' onClick={handleClick} className="learn-more">Learn More</a> 
                    </div> */}
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

            {/*Element Renderer*/}
            {showComponent && <Cities id={"caro"} />}

            {/*Hyderabad Element Renderer*/}
            {showComponentHyderabad && <Hyderabad id={"caro"} />}

        </div>
    );
}

export default Carousel;
