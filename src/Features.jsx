import React from "react";
import "./Features.css";
import img_expo2 from "/Images/Expo2.jpg";

function Features() {
    return (
        <div>
            <h1 className="features-heading">Features</h1>
            <div className="features-main-div">
                <div className="features-content">
                    <ul>
                        <li>
                            <span className="feature-title-bold">Appoint Franchises </span>
                            <p>Get face to face interaction with most prominent investors.</p>
                        </li>
                        <li>
                            <span className="feature-title-yellow">Spotlight your start-up </span>
                            <p>
                                Gain exposure for your products or service through product
                                demos/display and workshops.
                            </p>
                        </li>
                        <li>
                            <span className="feature-title-yellow">Dealers Appointment</span>
                            <p>
                                Penetrate new markets with your existing products and services,
                                before investors.
                            </p>
                        </li>
                        <li>
                            <span className="feature-title-yellow">Appoint Franchises</span>
                            <p>100+</p>
                        </li>
                        <li>
                            <span className="feature-title-yellow">Appoint Franchises</span>
                            <p>1000+</p>
                        </li>
                    </ul>
                </div>
                <div className="features-img">
                    <img className="img-rounded" src={img_expo2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Features;
