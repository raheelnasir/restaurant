import React from 'react'
import "./Footer.css"
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhone, FaFacebook, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn, FaArrowRight, FaArrowAltCircleRight, FaGreaterThan, FaUtensilSpoon, FaUtensils, FaSortAlphaDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="footer-main" >
                <div className="footer-address">
                    <h1>Address</h1>
                    <div className='f-location'>
                        <FaMapMarkerAlt id="footer-color" style={{ margin: "auto", fontSize: "20px" }} /> <h6 id="footer-color" >26 Shore, Edinburgh, <br /> Midlothian, EH6 6QN</h6>
                    </div>
                    <div className='f-caller'>
                        <FaPhone style={{ margin: "auto", rotate: "90deg", fontSize: "20px" }} id="footer-color" /> <a href='tel:01416111430' id="footer-color">01416111430</a>
                    </div>
                    <div className='f-emailer'>
                        <FaEnvelope id="footer-color" style={{ margin: "auto", fontSize: "20px" }} />
                        <a href='mailto:clearbusinessbyadrian@gmail.com' id="footer-color">Email Us</a>
                    </div>
                    <div className="footer-social">
                        <FaFacebookF style={{ margin: "auto", }} className='s-color' />
                        <FaTwitter style={{ margin: "auto", }} className='s-color' />
                        <FaLinkedinIn style={{ margin: "auto", }} className='s-color' />
                        <FaInstagram style={{ margin: "auto", }} className='s-color' />
                    </div>
                </div>
                <div className="footer-nav-links">
                    <h1>Links</h1>
                    <div className="f-nav-links">
                        <Link to={"/"}><FaUtensilSpoon className='sad' />  Home</Link>
                        <Link to={"/sale"}><FaUtensilSpoon className='sad' />  Sale</Link>
                        <Link to={"/about"}><FaUtensilSpoon className='sad' />  About</Link>
                        <Link to={"/contac"}><FaUtensilSpoon className='sad' />  Contact</Link>
                        <Link to={"/services"}><FaUtensilSpoon className='sad' />  Services</Link>
                        <Link to={"/signup"}><FaUtensilSpoon className='sad' />  SignUp</Link>
                    </div>
                </div>
                <div className="footer-info">
                    <h1>Information</h1>
                    <p>
                        necessary, making this the  first true <br /> generator on the Internet. It uses a <br /> dictionary of over 200 Latin words, <br /> combined with a handful
                    </p>
                </div>
                <div className="footer-subscriber">
                    <h1>Subscribe</h1>
                    <input type="email" placeholder='Enter Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Footer