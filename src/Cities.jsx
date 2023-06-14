import './Cities.css';

function Cities(props) {
    return (
        <div id={props.id} className="cities-container">
            <div className="cities-header">
                <div className='cities-title'>
                    <h1>FRANCHISE <span className="cities-and">&</span> DEALERSHIP<div className="cities-expo"><span className="cities-E">E</span><span className="cities-X">X</span><span className="cities-P">P</span><span className="cities-o">O</span></div> <div>2023-2024</div></h1>
                </div>
                <div className="cities-description">
                    <p className="cities-p1">Is a platform for Entrepreneurs and Business ownership to Explore Various</p>
                    <p className="cities-p2">Franchises and Dealership Opportunities and build Their Business by partnering with Established Brands.</p>
                    <h2 className="cities-discover">Discover</h2>
                    <p className="cities-p3">Discover Marketing and Branding Resources to help you Promote your Franchise or Dealership.</p>
                    <h2 className="cities-network">Network & Connect</h2>
                    <p className="cities-p4">Network with Potential Partners, Mentors, and Investors to help Grow your Business.</p>
                    <p className="cities-p5">Connect with Industry Experts, Successful Franchise and Dealership Owners, and fellow Entrepreneurs.</p>
                </div>
            </div>
            <div className="cities-floorplan">
                <img src="src\Image\floor plan.jpeg" width="1280" height="720" />
            </div>
            <div className="cities-main">
                <div className="cities-listdiv">
                    <h2>Detail About City</h2>
                    <div className="cities-list">
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque porro aut, at explicabo aliquid pariatur provident obcaecati animi minima.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cities-char">
                    <img src="src\Image\Hyderabad 1.jpeg" />
                </div>
            </div>
            <div>
                <img src="src\Image\Hyderabad2.jpeg" width="1280" height="720" />
            </div>
            <div className="cities-exhibitor">
                <h1>Our Exhibitors</h1>
            </div>
            <div className="cities-six">
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
            </div>
            <div className="cities-six">
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
            </div>
            <div className="cities-partner">
                <h1>Our Partners</h1>
            </div>
            <div className="cities-three">
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
                <img src="src\Image\placeholder.jpeg" />
            </div>
        </div>
    );
}

export default Cities;
