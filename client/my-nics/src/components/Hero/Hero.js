import React from "react"
import "../Hero/Hero.css"
import Footer from '../Footer/Footer'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='heading'>
                            <h1><span>WELCOME TO</span> NIC SOLUTION</h1>
                        </div>
                        <p>We are team of talented designers making websites with all different types of technologies.</p>
                        <div className='button'>
                            <button className='primary-btn'>
                                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
            <Footer />
        </>
    )
}

export default Hero