import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Team/Team.css'
import Footer from '../Footer/Footer'
import TeamCard from './TeamCard'

const Team = () => {
    const location = useLocation()
    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>Team</h1>
            </section>
            <div className='margin'>
                <p>Our team of skilled professionals is driven by a passion for innovation and excellence. Together, we deliver cutting-edge software and web development solutions, making NIC Solution a trusted partner for your digital success.</p>
            </div>
            <section className='team'>
                <div className='container grid'>
                    <TeamCard />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Team
