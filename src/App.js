import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import Card from './Card'

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AppSection></AppSection>
            <Card></Card>
            <Footer></Footer>
        </div>
    )
}

export default App