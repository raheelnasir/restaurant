import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/rest-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faNavicon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import header from "../img/hero.png"

const Navbar = () => {
    const navbarTogglerStyle = {
        color: 'white', // Change the color to white
    };
    const [active, setActive] = useState(null)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setActive(true)
                console.log(active)

            }
            else {
                setActive(false)
            }
            console.log(window.scroll, window.scrollY)
            console.log(1)
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            {active ? (<>
                <nav style={{ backgroundColor: "black" }} className="navbar-expand-lg navbar navbar-dark  navbar2  px-lg-5 ">
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className=" m-0" style={{ color: "#FEA116!important", fontWeight: "900", fontFamily: "cursive" }}><FontAwesomeIcon icon={faUtensils} color='#FEA116' fontWeight={"900"} />    Delight Culinary</h1>
                    </Link>
                    <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <FontAwesomeIcon className='p-1 ' fontSize={"25px"} icon={faHamburger} color='#FEA116' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/opening" className="nav-item nav-link">Opening Hours</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/about" className="nav-item nav-link ">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <a href="#book" className="btn p-3 px-4" style={{ backgroundColor: "#FEA116", color: "white", border: "none" }}>Book A Table</a>
                    </div>
                </nav>

            </>) : < div className="container-xxl  position-relative p-0">
                <nav style={{}} className="navbar navbar-expand-lg navbar-dark navbar1 bg-dark  px-lg-5 ">
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className=" m-0" style={{ color: "#FEA116!important", fontWeight: "900", fontFamily: "cursive" }}><FontAwesomeIcon icon={faUtensils} color='#FEA116' fontWeight={"900"} />    Delight Culinary   </h1>
                    </Link>
                    <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <FontAwesomeIcon className='p-1 ' fontSize={"25px"} icon={faHamburger} color='#FEA116' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/opening" className="nav-item nav-link">Opening Hours</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/about" className="nav-item nav-link ">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <a href='#book' className="btn p-3 px-4" style={{ backgroundColor: "#FEA116", color: "white", border: "none" }}>Book A Table</a>
                    </div>
                </nav>

            </div >
            }
        </>
    );
};

export default Navbar;
