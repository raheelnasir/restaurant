import React, { useState } from 'react'
import "./MessageForms.css"
import { FaFontAwesome } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faReceipt } from '@fortawesome/free-solid-svg-icons'
const MessageForms = () => {
    const [status, setStatus] = useState("")
    const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const SendMessage = (e) => {
        e.preventDefault();
        setStatus(
            <>
                <h1 style={{ color: "green", fontSize: "16px" }}> Message Sent Succesfully </h1>
            </>)
        // console.log(contactFormData)
        // try {
        //     axios.post("http://localhost:8000/api/postMessages/", contactFormData)
        //     console.log("Successfully Send")
        //     setContactFormData({
        //         name: "",
        //         email: "",
        //         phone: "",
        //         message: "",
        //     })
        //     setStatus(
        //         <>
        //             <h1 style={{ color: "green", fontSize: "16px" }}> Message Sent Succesfully </h1>
        //         </>)
        //     setTimeout(() => {
        //         setStatus(null)
        //     }, 3000);

        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <div className="form-hero">

                <form className="form-data">
                    <p>Reservation <FontAwesomeIcon icon={faReceipt} /> </p>
                    <h1>
                        Book A Table Online
                    </h1>
                    <input type="text" placeholder='Your Name' name='name' value={contactFormData.name} required onChange={handleChange} />
                    <input type="email" placeholder='Your Email' name='email' value={contactFormData.email} required onChange={handleChange} />
                    <input type="tel" placeholder='Contact Number' name='phone' value={contactFormData.phone} required onChange={handleChange} />
                    <input type="text" id='m-form' placeholder='Message' name='message' value={contactFormData.message} required onChange={handleChange} />
                    {status}
                    <button type='submit' className='p-3' onClick={SendMessage}>Send Message</button>
                </form>
            </div>

        </>

    )
}

export default MessageForms