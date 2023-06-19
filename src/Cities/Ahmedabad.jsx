import React from 'react';
import './Hyderabad.css';
import HyderabadFloorPlan from "/Images/floor plan.jpeg";
import ExhibitorsPlaceholder from "/Images/Placeholder.png";

const Ahmedabad = () => {
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
                            <h2>Details about Ahmedabad</h2>
                            <ul>
                                <li>
                                    Ahmedabad is the industrial center in India after Mumbai.
                                </li>
                                <li>
                                    The GDP of Ahmedabad was found to be $186 billion in 2020.
                                </li>
                                <li>
                                    Its main Industries are chemicals, textiles, manufacturing, drugs and pharmaceuticals.
                                </li>
                            </ul>
                        </div>
                        <div className='city-details-image'>
                            <img src="https://media.istockphoto.com/id/1427533039/photo/drone-shot-of-buildings-in-the-financial-district.jpg?s=612x612&w=0&k=20&c=lhCbJmK4OhnswMCwPELEht1OQM2i0Qi67sVsl637tAc=" alt="Ahmedabad" />
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

export default Ahmedabad;
