import { useState } from 'react';
import './Registration.css';
import RegBackImg from "/Images/bg2.jpg"

import regImg from "/Images/Expo1.jpg"

function Registration() {

    const [option, setOption] = useState();



    return (


            <div className="regForm" style={{ backgroundImage: `url(${RegBackImg})` }}>

                <div className="form">
                    <h1 id="regNow">Register Now</h1> <hr id="hr" />
                    <div className="input">
                        <div className="dropDown">

                            <select className='selectCity' required>
                                <option value="" disabled selected>select city</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Chennai</option>
                                <option value="Chennai">Hyderabad</option>
                                <option value="Kochi">Kochi</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                        <div className='regAs'>
                            <div id='vis'>
                                <input id='vi' type="radio" value="Visitor" name="abc" onChange={(e) => setOption(e.target.value)} /><label for="vi">Visitor</label>
                            </div>
                            <div id='exh'>
                                <input id='ex' type="radio" name="abc" value="Exhibitor" onChange={(e) => setOption(e.target.value)} /> <label for="ex">Exhibitor</label>
                            </div>
                        </div>



                        {/* // <div class="inputField"> */}

                        {

                            option === 'Visitor' ?

                                <>
                                    <div>
                                        <input className="Visitor" type="text" placeholder="Enter your full name" required />
                                    </div>
                                    <div>
                                        <input className="Visitor" type="text" placeholder="Enter your contact" required />
                                    </div>
                                    <div>
                                        <input className="Visitor" type="email" placeholder="Enter your email" required />
                                    </div>
                                    <div>
                                        <input className="Visitor" type="email" placeholder="Enter your city" required />
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <input className="Exhibitor" type="text" placeholder="Enter your full name" required />
                                    </div>
                                    <div>
                                        <input className="Exhibitor" type="text" placeholder="Enter company name" required />
                                    </div>
                                    <div>
                                        <input className="Exhibitor" type="text" placeholder="Enter your contact" required />
                                    </div>
                                    <div>
                                        <input className="Exhibitor" type="email" placeholder="Enter your email" required />
                                    </div>
                                    <div>
                                        <input className="Exhibitor" type="email" placeholder="Enter your city" required />
                                    </div>
                                </>

                        }

                        <div className="btn">
                            <button className="btns">Clear</button>
                            <button className="btns">Submit</button>
                        </div>
                    </div>

                </div>

            </div>


    )
}

export default Registration;
