import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="containerfooter">
                <div className="row">
                    <div className="footer-links">
                        <div className="footer-column">
                            <h2 className="footer-links-title">Links</h2>
                            <p className="footer-links-description">Connect with us on:</p>
                            <div className="footer-socialIcon">
                                <a href="https://www.facebook.com/profile.php?id=100091381998426&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/aimdcexpo/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/Aimdcexpo" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            
                            {/*<div className="footer-images">
                                <br />
                                <img className="footer-image" width={80} src="src\Image\1 (1).jpeg" alt="Image 1" />
                                <img className="footer-image" width={80} src="src\Image\1 (2).jpeg" alt="Image 2" />
                                <img className="footer-image" width={80} src="src\Image\1 (3).jpeg" alt="Image 3" />
                            </div>*/}

                        </div>
                    </div>

                    <div className="footer-question">
                        <div className="footer-column">
                            <h2 className="footer-question-title">Have a Question?</h2>
                            <p>
                                <a className="footer-contact" href="tel:+91 990-297-9079">
                                    +91-9902 9790 79
                                </a>
                            </p>
                            <p>
                                <a className="footer-contact" href="mailto:info@aimdcexpo.com">
                                    info@aimdcexpo.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="footer-partner">
                        <div className="footer-column">
                            <h2 className="footer-partner-title">IT Partner</h2>
                            <p>
                                <a className="footer-partner-link" href="https://fullstackacademy.in/courses-home/" target="_blank" rel="noopener noreferrer">
                                    Full Stack Academy Hyderabad
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <p id="lp" className="footer-venue-title">Copyright © 2023 Franchise & Dealership Expo</p>
            </div>
        </div>
    );
}

export default Footer;
