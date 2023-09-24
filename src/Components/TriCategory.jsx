import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faCoffee, faHardHat, faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import './TriCategory.css';

const Data = [
    {
        "category": "Breakfast",
        "image": "https://unpeeledjournal.com/wp-content/uploads/2023/04/52828002762_99f3b99b45_b.jpg",
        "itemname": "Eggs Benedict",
        "detail": "Poached eggs on an English muffin with Hollandaise sauce.",
        "price": "$9.99"
    },
    {
        "category": "Breakfast",
        "image": "https://www.thespruceeats.com/thmb/7f1elnZUksaVTEBvo41UrqMABVQ=/340x510/filters:no_upscale():max_bytes(150000):strip_icc()/SES-basic-french-toast-3056820-hero-01-6ed70ff7901a4e64995d890b03946ac0.jpg",
        "itemname": "Pancakes",
        "detail": "Delicious fluffy pancakes with maple syrup.",
        "price": "$7.99"
    },
    {
        "category": "Breakfast",
        "image": "https://unpeeledjournal.com/wp-content/uploads/2023/04/52828002762_99f3b99b45_b.jpg",
        "itemname": "Eggs Benedict",
        "detail": "Poached eggs on an English muffin with Hollandaise sauce.",
        "price": "$9.99"
    },
    {
        "category": "Breakfast",
        "image": "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg",
        "itemname": "Pancakes",
        "detail": "Delicious fluffy pancakes with maple syrup.",
        "price": "$7.99"
    },

    {
        "category": "Breakfast",
        "image": "https://unpeeledjournal.com/wp-content/uploads/2023/04/52828002762_99f3b99b45_b.jpg",
        "itemname": "Eggs Benedict",
        "detail": "Poached eggs on an English muffin with Hollandaise sauce.",
        "price": "$9.99"
    },
    {
        "category": "Breakfast",
        "image": "https://www.thespruceeats.com/thmb/7f1elnZUksaVTEBvo41UrqMABVQ=/340x510/filters:no_upscale():max_bytes(150000):strip_icc()/SES-basic-french-toast-3056820-hero-01-6ed70ff7901a4e64995d890b03946ac0.jpg",
        "itemname": "Pancakes",
        "detail": "Delicious fluffy pancakes with maple syrup.",
        "price": "$7.99"
    },
    {
        "category": "Breakfast",
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg",
        "itemname": "Eggs Benedict",
        "detail": "Poached eggs on an English muffin with Hollandaise sauce.",
        "price": "$9.99"
    },
    {
        "category": "Lunch",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Caesar Salad",
        "detail": "Fresh romaine lettuce, croutons, and Caesar dressing.",
        "price": "$8.99"
    },
    {
        "category": "Lunch",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Club Sandwich",
        "detail": "Triple-decker sandwich with bacon, lettuce, and tomato.",
        "price": "$10.99"
    },
    {
        "category": "Lunch",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Caesar Salad",
        "detail": "Fresh romaine lettuce, croutons, and Caesar dressing.",
        "price": "$8.99"
    },
    {
        "category": "Lunch",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Club Sandwich",
        "detail": "Triple-decker sandwich with bacon, lettuce, and tomato.",
        "price": "$10.99"
    },
    {
        "category": "Dinner",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Grilled Salmon",
        "detail": "Salmon fillet grilled to perfection with lemon and herbs.",
        "price": "$15.99"
    },
    {
        "category": "Dinner",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Filet Mignon",
        "detail": "Tender beef filet cooked to your liking with a red wine reduction.",
        "price": "$19.99"
    },
    {
        "category": "Dinner",
        "image": "https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/d52d13de-0ff2-4bbc-931f-00966c895d89/DreamShaper_v7_person_fixing_wires_logo_electrician_decent_car_2.jpg?w=512",
        "itemname": "Filet Mignon",
        "detail": "Tender beef filet cooked to your liking with a red wine reduction.",
        "price": "$19.99"
    }

]


const TriCategory = () => {

    

        const[selectedCategory, setSelectedCategory] = useState('Breakfast'); // Initialize selectedCategory state

    const handleFilter = (category) => {
        setSelectedCategory(category);
    }

    const filteredData = selectedCategory
        ? Data.filter(item => item.category === selectedCategory)
        : Data;

    return (
        <>
            <section className="tricategory-main">
                <div className="tricat">
                    <div onClick={() => handleFilter('Breakfast')} className={`tricat ${selectedCategory === 'Breakfast' ? 'actives' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faCoffee} fontSize={"35px"} color='#FEA116' />
                        </p>
                        <p style={{ lineHeight: "2ch", fontWeight: "600", marginLeft: "5px" }}>
                            Popular <br /> Breakfast
                        </p>
                    </div>
                    <div onClick={() => handleFilter('Lunch')} className={`tricat ${selectedCategory === 'Lunch' ? 'actives' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faBurger} fontSize={"35px"} color='#FEA116' />
                        </p>
                        <p style={{ lineHeight: "2ch", fontWeight: "600", marginLeft: "5px" }}>
                            Popular <br /> Lunch
                        </p>
                    </div>
                    <div onClick={() => handleFilter('Dinner')} className={`tricat ${selectedCategory === 'Dinner' ? 'actives' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faHardHat} fontSize={"35px"} color='#FEA116' />
                        </p>
                        <p style={{ lineHeight: "2ch", fontWeight: "600", marginLeft: "5px" }}>
                            Popular <br /> Dinner
                        </p>
                    </div>
                </div>

                <div className="menu-items" >
                    {filteredData.map((item, index) => (
                        <div class="menu-item ">
                            <img src={item.image} width={"20%"} style={{ minHeight: "100%" }} alt="" />
                            <div style={{ display: "flex", flexDirection: "column", margin: "5px 15px" }}>
                                <h5 className='p-2' style={{ fontWeight: "800", fontFamily: "cursive", fontSize: "30px", borderBottom: "1px solid gray" }}>{item.itemname} - {item.price}</h5>
                                <p style={{ fontSize: "17px", fontWeight: "400", color: "GrayText" }}>
                                    {item.detail}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default TriCategory;
