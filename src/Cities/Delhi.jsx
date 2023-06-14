import React from "react";
import "./Delhi.css";

function Delhi(props) {

    {/*---------------------------------------------------------------------------------------------------------------------*/ }
    const [cityStatus, setcityStatus] = useState(true);

    const cityClose = () => {
        setcityStatus(false)
        // console.log("##################"+cityStatus)
    }
    props.collDelhi(cityStatus);
    {/*-----------------------------------------------------------------------------------------------------------------------*/ }

    return (
        <div id={props.id} className="cities-container">

            <button onClick={cityClose} className="sticky-button">X</button>
            
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
                </div>
                <div className="cities-description">
                    <p className="cities-p1">
                        Is a platform for Entrepreneurs and Business ownership to Explore Various
                    </p>
                    <p className="cities-p2">
                        Franchises and Dealership Opportunities and build Their Business by partnering with Established Brands.
                    </p>
                    <h2 className="cities-discover">Discover</h2>
                    <p className="cities-p3">
                        Discover Marketing and Branding Resources to help you Promote your Franchise or Dealership.
                    </p>
                    <h2 className="cities-network">Network & Connect</h2>
                    <p className="cities-p4">
                        Network with Potential Partners, Mentors, and Investors to help Grow your Business.
                    </p>
                    <p className="cities-p5">
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
                    <h2>Details About Delhi</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Delhi is the capital city of India and is known for its rich history, diverse culture, and architectural landmarks.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city is a major political, commercial, and educational center in the country. It is home to several government institutions, multinational companies, and renowned educational institutions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Delhi offers a mix of old-world charm and modernity. It is famous for its historical sites such as the Red Fort, Jama Masjid, and Qutub Minar, as well as its bustling markets like Chandni Chowk and Connaught Place.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/1002415624/photo/new-delhi-city-in-daytime.jpg?s=612x612&w=0&k=20&c=eZkR0veckRgWRSCkBEIINfVS_aElRO7i3sFOzH-ON-A="
                        alt="Delhi"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/1215614265/vector/new-delhi-india-map-india-map-in-asia-country.jpg?s=612x612&w=0&k=20&c=PRIsbHg8By0Y6EnCqadgDZQxjtljJP9SleDfHmo6Ms0="
                    alt="India Map"
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
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
            </div>
            <div className="cities-six">
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
                <img src="src\Image\placeholder.jpeg" alt="Placeholder" />
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

export default Delhi;
