import "./SplideCardCarousel.css"
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faQuoteLeft, faQuoteLeftAlt, faQuoteRight, faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";


const CardCarousel = ({ cards }) => {
    const splideOptions = {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "1rem",
        focus: "center",
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    };

    return (
        <div className="card-carousel">
            <Splide options={splideOptions}>
                {cards.map((card, index) => (
                    <SplideSlide key={index}>
                        <div className="card  " >
                            <FontAwesomeIcon id="commas" icon={faQuoteLeft} style={{ float: "left" }} />
                            <p>{card.description}</p>
                            <FontAwesomeIcon icon={faQuoteRightAlt} />

                            <img src={card.image} alt={card.title} style={{ margin: "auto" }} />                            <h3>{card.title}</h3>

                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CardCarousel;
