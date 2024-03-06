import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Pricing/Pricing.css'
import Footer from '../Footer/Footer'
import PriceCard from './PriceCard'

const Pricing = () => {
    const location = useLocation()
    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>Choose The Right Plan</h1>
            </section>
            <div className='margin'>
            </div>
            <section className='price padding'>
                <div className='container grid'>
                    <PriceCard />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Pricing
