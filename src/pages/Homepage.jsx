import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../elements/homepage/Header'
import Footer from '../components/Footer'
import TopLawyers from '../elements/homepage/TopLawyers'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <TopLawyers />
            <Footer />
        </div>
    )
}

export default Homepage
