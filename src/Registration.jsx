import { useState } from 'react';
import './Registration.css';

function Registration() {
    const [option, setOption] = useState();

    return (
        <div>
            <form className='Registration-regForm' action="">
                <div className='Registration-formBorder'>
                    <h2 id='Registration-regh2'>Register Now</h2>
                    <hr style={{ color: "gray" }} />
                    <div >
                        <select className='Registration-select'>
                            <option value="" disabled selected>select city</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Chennai</option>
                            <option value="Chennai">Hyderabad</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>

                        <div className='Registration-regType'>
                            <div>
                                <input id='radio_selection'  type="radio" value="Visitor" name="abc" onChange={(e) => setOption(e.target.value)} />Visitor
                            </div>
                            <div>
                                <input id='radio_selection'  type="radio" name="abc" value="Exhibitor" onChange={(e) => setOption(e.target.value)} />Exhibitor
                            </div>
                        </div>

                        {
                            (option === 'Visitor') ? (
                                <>
                                    <input type="email" placeholder="Enter full name" className='Registration-input' />
                                    <input type="email" placeholder="Enter your email" className='Registration-input' />
                                    <input type="text" placeholder="Enter contact number" className='Registration-input' />
                                    <input type="text" placeholder="Enter your city" className='Registration-input' />
                                </>
                            ) : (
                                <>
                                    <input type="text" placeholder="Enter full name" className='Registration-input' />
                                    <input type="text" placeholder="Enter company name" className='Registration-input' />
                                    <input type="email" placeholder="Enter your email" className='Registration-input' />
                                    <input type="text" placeholder="Enter contact number" className='Registration-input' />
                                    <input type="text" placeholder="Enter your city" className='Registration-input' />
                                </>
                            )
                        }

                        <div className='Registration-buttons'>
                            <button id='Registration-clrbtn'>Clear</button>
                            <button id='Registration-sbtbtn'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Registration;
