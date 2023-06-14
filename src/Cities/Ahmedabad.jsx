import React from "react";
import "./Ahmedabad.css";

function Ahmedabad(props) {

    {/*---------------------------------------------------------------------------------------------------------------------*/ }
    const [cityStatus, setcityStatus] = useState(true);

    const cityClose = () => {
        setcityStatus(false)
        // console.log("##################"+cityStatus)
    }
    props.collapseAhmedabad(cityStatus);
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
                    <h2>Details About Ahmedabad</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Ahmedabad is the largest city in the state of Gujarat, India. It is known for its vibrant culture, rich history, and architectural heritage.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city offers a favorable business environment and has emerged as a major industrial and commercial hub. It is renowned for its textile, pharmaceutical, and chemical industries.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ahmedabad is home to iconic landmarks such as the Sabarmati Ashram, Sidi Saiyyed Mosque, and Adalaj Stepwell, which showcase the city's cultural and architectural diversity.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/1322194536/photo/sabarmati-riverfront-aerial-view-ahmedabad.jpg?s=612x612&w=0&k=20&c=G8qSUp_FeJzB4Tq1vd02NGGSvUC-pI_PSb_z7ELdXAI="
                        alt="Ahmedabad"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/1055406966/vector/high-quality-map-city-of-india.jpg?s=612x612&w=0&k=20&c=LKnmGho9BSNrQjKJWUxknv1KNQTG4QIUpz4MQbclLZk="
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

export default Ahmedabad;
