import React from 'react';
import './CitiesRemake.css';
import HyderabadFloorPlan from "/Images/floor plan.jpeg";
import HyderabadExhibitorsPlaceholder from "/Images/Placeholder.png";

const CitiesRemake = () => {
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
                                <span className="cities-o">O</span>
                            </div>{" "}
                            <div>2023-2024</div>
                        </h1>
                        <h2 className="cities-discover">Discover</h2>
                    </div>

                    <div className="cities-description">
                        <p className="cities-p1">
                            Is a platform for Entrepreneurs and Business ownership to Explore Various
                        </p>
                        <p className="cities-p2">
                            Franchises and Dealership Opportunities and build Their Business by partnering with Established Brands.
                        </p>
                        <h2 className="cities-network">Network & Connect</h2>
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
                            <h2>Details about Hyderabad</h2>
                            <ul>
                                <li>
                                    Hyderabad is a major city in India known for its thriving industries and economic opportunities. It is particularly renowned for its information technology, pharmaceutical, and biotechnology sectors.
                                </li>
                                <li>
                                    The city offers a conducive environment for business growth and innovation, attracting both national and international companies. With a skilled workforce and supportive infrastructure, Hyderabad has emerged as a hub for technology and business development.
                                </li>
                                <li>
                                    In addition to its industrial prowess, Hyderabad also boasts a rich cultural heritage and is home to iconic landmarks such as the Charminar, Golconda Fort, and Hussain Sagar Lake.
                                </li>
                            </ul>
                        </div>
                        <div className='city-details-image'>
                            <img src="https://media.istockphoto.com/id/1010240892/photo/the-spectacular-char-minar-during-the-blue-hour.jpg?s=612x612&w=0&k=20&c=7nmZtfdOqtQqljaCnPygwKsz_jfxGIGrIuN912A86mA=" alt="Hyderabad" />
                        </div>
                    </div>

                    <div className='Exhibitors-and-Partners'>
                        <h2>Our Exhibitors</h2>
                        <div className='Exhibitors-Images'>
                            <div className='Image-Row'>
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            </div>
                            <div className='Image-Row'>
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                                <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            </div>
                        </div>
                        <h2>Our Partners</h2>
                        <div className='Partners-Images'>
                            <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                            <img src={HyderabadExhibitorsPlaceholder} alt='Exhibitor-Placeholder' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitiesRemake;
