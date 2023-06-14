import React from "react";
import "./Bangalore.css";

function Bangalore(props) {

    {/*---------------------------------------------------------------------------------------------------------------------*/ }
    const [cityStatus, setcityStatus] = useState(true);

    const cityClose = () => {
        setcityStatus(false)
        // console.log("##################"+cityStatus)
    }
    props.collapseBangalore(cityStatus);
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
                    <h2>Details About Bangalore</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Bangalore, officially known as Bengaluru, is the capital city of the Indian state of Karnataka. It is often referred to as the "Silicon Valley of India" due to its thriving IT industry.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city is a major hub for technology companies and startups, attracting talent from across the country and the world. It is home to numerous multinational corporations and research institutions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Bangalore offers a vibrant and cosmopolitan lifestyle with a mix of modern infrastructure and rich cultural heritage. It has a pleasant climate throughout the year, earning it the nickname "Garden City of India."
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/952457118/photo/bangalore.jpg?s=612x612&w=0&k=20&c=lq-rLO3MD7zeRX8wIAtaofxz6v81cQ1by6erDOxIJfQ="
                        alt="Bangalore"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/1480304853/vector/3d-isometric-map-of-bangalore-is-a-city-of-india.jpg?s=612x612&w=0&k=20&c=IkBS0kgXP6UNdMxP2Uv2zEXA4gUMQqMneRdnWIhYh5I="
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

export default Bangalore;
