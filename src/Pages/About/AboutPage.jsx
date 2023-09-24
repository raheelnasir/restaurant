import React from 'react'
import "./AboutPage.css"
import "../../Pages/Home/HomePage.css"
import img1 from "../img/about-1.jpg"
import img2 from "../img/about-2.jpg"
import img3 from "../img/about-3.jpg"
import img4 from "../img/about-4.jpg"
import dot from "../img/header.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faInfoCircle, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faUtensils } from '@fortawesome/free-solid-svg-icons'
import ProfileCard from '../../Components/ProfileCard'
const AboutPage = () => {
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
      
      <section style={{ padding: "80px 10px" }}>
        <h4 style={{ fontSize: "40px", fontFamily: "cursive", fontWeight: "800", textAlign: "center" }}>
          Honourable Staff

        </h4>
        <ProfileCard />
      </section>

      <hr />

      <section className="about-info-main" style={{ flexWrap: "wrap-reverse" }}>
        <div className='picture-detail'>
          <p style={{ color: "#FEA116", fontSize: "22px", fontFamily: "cursive" }}>
            <FontAwesomeIcon icon={faLocationDot} fontSize={"25px"} color='#0F172B' />  Locate us
          </p>
          <h6 style={{ fontSize: "40px", fontWeight: "800", fontFamily: "cursive", color: "#0F172B" }}>The Delight Culinary  <br /><FontAwesomeIcon fontSize={"40px"} icon={faUtensils} color='#FEA116' /> The Tasty House </h6>
          <p className='mx-auto' style={{ paddingTop: "10px", fontSize: "18px", color: "GrayText" }} >


          </p>

          <p className='mx-auto' style={{ paddingTop: "20px", fontSize: "17px", color: "GrayText" }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>

          <div className="about-holder-bottom">
            <div className='about-features'  >
              <p className='year'>
                <FontAwesomeIcon icon={faInfoCircle} />
              </p>
              <p className='type'>
                Owner
                Mr.Andrian Venor
              </p>

            </div>
            <div className='about-features feat'>
              <p className='year'>
                <FontAwesomeIcon icon={faLocation} />
              </p>
              <p className='type'>
                Location

                26_Shore, Edinburgh_Midlothian EH6_6QN
              </p>

            </div>


          </div>
          <button className='book-button'>VISIT NOW</button>
        </div>
        <div style={{ minWidth: "400px", maxWidth: "700px", margin: "auto", flex: "1" }}>
          <img src="https://img.freepik.com/premium-vector/current-location-concept_118813-4436.jpg" width={"100%"} alt="" />
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
                Years of <br />
                Experience
              </p>

            </div>
            <div className='about-features'>
              <p className='year'>
                50
              </p>
              <p className='type' >
                Talented <br />
                Cooks
              </p>


            </div>

          </div>
          <button className='book-button'>BOOK NOW</button>
        </div>
      </section>


    </>
  )
}

export default AboutPage