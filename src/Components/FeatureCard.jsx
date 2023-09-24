import React from 'react'
import "./FeatureCard.css"
const FeatureCard = () => {
    return (
        <>
            <div className="feature-card" style={{ display: "flex", flexDirection: "column" }} >
                <FontAwesomeIcon icon={faHatHard} id='utens' />
                <h6 id='card-title'>
                    Master Chefs

                </h6>
                <p id='card-description'>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
            </div>
        </>
    )
}

export default FeatureCard