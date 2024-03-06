import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../Contact/Contact.css'
import Footer from '../Footer/Footer'
import { map } from '../../utility/constants'

const Contact = () => {

    const location = useLocation()

    const [userData, setUserData] = useState(
        {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = userData
        if (name !== '' && email !== "" && subject !== "" && message !== '') {
            setUserData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
        else {
            alert('fill the required data')
        }

    }

    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>Contact Us</h1>
            </section>
            <div className='margin'>
                <p>Have a project in mind? Let's discuss how our tech experts can bring your ideas to life. Contact us to start your digital journey today.</p>
            </div>
            <section className='contacts padding'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>NIC Solution, 3rd floor Bhawani Market,Near gate no.1 Metro Station,Sec-18 Noida</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p>nicstechindia@gmail.com</p>
                            </div>
                            <div className='box'>
                                <h4>PHONE:</h4>
                                <p>+91-120-4692636</p>
                            </div>
                        </div>

                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' name='name' value={userData.name} onChange={handleChange} />
                                <input type='email' placeholder='Email' name='email' value={userData.email} onChange={handleChange} />
                            </div>
                            <input type='text' placeholder='Subject' name='subject' value={userData.subject} onChange={handleChange} />
                            <textarea cols='30' rows='10' placeholder='Create a message here...' value={userData.message} name='message' onChange={handleChange}>
                            </textarea>
                            <button className='primary-btn' onClick={handleSendMessage}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact