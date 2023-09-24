import React from 'react'
import "./TestimonialCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
const TestimonialCard = () => {
    const [refi, inViews] = useInView({
        triggerOnce: true, // Only trigger the effect once
        threshold: 0.4, // Trigger when 20% of the component is in view
    });
    return (
        <>
            <section className="testimonial-holder" ref={refi}>

                <div className={`testimonial-card`} id={`${inViews ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                    <FontAwesomeIcon icon={faQuoteLeft} id='utens' />
                    <h6 id='card-title'>
                        Master Chefs

                    </h6>
                    <p id='card-description'>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img width={"60px"} style={{ borderRadius: "50%", height: "80px" }} src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" /> <p className='m-1 p-2' style={{ fontSize: "18px", fontWeight: "600" }}>Alisha White <p style={{ fontSize: "16px", color: "GrayText", fontWeight: "lighter" }}>Data Analyst</p> </p>
                    </div>
                </div>

                <div className={`testimonial-card`} id={`${inViews ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                    <FontAwesomeIcon icon={faQuoteLeft} id='utens' />
                    <h6 id='card-title'>
                        Master Chefs

                    </h6>
                    <p id='card-description'>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img width={"60px"} style={{ borderRadius: "50%", height: "80px" }} src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp" alt="" /> <p className='m-1 p-2' style={{ fontSize: "18px", fontWeight: "600" }}>Sara Jackson <p style={{ fontSize: "16px", color: "GrayText", fontWeight: "lighter" }}>Cyber Expert</p> </p>
                    </div>
                </div>
                <div className={`testimonial-card`} id={`${inViews ? "holders" : ""}`} style={{ display: "flex", flexDirection: "column" }} >
                    <FontAwesomeIcon icon={faQuoteLeft} id='utens' />
                    <h6 id='card-title'>
                        Master Chefs

                    </h6>
                    <p id='card-description'>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img width={"60px"} style={{ borderRadius: "50%", height: "80px" }} src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg" alt="" /> <p className='m-1 p-2' style={{ fontSize: "18px", fontWeight: "600" }}>Alisha White <p style={{ fontSize: "16px", color: "GrayText", fontWeight: "lighter" }}>Data Analyst</p> </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default TestimonialCard