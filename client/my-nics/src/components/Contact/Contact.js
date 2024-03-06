import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Contact/Contact.css'
import Footer from '../Footer/Footer'

const Contact = () => {

    const location = useLocation()

    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.947429625468!2d77.32367087585187!3d28.571341286856264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5588f446bd1%3A0x330dbc871ad93232!2sNICS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1709707604934!5m2!1sen!2sin'

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
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact