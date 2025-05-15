import { NavHeader } from '@layout/Partials/NavHeader'
import React from 'react'
import { AboutHead } from './Style'
import Client from '@modules/Client/Partials/Client'
import Footer from '@modules/Footer/Partials/Footer'
import BrandPartnersAboutus from './BrandPartnersAboutus'
import { Container } from '@modules/Objectives/Partials/Style'

const AboutUs = () => {
    return (
        <>
            <NavHeader />
            <Container>
                <AboutHead >
                    <h1> Our Story</h1>
                    <p>Welcome to Festive five where ordinary moments become extraordinary celebrations! Our dedicated team curates a diverse selection of unique gifts, designed to bring immense joy to both giver and recipient. For birthdays, anniversaries, or any special occasion, we believe in the enchantment of meaningful gifting. Each item is handpicked, ensuring it tells a story and creates lasting memories. Immerse yourself in the art of thoughtful giving; Festive Five is your hub for expressions of love, gratitude, and celebration. Count on us for a seamless gifting experience, and join our journey of spreading joy—let Festive Five make your moments truly memorable. Discover the joy of gifting with us!</p>
                </AboutHead>
            </Container>
            <br />
            <Client />
            <br />


            <BrandPartnersAboutus />




            <Footer />
        </>
    )
}

export default AboutUs