import React from 'react'
import "./OpeningHour.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck, faEnvelopeOpen, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import ProfileCard from '../../Components/ProfileCard'

const OpeningHour = () => {
    return (
        <>
            <section className="home-hero-section">
                <div className='home-hero-heading-s'>
                    <p style={{ fontFamily: "cursive", textShadow: "1px 1px black " }}>
                        The Delight Culinary
                    </p>
                    <h6 style={{
                        fontSize: "15px",
                        fontFamily: "", lineHeight: "3ch", color: "white"
                    }}>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </h6>

                    <button style={{ backgroundColor: "#FEA116", color: "white" }} className='btn  fs-5 p-3 m-1 text-large btn-home '>
                        Visit Now</button>
                </div>
            </section>
            <div style={{ padding: "50px 0px" }}>
                <h1 style={{ textAlign: "center", fontWeight: "900", fontFamily: "cursive" }}>
                    Contact Us
                </h1>
                <hr />
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <p className='p-3'>
                        <h6 style={{ fontSize: "25px", color: "#FEA116", fontFamily: "cursive" }}>General</h6>

                        <FontAwesomeIcon icon={faEnvelopeOpen} color='#FEA116' fontSize={"25px"} style={{ margin: "auto" }} /> <a style={{ margin: "10px auto", textDecoration: "none", color: "GrayText" }} href="mainto:clearbusinessbyadrian@gmail.com">clearbusinessbyadrian@gmail.com</a>
                    </p>
                    <p className='p-3'>
                        <h6 style={{ fontSize: "25px", color: "#FEA116", fontFamily: "cursive" }}>Booking</h6>

                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} color='#FEA116' fontSize={"25px"} /><a href='mailto:clearbusinessbyadrian@gmail.com' style={{ margin: "10px auto", textDecoration: "none", color: "GrayText" }} > clearbusinessbyadrian@gmail.com</a>
                    </p>
                    <p className='p-3'>
                        <h6 style={{ fontSize: "25px", color: "#FEA116", fontFamily: "cursive" }}>Phone</h6>

                        <FontAwesomeIcon icon={faPhoneVolume} color='#FEA116' fontSize={"25px"} /> <a style={{ textDecoration: "none", color: "GrayText", fontSize: "18px" }} href="tel:01416111430">01416111430</a>
                    </p>
                </div>
                <hr />

            </div>
            <section className="opening-detail" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px" }}>
                <table class="table" style={{ minWidth: "500px", width: "max-content", margin: "auto", background: "transparent" }} >
                    <thead style={{}}>
                        <tr>
                            <th scope="col" style={{ fontSize: "45px", fontWeight: "bolder", fontFamily: "cursive" }}>Day</th>
                            <th scope="col" style={{ fontSize: "45px", fontWeight: "bolder", fontFamily: "cursive" }}>Time</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontFamily: "cursive", fontSize: "20px" }}>
                        <tr>
                            <th scope="row">Monday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Tuesday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Wednesday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Thursday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Friday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Saturday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                        <tr>
                            <th scope="row">Sunday</th>
                            <td>1:00 PM to 11:00 AM</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <hr />
            <section style={{ padding: "80px 10px" }}>
                <h4 style={{ fontSize: "40px", fontFamily: "cursive", fontWeight: "800", textAlign: "center" }}>
                    Honourable Staff

                </h4>
                <ProfileCard />
            </section>

        </>
    )
}

export default OpeningHour