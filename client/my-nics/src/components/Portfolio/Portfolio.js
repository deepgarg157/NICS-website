import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Portfolio/Portfolio.css'
import Footer from '../Footer/Footer'
import e1 from '../../assets/e1.jpg'
import w1 from '../../assets/w1.jpeg'
import s1 from '../../assets/s1.webp'
import sd1 from '../../assets/sd1.jpg'
import b2b from '../../assets/e1.jpg'
import seop1 from '../../assets/seop1.jpg'

const Portfolio = () => {
    const location = useLocation()
    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>Portfolio</h1>
            </section>
            <div className='margin'>
                <p>Our diverse portfolio showcases our expertise in delivering cutting-edge software and web solutions that drive success for businesses across various industries.</p>
            </div>
            <div className='portfilio'>
                <img src={e1}></img>
                <img src={w1}></img>
                <img src={s1}></img>
            </div>
            <div className='portfilio'>
                <img src={sd1}></img>
                <img src={b2b}></img>
                <img src={seop1}></img>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio
