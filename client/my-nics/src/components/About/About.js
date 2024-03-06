import React from 'react'
import { useLocation } from 'react-router-dom'
import '../About/About.css'
import aboutUs from '../../assets/aboutUs.jpg'
import { homeAbout } from '../../utility/constants'
import Footer from '../Footer/Footer'

const About = () => {
    const location = useLocation()
    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>About Us</h1>
            </section>
            <div className='margin'>
                <p>NIC Solution is a dynamic and innovative tech company specializing in cutting-edge software development and web development services. With a team of skilled professionals, we excel in creating bespoke solutions using a wide array of technologies. Our expertise spans across various domains, and we are committed to delivering high-quality products that cater to the unique needs of our clients. Whether it's web applications, mobile apps, or enterprise-level software, we leverage the latest tools and frameworks to build scalable and efficient solutions. At NIC Solution, we pride ourselves on staying ahead of the technological curve and continuously expanding our knowledge to provide the best possible outcomes for our clients.</p>
            </div>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src={aboutUs} alt='' />
                    </div>
                    <div className='right row'>
                        <div>
                            <p className='head'>Head to points</p>
                        </div>
                        <div className='items'>
                            {homeAbout.map((val, index) => {
                                return (
                                    <div className='item flexSB'>
                                        <div>
                                            {index + 1}
                                        </div>
                                        <div className='text'>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About
