import React from 'react'
import { NavHeader } from '@layout/Partials/NavHeader'
import Footer from '@modules/Footer/Partials/Footer'
import GiftKits from '@modules/GiftKits/Partials/GiftKits'
import HomeBanner from '@modules/HomePage/Partials/HomeBanner'
import Objectives from '@modules/Objectives/Partials/Objectives'

const Mainpage = () => {
    return (
        <>
            <NavHeader />
            <HomeBanner />
            <Objectives />
            <GiftKits /> 
            <Footer/>
        </>
    )
}

export default Mainpage