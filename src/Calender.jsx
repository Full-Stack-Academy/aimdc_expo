import './Calender.css'

function Calander() {
    return (
        <div>
            <h1 id='h1T'>UPCOMING EVENTS 2023-2024</h1>
            <hr />
            <div className="cal1">
                <div className="imgs">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLb4H6pk3zCs-EdL1t41gOzYAs_CUivkofA&usqp=CAU" alt="image" />
                </div>
                <div className="date">
                    <a href="https://fullstackacademy.in/">
                        <span className='day'>07-08</span><br />
                        <span className='month'>October</span><br />
                        <span className='year'>2023</span>
                    </a>
                </div>
                <div className="location">
                    <div>Metro convention centre,Airport road <br /> Aaramgarh, Hyderabad, Telangana-500052</div>
                </div>
            </div>
            <div>
                <hr />
                <br />
                <div className="cal1">
                    <div className="imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Uyqgm87atVtSVuy6VCGzDoi3buI1aBEUvA&usqp=CAU" alt="image" />
                    </div>
                    <div className="date">
                        <a href="https://fullstackacademy.in/">
                            <span className='day'>04-05</span><br />
                            <span className='month'>November</span><br />
                            <span className='year'>2023</span>
                        </a>
                    </div>
                    <div className="location">
                        <div>
                            <div>Islam Gym khana, Mumbai</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <br />
                <div className="cal1">
                    <div className="imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AV0Rrg4DT7M-3tuXQDJ1ilm-KHFqQxc7EQ&usqp=CAU" alt="image" />
                    </div>
                    <div className="date">
                        <a href="https://fullstackacademy.in/">
                            <span className='day'>25-26</span><br />
                            <span className='month'>November</span><br />
                            <span className='year'>2023</span>
                        </a>
                    </div>
                    <div className="location">
                        <div>
                            <div>Nalapad, Bangalore</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <br />
                <div className="cal1">
                    <div className="imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLb4H6pk3zCs-EdL1t41gOzYAs_CUivkofA&usqp=CAU" alt="image" />
                    </div>
                    <div className="date">
                        <a href="https://fullstackacademy.in/">
                            <span className='day' style={{ marginLeft: "30px" }}>16-17</span><br />
                            <span className='month'>December</span><br />
                            <span className='year'>2023</span>
                        </a>
                    </div>
                    <div className="location">
                        <div>
                            <div>CIAL, Kochi</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <div className="cal1">
                    <br />
                    <div className="imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLb4H6pk3zCs-EdL1t41gOzYAs_CUivkofA&usqp=CAU" alt="image" />
                    </div>
                    <div className="date">
                        <a href="https://fullstackacademy.in/">
                            <span className='day'>02-03</span><br />
                            <span className='month'>MAY-2024</span><br />
                            {/* <span className='year'>2024</span> */}
                        </a>
                    </div>
                    <div className="location">
                        <div>Metro palace, Ahmadabad</div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Calander;
