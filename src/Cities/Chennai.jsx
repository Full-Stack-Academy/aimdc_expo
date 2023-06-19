import React from 'react';
import './Hyderabad.css';
import HyderabadFloorPlan from "/Images/floor plan.jpeg";
import ExhibitorsPlaceholder from "/Images/Placeholder.png";

const Chennai = () => {
    return (
        <div className='cities-remake-container'>
            <div className="cities-container">
                <div className="cities-header">
                    <div className="cities-title">
                        <h1>
                            FRANCHISE <span className="cities-and">&</span> DEALERSHIP
                            <div className="cities-expo">
                                <span className="cities-E">E</span>
                                <span className="cities-X">X</span>
                                <span className="cities-P">P</span>
                                <span className="cities-O">O</span>
                            </div>{" "}
                            <div>2023-2024</div>
                        </h1>
                    </div>

                    <div className="cities-description">
                        <h1 className="cities-discover">Discover</h1>
                        <p className="cities-p1">
                            Is a platform for Entrepreneurs and Business ownership to Explore Various
                        </p>
                        <p className="cities-p2">
                            Franchises and Dealership Opportunities and build Their Business by partnering with Established Brands.
                        </p>
                        <h1 className="cities-network">Network & Connect</h1>
                        <p className="cities-p3">
                            Network with Potential Partners, Mentors, and Investors to help Grow your Business.
                        </p>
                        <p className="cities-p4">
                            Connect with Industry Experts, Successful Franchise and Dealership Owners, and fellow Entrepreneurs.
                        </p>
                    </div>

                    <div className="floorplan-image-container">
                        <img src={HyderabadFloorPlan} alt="Image" />
                    </div>

                    <div className='city-details'>
                        <div className='city-details-list'>
                            <h2>Details about Chennai</h2>
                            <ul>
                                <li>
                                    Chennai is a major city in India known for its thriving industries and economic opportunities. It is particularly renowned for its information technology, pharmaceutical, and biotechnology sectors.
                                </li>
                                <li>
                                    The city offers a conducive environment for business growth and innovation, attracting both national and international companies. With a skilled workforce and supportive infrastructure, Hyderabad has emerged as a hub for technology and business development.
                                </li>
                                <li>
                                    In addition to its industrial prowess, Chennai also boasts a rich cultural heritage and is home to iconic landmarks.
                                </li>
                            </ul>
                        </div>
                        <div className='city-details-image'>
                            <img src='https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=' alt='chennai'/>
                        </div>
                    </div>

                    <div className='Exhibitors-and-Partners'>
                        <h2>Our Exhibitors</h2>
                        <div className='Exhibitors-Images'>
                            <div className='Image-Row'>
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            </div>
                            <div className='Image-Row'>
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            </div>
                        </div>
                        <h2>Our Partners</h2>
                        <div className='Partners-Images'>
                            <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={ExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chennai;
