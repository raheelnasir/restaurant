import React from 'react'
import "./HomePage.css"
import dot from "../img/dot-1.png"
import header from "../img/hero.png"
import img1 from "../img/about-1.jpg"
import img2 from "../img/about-2.jpg"
import img3 from "../img/about-3.jpg"
import img4 from "../img/about-4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCircleInfo, faCodeFork, faDashboard, faGripHorizontal, faGripLines, faHatHard, faHeadset, faKitchenSet, faPerson, faPersonBiking, faPersonBooth, faPersonRifle, faSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons'
import MessageForms from '../../Components/MessageForms'
import TriCategory from '../../Components/TriCategory'
import { useInView } from 'react-intersection-observer'
import TestimonialCard from '../../Components/TestimonialCard'

const cards = [
    {
        title: "Card 1",
        description: "Lorem ipsum dolor sit amet.",
        image: "image1.jpg",
    },
    {
        title: "Card 2",
        description: "Consectetur adipiscing elit.",
        image: "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
    },
    {
        title: "Card 3",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
    },
    // Add more cards as needed
];

const HomePage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the effect once
        threshold: 1, // Trigger when 20% of the component is in view
    });

    return (
        <section className="home-page-main">

            {/* 
            <section className="home-hero-section">

                <div className='home-hero-heading glitch'>
                    Enjoy Our <br />
                    Delicious Meal
                    <br />
                    <p style={{ fontSize: "16px", lineHeight: "2ch", fontWeight: "500" }}>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>


                    <button className='btn btn-danger fs-5 m-1 text-large btn-home'> BOOK A TABLE</button>
                </div>
                <div>
                    <img className='home-header-image ' src={header} alt="" />

                </div>
                <img src="" alt="" />
                <img src={dot} alt=" Design By Free Pik" id='dot-2' />
                <img src={dot} alt="Design By Free Pik" id='dot-1' />
            </section> */}

            <div class="container-xxl py-4 bg-dark hero-header mb-5">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft" style={{ fontWeight: "600", fontFamily: "cursive" }}>Enjoy The <br />Tasty House</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a href="" style={{ backgroundColor: "#FEA116", border: "none" }} class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={header} alt="" />
                        </div>
                    </div>
                </div>
            </div>

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

            <hr />

            <section className="home-3">
                <div className='picture-holder'>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span>
                            <img src={img1} alt="" />

                        </span>
                        <span>
                            <img src={img2} alt="" />

                        </span>
                        <span>
                            <img src={img3} alt="" />

                        </span>
                        <span>
                            <img src={img4} alt="" />

                        </span>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span>
                            <img src={img1} alt="" />

                        </span>
                        <span>
                            <img src={img2} alt="" />

                        </span>
                        <span>
                            <img src={img3} alt="" />

                        </span>
                        <span>
                            <img src={img4} alt="" />

                        </span>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span>
                            <img src={img1} alt="" />
                        </span>
                        <span>
                            <img src={img2} alt="" />

                        </span>
                        <span>
                            <img src={img3} alt="" />

                        </span>
                        <span>
                            <img src={img4} alt="" />

                        </span>
                    </div>
                </div>
                <div className='picture-detail'>
                    <p style={{ color: "#FEA116", fontSize: "22px", fontFamily: "cursive" }}>
                        <FontAwesomeIcon icon={faCircleInfo} fontSize={"25px"} color='#0F172B' />  About us
                    </p>
                    <h6 style={{ fontSize: "40px", fontWeight: "800", fontFamily: "cursive", color: "#0F172B" }}>Welcome to <FontAwesomeIcon fontSize={"40px"} icon={faUtensils} color='#FEA116' /> Resturant </h6>
                    <p className='mx-auto' style={{ paddingTop: "10px", fontSize: "18px", color: "GrayText" }} >
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.

                    </p>

                    <p className='mx-auto' style={{ paddingTop: "20px", fontSize: "17px", color: "GrayText" }}>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="about-holder-bottom">
                        <div className='about-features'>
                            <p className='year'>
                                15
                            </p>
                            <p className='type'>
                                <br />
                                Trading Since
                                <p style={{ color: "GrayText", fontWeight: "light" }}>
                                    NOVEMBER 2021
                                </p>

                            </p>

                        </div>
                        <div className='about-features'>
                            <p className='year'>
                                50
                            </p>
                            <p className='type'>
                                <br />
                                Stunning
                                <p style={{ color: "GrayText", fontWeight: "light" }}>
                                    Chefs
                                </p>

                            </p>

                        </div>

                    </div>
                    <button className='book-button'>BOOK NOW</button>
                </div>
            </section>

            <section className="food-category">
                <TriCategory />
            </section>

            <section id='#book' className="contact-section w-100" style={{
                display: "flex", flexDirection: "row-reverse", flexWrap: "wrap-reverse",
            }}>
                <div style={{ width: "50%", margin: "auto 0", backgroundColor: "#0F172B" }}>
                    <MessageForms />
                </div>
                <div style={{ width: "50%", minHeight: "50vh", margin: "0" }}>
                    <img src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=740&t=st=1695443363~exp=1695443963~hmac=911a997387848bfc4f7e363e97c765a3f054a2756e3a04ad9286bbd24f2631ed" alt="" width={"100%"} height={"100%"} />
                </div>
            </section>

            <section className="testimonial-section ">
                <h6 className="mx-auto" style={{ fontSize: "30px", fontWeight: "bolder", fontFamily: "Nunito,cursive" }}>-Our Clients Say!!!-</h6>
                <TestimonialCard />
            </section>


        </section>
    )
}

export default HomePage