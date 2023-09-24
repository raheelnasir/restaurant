import React from 'react'
import "./Menu.css"
const Menu = () => {
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
        </>
    )
}

export default Menu