import { useState } from 'react';
import Carousel from '../Carousel';
import './Hyderabad.css';

function Hyderabad(props) {

    const [cityStatus, setCityStatus] = useState(true);

    const cityClose = () => {
        setCityStatus(false);
    }

    return (
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
            </div>
            <div className="cities-floorplan">
                <img
                    src="src\Image\floor plan.jpeg"
                    alt="Floor Plan"
                />
            </div>
            <div className="cities-main">
                <div className="cities-listdiv">
                    <h2>Details About Hyderabad</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Hyderabad is a major city in India known for its thriving industries and economic opportunities. It is particularly renowned for its information technology, pharmaceutical, and biotechnology sectors.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city offers a conducive environment for business growth and innovation, attracting both national and international companies. With a skilled workforce and supportive infrastructure, Hyderabad has emerged as a hub for technology and business development.
                                </p>
                            </li>
                            <li>
                                <p>
                                    In addition to its industrial prowess, Hyderabad also boasts a rich cultural heritage and is home to iconic landmarks such as the Charminar, Golconda Fort, and Hussain Sagar Lake.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/1010240892/photo/the-spectacular-char-minar-during-the-blue-hour.jpg?s=612x612&w=0&k=20&c=7nmZtfdOqtQqljaCnPygwKsz_jfxGIGrIuN912A86mA="
                        alt="Hyderabad"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/858885038/photo/airplane-fly-on-the-blue-painted-map.jpg?s=612x612&w=0&k=20&c=fMtSwmSw2Rtz6EDkRN3MLbI65A0Io5pY0P_G-PM2_GE="
                    alt="Airplane"
                />
            </div>
            <div className="cities-exhibitor">
                <h1>Our Exhibitors</h1>
            </div>
            <div className="cities-six">
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
            </div>
            <div className="cities-six">
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
            </div>
            <div className="cities-partner">
                <h1>Our Partners</h1>
            </div>
            <div className="cities-three">
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
            </div>
        </div>
    );
}

export default Hyderabad;
