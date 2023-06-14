import React from "react";
import "./Lucknow.css";

function Lucknow(props) {

    {/*---------------------------------------------------------------------------------------------------------------------*/ }
    const [cityStatus, setcityStatus] = useState(true);

    const cityClose = () => {
        setcityStatus(false)
        // console.log("##################"+cityStatus)
    }
    props.collapseLucknow(cityStatus);
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
                    <h2>Details About Lucknow</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>
                                    Lucknow is the capital city of the Indian state of Uttar Pradesh.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The city is known for its rich history, cultural heritage, and Nawabi culture. It is often referred to as the "City of Nawabs."
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lucknow is famous for its architectural marvels, such as Bara Imambara, Chota Imambara, and Rumi Darwaza, which showcase the city's grandeur and craftsmanship.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-iconic">
                    <img
                        src="https://media.istockphoto.com/id/1365111066/photo/fa%C3%A7ade-of-jama-masjid-built-by-nawab-mohammad-ali-shah-bahadur-in1839-itis-one-of-the-oldest.jpg?s=612x612&w=0&k=20&c=-R4bslqdR0uOBfM-BN-JRrE9zLFcupGb1gF-uqWpXIs="
                        alt="Lucknow"
                    />
                </div>
            </div>
            <div className="cities-highlighted">
                <img
                    src="https://media.istockphoto.com/id/487973800/photo/lucknow-pinned-on-a-map-of-asia.jpg?s=612x612&w=0&k=20&c=vEo3JzVtjLWGvWCw8V8matCm9J832tgd04FFKyfqauw="
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

export default Lucknow;
