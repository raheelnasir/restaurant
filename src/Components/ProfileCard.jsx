import React from 'react'
import "./ProfileCard.css"
import img1 from "../Pages/img/team-1.jpg"
import img2 from "../Pages/img/team-2.jpg"
import img3 from "../Pages/img/team-3.jpg"
import img4 from "../Pages/img/team-4.jpg"

const ProfileCard = () => {
    return (
        <>
            <section className="profile-card-holder" style={{ flexWrap: "wrap" }}>
                <div className='profile-card-about'>
                    <div style={{ borderRadius: "50%", overflow: "hidden", flex: "1" }}>
                        <img src={img1} alt="" />

                    </div>
                    <div>

                        <h6 style={{ fontSize: "22px" }}>
                            Master Chef
                        </h6>
                        <p style={{ color: "GrayText" }}>
                            The Best Chef
                        </p>
                    </div>
                </div>
                <div className='profile-card-about'>
                    <div style={{ borderRadius: "50%", overflow: "hidden", flex: "1" }}>
                        <img src={img2} alt="" />

                    </div>
                    <div>

                        <h6 style={{ fontSize: "22px" }}>
                            Master Chef
                        </h6>
                        <p style={{ color: "GrayText" }}>
                            The Best Chef
                        </p>
                    </div>
                </div>
                <div className='profile-card-about'>
                    <div style={{ borderRadius: "50%", overflow: "hidden", flex: "1" }}>
                        <img src={img3} alt="" />

                    </div>
                    <div>

                        <h6 style={{ fontSize: "22px" }}>
                            Master Chef
                        </h6>
                        <p style={{ color: "GrayText" }}>
                            The Best Chef
                        </p>
                    </div>
                </div>
                <div className='profile-card-about'>
                    <div style={{ borderRadius: "50%", overflow: "hidden", flex: "1" }}>
                        <img src={img4} alt="" />

                    </div>
                    <div>

                        <h6 style={{ fontSize: "22px" }}>
                            Master Chef
                        </h6>
                        <p style={{ color: "GrayText" }}>
                            The Best Chef
                        </p>
                    </div>
                </div>

            </section >

        </>
    )
}

export default ProfileCard