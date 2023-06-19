import './WhoExhibit.css'

import Agri from "/Images/Agri.png"
import Dairy from "/Images/Dairy Products.png"
import FMCG from "/Images/FMCG.png"
import Beauty from "/Images/Beauty.png"
import Health from "/Images/Health and Wellness.png"
import Jewellery from "/Images/Gems and Jewellery.png"
import Apparel from "/Images/Apparel.png"
import EV from "/Images/Automobiles and EV.png"
import Aviation from "/Images/Aviation.png"
import Tours from "/Images/Travel and Tours.png"
import Hospitality from "/Images/Hospitality.png"
import Construction from "/Images/Construction.png"
import Education from "/Images/Education.png"
import Finance from "/Images/Financial Services.png"
import Logistics from "/Images/Logistics and Courier.png"
import Chemicals from "/Images/Chemicals.png"
import Metals from "/Images/Metals.png"
import Manufacturing from "/Images/Manufacturing.png"
import Hardware from "/Images/Hardware.png"
import Software from "/Images/Software.png"
import Telecom from "/Images/Telecom.png"
import RealEstate from "/Images/Real Estate.png"
import Retail from "/Images/Retail.png"
import StartUp from "/Images/Business Startup.png"
import Brands from "/Images/International Brands.png"
import Sports from "/Images/Sport and Leisure.png"


function WhoExhibit()
{
    return(
        <div>
            <div id='who' class="root">
                <h2 class="TopTitle">WHO EXHIBIT</h2>
                <div class="Box-Container">

                    <div class="child">
                        <h2 class="child-title">Food and Beverages</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={Agri} alt="Agri Products" />
                                <p class="svg-title">Agri Products</p>
                            </div>
                            <div class="svg-container">
                                <img src={Dairy} alt="Dairy Products" />
                                <p class="svg-title">Dairy Products</p>
                            </div>
                            <div class="svg-container">
                                <img src={FMCG} alt="FMCG" />
                                <p class="svg-title">FMCG</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Beauty and Wellness</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={Apparel} alt="Apparel" />
                                <p class="svg-title">Apparel</p>
                            </div>
                            <div class="svg-container">
                                <img src={Beauty} alt="Beauty" />
                                <p class="svg-title">Beauty</p>
                            </div>
                            <div class="svg-container">
                                <img src={Health} alt="Health and Wellness" />
                                <p class="svg-title">Health and Wellness</p>
                            </div>
                            <div class="svg-container">
                                <img src={Jewellery} alt="Gems and Jewellery" />
                                <p class="svg-title">Gems and Jewellery</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Tours and Travel</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={EV} alt="Automobiles and EV" />
                                <p class="svg-title">Automobiles and EV</p>
                            </div>
                            <div class="svg-container">
                                <img src={Aviation} alt="Aviation" />
                                <p class="svg-title">Aviation</p>
                            </div>
                            <div class="svg-container">
                                <img src={Tours} alt="Travel and Tours" />
                                <p class="svg-title">Travel and Tours</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Services and Consultancy</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={Hospitality} alt="Hospitality" />
                                <p class="svg-title">Hospitality</p>
                            </div>
                            <div class="svg-container">
                                <img src={Construction} alt="Construction" />
                                <p class="svg-title">Construction</p>
                            </div>
                            <div class="svg-container">
                                <img src={Education} alt="Education" />
                                <p class="svg-title">Education</p>
                            </div>
                            <div class="svg-container">
                                <img src={Finance} alt="Financial Services" />
                                <p class="svg-title">Financial Services</p>
                            </div>
                            <div class="svg-container">
                                <img src={Logistics} alt="Logistics and Courier" />
                                <p class="svg-title">Logistics and Courier</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Industrial</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={Chemicals} alt="Chemicals" />
                                <p class="svg-title">Chemicals and Petro-Chemicals</p>
                            </div>
                            <div class="svg-container">
                                <img src={Metals} alt="Metals" />
                                <p class="svg-title">Metals</p>
                            </div>
                            <div class="svg-container">
                                <img src={Manufacturing} alt="Manufacturing" />
                                <p class="svg-title">Manufacturing</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Digital Technology</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={Hardware} alt="Hardware" />
                                <p class="svg-title">Hardware</p>
                            </div>
                            <div class="svg-container">
                                <img src={Software} alt="Software" />
                                <p class="svg-title">Software</p>
                            </div>
                            <div class="svg-container">
                                <img src={Telecom} alt="Telecom" />
                                <p class="svg-title">Telecom</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Commercial</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={RealEstate} alt="Real Estate" />
                                <p class="svg-title">Real Estate</p>
                            </div>
                            <div class="svg-container">
                                <img src={Retail} alt="Retail" />
                                <p class="svg-title">Retail</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="child">
                        <h2 class="child-title">Miscellaneous</h2>
                        <div class="image-container">
                            <div class="svg-container">
                                <img src={StartUp} alt="Business Startup" />
                                <p class="svg-title">Business Startup</p>
                            </div>
                            <div class="svg-container">
                                <img src={Brands} alt="International Brands" />
                                <p class="svg-title">International Brands</p>
                            </div>
                            <div class="svg-container">
                                <img src={Sports} alt="Sport and Leisure" />
                                <p class="svg-title">Sport and Leisure</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default WhoExhibit