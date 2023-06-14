import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Create a CSS file for your component styles
import Cities from './Cities'
import Hyderabad from './Cities/Hyderabad';
import Mumbai from './Cities/Mumbai';
import Ahmedabad from './Cities/Ahmedabad';
import Bangalore from './Cities/Bangalore';
import Chennai from './Cities/Chennai';
import Delhi from './Cities/Delhi';
import Jaipur from './Cities/Jaipur';
import Kochi from './Cities/Kochi';
import Kolkata from './Cities/Kolkata';
import Lucknow from './Cities/Lucknow';


function Carousel({ interval = 45000 }) {

   
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 5);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);


    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*City Block State for Rendering*/ }
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(prevState => !prevState);
        // console.log(showComponent);
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Hyderabad City Block State for Rendering*/ }

    const [showComponentHyderabad, setShowComponentHyderabad] = useState(false);

    const handleClickHyderabad = () => {
        setShowComponentHyderabad(prevState => !prevState);
        console.log("HYD STATE"+showComponentHyderabad);
    }

    const funcHyderabad = (dataHyd) => {
        console.log("##############################" + dataHyd);
        setShowComponentHyderabad(dataHyd)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Mumbai City Block State for Rendering*/ }

    const [showComponentMumbai, setShowComponentMumbai] = useState(false);

    const handleClickMumbai = () => {
        setShowComponentMumbai(prevState => !prevState);
        console.log("Mum STATE" + showComponentMumbai);
    }

    const funcMumbai = (dataMum) => {
        console.log("##############################" + dataMum);
        setShowComponentMumbai(dataMum)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Ahmedabad City Block State for Rendering*/ }

    const [showComponentAhmedabad, setShowComponentAhmedabad] = useState(false);

    const handleClickAhmedabad = () => {
        setShowComponentAhmedabad(prevState => !prevState);
        console.log("Mum STATE" + showComponentAhmedabad);
    }

    const funcAhmedabad = (dataAhm) => {
        console.log("##############################" + dataAhm);
        setShowComponentAhmedabad(dataAhm)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Bangalore City Block State for Rendering*/ }

    const [showComponentBangalore, setShowComponentBangalore] = useState(false);

    const handleClickBangalore = () => {
        setShowComponentBangalore(prevState => !prevState);
        console.log("Ban STATE" + showComponentBangalore);
    }

    const funcBangalore = (dataBan) => {
        console.log("##############################" + dataBan);
        setShowComponentBangalore(dataBan)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Chennai City Block State for Rendering*/ }

    const [showComponentChennai, setShowComponentChennai] = useState(false);

    const handleClickChennai = () => {
        setShowComponentChennai(prevState => !prevState);
        console.log("Chen STATE" + showComponentChennai);
    }

    const funcChennai = (dataChn) => {
        console.log("##############################" + dataChn);
        setShowComponentChennai(dataChn)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Delhi City Block State for Rendering*/ }

    const [showComponentDelhi, setShowComponentDelhi] = useState(false);

    const handleClickDelhi = () => {
        setShowComponentDelhi(prevState => !prevState);
        console.log("Del STATE" + showComponentDelhi);
    }

    const funcDelhi = (dataDlh) => {
        console.log("##############################" + dataDlh);
        setShowComponentDelhi(dataDlh)
    }    

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Jaipur City Block State for Rendering*/ }

    const [showComponentJaipur, setShowComponentJaipur] = useState(false);

    const handleClickJaipur = () => {
        setShowComponentJaipur(prevState => !prevState);
        console.log("Jaipur STATE" + showComponentJaipur);
    }

    const funcJaipur = (dataJpr) => {
        console.log("##############################" + dataJpr);
        setShowComponentJaipur(dataJpr)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Kochi City Block State for Rendering*/ }

    const [showComponentKochi, setShowComponentKochi] = useState(false);

    const handleClickKochi = () => {
        setShowComponentKochi(prevState => !prevState);
        console.log("koc STATE" + showComponentKochi);
    }

    const funcKochi = (dataKoc) => {
        console.log("##############################" + dataKoc);
        setShowComponentKochi(dataKoc)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Kolkata City Block State for Rendering*/ }

    const [showComponentKolkata, setShowComponentKolkata] = useState(false);

    const handleClickKolkata = () => {
        setShowComponentKolkata(prevState => !prevState);
        console.log("Kol STATE" + showComponentKolkata);
    }

    const funcKolkata = (dataKlt) => {
        console.log("##############################" + dataKlt);
        setShowComponentKolkata(dataKlt)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    {/*Lucknow City Block State for Rendering*/ }

    const [showComponentLucknow, setShowComponentLucknow] = useState(false);

    const handleClickLucknow = () => {
        setShowComponentLucknow(prevState => !prevState);
        console.log("luk STATE" + showComponentLucknow);
    }

    const funcLucknow = (dataLkn) => {
        console.log("##############################" + dataLkn);
        setShowComponentLucknow(dataLkn)
    }

    {/*---------------------------------------------------------------------------------------------------------------------------------*/ }

    return (
        <div>
            <div className="rootCarousel">
                {/* Render the slides */}
                <div className="slide" style={{ display: slideIndex === 0 ? 'flex' : 'none' }}>
                    <div className="content">
                        <h2>Hyderabad</h2>

                        <div  className='citydetails'>
                            <div className='event-details'>
                                <div>Date: 07/10/2023 - 08/10/2023</div>
                                <div>Venue: Metro Convention Center</div>
                                <div>Time: 08:00 AM - 10:00 PM</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1324837865/photo/charminar.jpg?s=612x612&w=0&k=20&c=UfAz5NwfB1qTJ3OqMVaSsRCHNF4y7btJ_ID5evt-tkQ=' alt='Hyderabad' />
                        </div>

                        <a href='#caro' onClick={handleClickHyderabad} className="learn-more">Learn More</a>
                    </div>
                    <div className="content">
                        <h2>Mumbai</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: 04/11/2023 - 05/11/2023</div>
                                <div>Venue: Islam Gym Khana</div>
                                <div>Time: 08:00 AM - 10:00 PM</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/170455228/photo/municipal-corporation-building-mumbai.jpg?s=612x612&w=0&k=20&c=OeczeJHovw_WinMHRR7hFrvioPnpDMlbMIQWhuXLavY=' alt='Mumbai' />
                        </div>

                        <a href='#caro' onClick={handleClickMumbai} className="learn-more">Learn More</a>
                    </div>
                </div>
                {/* ... Repeat the pattern for the other slides ... */}

                <div className="slide" style={{ display: slideIndex === 1 ? 'flex' : 'none' }}>
                    <div className="content">
                        <h2>Bangalore</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: 25/11/2023 - 26/11/2023</div>
                                <div>Venue: Nalapad</div>
                                <div>Time: 08:00 AM - 10:00 PM</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1384436831/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=SlB465aXeCpl-WL1VLreKAF1Sll-ZA2YllYDvxQC3qQ=' alt='Bangalore' />
                        </div>

                        <a href='#caro' onClick={handleClickBangalore} className="learn-more">Learn More</a>
                    </div>
                    <div className="content">
                        <h2>Kochi</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: 16/12/2023 - 17/12/2023</div>
                                <div>Venue: CIAL<br></br>Cochin Intl. Airport</div>
                                <div>Time: 08:00 AM - 10:00 PM</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/177728373/photo/palm-tree-tropical-forest-in-backwater-of-kochin-kerala-india.jpg?s=612x612&w=0&k=20&c=bIbeYoYtKBMa4KmjkWwzOMTroQbFKHDOM63667YKDLA=' alt='Kochi' />
                        </div>

                        <a onClick={handleClickKochi} className="learn-more">Learn More</a>
                    </div>
                </div>
                <div className="slide" style={{ display: slideIndex === 2 ? 'flex' : 'none' }}>
                    <div className="content">
                        <h2>Ahmedabad</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1263787610/photo/ghodasar-ahmedabad-india-december-2019-shree-muktajeevan-swamibapa-smruti-mandir-and-world.jpg?s=612x612&w=0&k=20&c=zJSdVQbHy-7xrgd0BQGSmTmxibTkqec2q-qEVLGGkrQ=' alt='Ahmedabad' />
                        </div>

                        <a href='#caro' onClick={handleClickAhmedabad} className="learn-more">Learn More</a>
                    </div>
                    <div className="content">
                        <h2>Jaipur</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/155540677/photo/hawa-mahal-the-palace-of-winds-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=D-AyVNjea4jHGPBXfzxMtmOrApa9sOVmNpprq7iGB_Y=' alt='Jaipur' />
                        </div>

                        <a href='#caro' onClick={handleClickJaipur} className="learn-more">Learn More</a>
                    </div>
                </div>
                <div className="slide" style={{ display: slideIndex === 3 ? 'flex' : 'none' }}>
                    <div className="content">
                        <h2>Kolkata</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1442974118/photo/kolkata-night.jpg?s=612x612&w=0&k=20&c=BsHfjDy8mFbby-XZx0YjUJceSd7Amy_Nh-aDstoz7mg=' alt='Kolkata' />
                        </div>

                        <a href='#caro' onClick={handleClickKolkata} className="learn-more">Learn More</a>
                    </div>
                    <div className="content">
                        <h2>Delhi</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1044788252/photo/sunrise-at-india-gate-delhi.jpg?s=612x612&w=0&k=20&c=2bMHlCJKOXLchLh2rB0NyZegj1WD0BkBhc1-9RylOdM=' alt='Delhi' />
                        </div>

                        <a href='#caro' onClick={handleClickDelhi} className="learn-more">Learn More</a>
                    </div>
                </div>
                <div className="slide" style={{ display: slideIndex === 4 ? 'flex' : 'none' }}>
                    <div className="content">
                        <h2>Lucknow</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/1215899088/photo/lucknow-clock-tower-uttar-pradesh.jpg?s=612x612&w=0&k=20&c=y-OvnvoZ4Q3l3qPzWh2RTZQMAYGz8fFHRGAs9vdV1e4=' alt='Lucknow' />
                        </div>

                        <a href='#caro' onClick={handleClickLucknow} className="learn-more">Learn More</a>
                    </div>
                    <div className="content">
                        <h2>Chennai</h2>

                        <div className='citydetails'>
                            <div className='event-details'>
                                <div>Date: To Be Announced</div>
                                <div>Venue: To Be Announced</div>
                                <div>Time: To Be Announced</div>
                            </div>
                            <img src='https://media.istockphoto.com/id/808904726/photo/detail-work-in-gopuram-hindu-temple-kapaleeshwarar-chennai-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=Visstf2o5X4i8t4nbfVSCb5ajUd7dPgrT-e20wjPKDk=' alt='Chennai' />
                        </div>

                        <a href='#caro' onClick={handleClickChennai} className="learn-more">Learn More</a>
                    </div>
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
            {showComponentHyderabad && <Hyderabad collapseHyd={funcHyderabad} id={"caro"}/>}

            {/*Mumbai Element Renderer*/}
            {showComponentMumbai && <Mumbai collapseMumbai={funcMumbai} id={"caro"} />}

            {/*Delhi Element Renderer*/}
            {showComponentDelhi && <Delhi collapseDelhi={funcDelhi} id={"caro"} />}

            {/*Lucknow Element Renderer*/}
            {showComponentLucknow && <Lucknow collapseLucknow={funcLucknow} id={"caro"} />}

            {/*Jaipur Element Renderer*/}
            {showComponentJaipur && <Jaipur collapseJaipur={funcJaipur} id={"caro"} />}

            {/*Kolkata Element Renderer*/}
            {showComponentKolkata && <Kolkata collapseKolkata={funcKolkata} id={"caro"} />}

            {/*Kochi Element Renderer*/}
            {showComponentKochi && <Kochi collapseKochi={funcKochi} id={"caro"} />}

            {/*Bangalore Element Renderer*/}
            {showComponentBangalore && <Bangalore collapseBangalore={funcBangalore} id={"caro"} />}

            {/*Chennai Element Renderer*/}
            {showComponentChennai && <Chennai collapseChennai={funcChennai} id={"caro"} />}

            {/*Ahmedabad Element Renderer*/}
            {showComponentAhmedabad && <Ahmedabad collapseAhmedabad={funcAhmedabad} id={"caro"} />}
            
        </div>
    );
}

export default Carousel;
