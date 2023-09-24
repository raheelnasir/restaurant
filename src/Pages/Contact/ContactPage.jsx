import React from 'react'
import "../../Pages/Home/HomePage.css"
import "./ContactPage.css"
import MessageForms from '../../Components/MessageForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEnvelope, faEnvelopeCircleCheck, faEnvelopeOpen, faHatHard, faHeadset, faMailBulk, faMessage, faPhone, faPhoneVolume, faUtensils } from '@fortawesome/free-solid-svg-icons'

import { FaMailchimp } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import ProfileCard from '../../Components/ProfileCard';
const ContactPage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the effect once
        threshold: 1, // Trigger when 20% of the component is in view
    });
    return (
        <>
            <section style={{ overflow: "hidden" }}>

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

                <br />

                <section>
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
                </section>

                <hr />

                <section className="home-2" ref={ref}>
                    <div
                        className={`card-holder`} style={{ display: "flex", flexDirection: "row" }}>

                        <div className="feature-card" id={`${inView ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                            <FontAwesomeIcon icon={faHatHard} id='utens' />
                            <h6 id='card-title'>
                                Master Chefs

                            </h6>
                            <p id='card-description'>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </p>
                        </div>
                        <div className="feature-card" id={`${inView ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                            <FontAwesomeIcon icon={faCartPlus} id='utens' />
                            <h6>
                                Online Order

                            </h6>
                            <p>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </p>
                        </div>
                        <div className="feature-card" id={`${inView ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                            <FontAwesomeIcon icon={faUtensils} id='utens' />
                            <h6>
                                Quality Food
                            </h6>
                            <p>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </p>
                        </div>
                        <div className="feature-card" id={`${inView ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                            <FontAwesomeIcon icon={faHeadset} id='utens' />
                            <h6>
                                24/7 Service

                            </h6>
                            <p>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </p>
                        </div>
                    </div>
                </section>


                <section id='#book' className="contact-main" style={{ display: "flex", flexDirection: "row", backgroundColor: "#0F172B", flexWrap: "wrap", padding: " 10px 50px    " }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.972281995399!2d-3.169914684188887!3d55.97970391135462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7932f788dd1:0x29c0f39a6476a1d3!2s26%20Shore,%20Edinburgh,%20Midlothian,%20EH6%206QN!5e0!3m2!1sen!2suk!4v1601710907486!5m2!1sen!2suk"
                        width="100%"
                        style={{ minWidth: "200px", flex: "1", minHeight: "400px", margin: "auto" }}
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                    <form className="contact-main" style={{ minWidth: "400px" }}>
                        <MessageForms />
                    </form>
                </section>
                <section style={{ padding: "80px 10px" }}>
                    <h4 style={{ fontSize: "40px", fontFamily: "cursive", fontWeight: "800", textAlign: "center" }}>
                        Honourable Staff

                    </h4>
                    <ProfileCard />
                </section>
            </section>
        </>
    )
}

export default ContactPage