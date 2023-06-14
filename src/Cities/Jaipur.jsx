import React from "react";
import "./Jaipur.css";

function Jaipur(props) {

    {/*---------------------------------------------------------------------------------------------------------------------*/ }
    const [cityStatus, setcityStatus] = useState(true);

    const cityClose = () => {
        setcityStatus(false)
        // console.log("##################"+cityStatus)
    }
    props.collapseJaipur(cityStatus);
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
                    <h2>Details About Jaipur</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Jaipur is the capital city of the Indian state of Rajasthan and is known as the "Pink City" due to its distinct pink-colored buildings.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city is renowned for its rich cultural heritage, magnificent palaces, and vibrant markets. It attracts tourists from around the world with its royal charm and hospitality.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Jaipur is famous for its architectural marvels such as the Hawa Mahal, City Palace, Amer Fort, and Jal Mahal. It is also known for its traditional arts and crafts, including block printing, jewelry, and blue pottery.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI="
                        alt="Jaipur"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/472953332/photo/location-jaipur-blue-pin-on-the-map.jpg?s=612x612&w=0&k=20&c=KAdkW0_tbY5UkQdaeCBiSTvm-TFJrsg_vRTv6v2WNUY="
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

export default Jaipur;
