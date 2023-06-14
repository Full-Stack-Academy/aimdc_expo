import React from 'react';
import './Calendar2.css';

function Calendar2() {
    return (
        <div className="calendar-container">
            <h1 id='h1T'>UPCOMING EVENTS 2023-2024</h1>
            <hr />
            <div className="cal1">
                <div className="event">
                    <div className="imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLb4H6pk3zCs-EdL1t41gOzYAs_CUivkofA&usqp=CAU" alt="image" />
                    </div>
                    <div className="event-details">
                        <div className="date">
                            <a href="https://fullstackacademy.in/">
                                <span className='day'>07-08</span><br />
                                <span className='month'>October</span><br />
                                <span className='year'>2023</span>
                            </a>
                        </div>
                        <div className="location">
                            <div>Metro convention centre, Airport road<br /> Aaramgarh, Hyderabad, Telangana-500052</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <br />
                <div className="cal1">
                    <div className="event">
                        <div className="imgs">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Uyqgm87atVtSVuy6VCGzDoi3buI1aBEUvA&usqp=CAU" alt="image" />
                        </div>
                        <div className="event-details">
                            <div className="date">
                                <a href="https://fullstackacademy.in/">
                                    <span className='day'>04-05</span><br />
                                    <span className='month'>November</span><br />
                                    <span className='year'>2023</span>
                                </a>
                            </div>
                            <div className="location">
                                <div>Islam Gym khana, Mumbai</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Repeat the structure for the remaining events */}
        </div>
    );
}

export default Calendar2;
