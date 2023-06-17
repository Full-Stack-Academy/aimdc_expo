import './AboutUs.css'

import AboutUsImage from "/Images/Expo1.jpg"

function AboutUs() {
    return (
        <div>
            <section id='about' class="about">
                <h1>About Expo: 2023 - 2024</h1>
                <div class="contentbody">
                    <div class="aboutlist">
                        <ul>
                            <li>
                                <p>The growth of franchise industry in india shows no signs of slowing down. The sector proved to be
                                    highly profitable in 2021 and 2022.</p>
                            </li>
                            <li>
                                <p>Franchise management is expected to grow at a whopping rate of 30-35 percent per year.</p>
                            </li>
                            <li>
                                <p>India is a promising franchise market globally ( 2nd after the United States ). With arround 1.5 lakh franchises and more than 5000 franchisers operating in the country. </p>
                            </li>
                            <li>
                                <p>A franchise is a joint venture between a franchisor and a franchisee. The franchisee buys this right to sell the
                                    franchisor's goods or services under an existing business model and trademark.</p>
                            </li>
                            <li>
                                <p>There are many advantages to investing in a franchise. Widely recognized benefits include a
                                    ready-made business formula to follow. A franchise comes with market-tested products and services,
                                    and in many cases established brand recognition.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="aboutimage"><img width={500} src={AboutUsImage} alt="Expo Image" /></div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs