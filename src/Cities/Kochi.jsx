import React from 'react';
import './Hyderabad.css';
import HyderabadFloorPlan from "/Images/floor plan.jpeg";
import ExhibitorsPlaceholder from "/Images/Placeholder.png";

const Kochi = () => {
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
                            <h2>Details about Kochi</h2>
                            <ul>
                                <li>
                                    Kochi is a major city in South India known for its thriving agricultural Industry. It is particularly renowned for its rich trading history.
                                </li>
                                <li>
                                    The city offers a conducive environment for business growth and innovation, attracting both national and international companies. With a skilled workforce and supportive infrastructure, Kochi has emerged as a hub for tourism and business development.
                                </li>
                                <li>
                                    In addition to its industrial prowess, Kochi also boasts a rich cultural heritage and is home to iconic landmarks such as Munnar and its tea plantations.
                                </li>
                            </ul>
                        </div>
                        <div className='city-details-image'>
                            <img src="https://media.istockphoto.com/id/1298956744/photo/house-boat-pleasure-cruise-ship-in-india-kerala-on-the-seaweed-covered-river-channels-of.jpg?s=612x612&w=0&k=20&c=rmtRSAY5wxen9opyim_gKG0OW5grbgeK7IV4DPCtAos=" alt="Kochi" />
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

export default Kochi;
