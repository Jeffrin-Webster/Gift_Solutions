import React, { useRef } from 'react'
import { CustomRow } from '@components/others'
import { BrandLogo } from '@modules/Data/Data'
import { BrandCards, Carouselslider } from '@modules/GiftKits/Partials/Style'
import { Col } from 'antd'
import client from '@assets/images/client.png'
import { ClientCarouselslider, ClientHead, ClientLogos } from './Style'


const Client = () => {

    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };


    const slider = useRef(null);


    return (
        <>
            <ClientHead>
                <ClientLogos>
                    <h1 className='clienttitle'> CLIENT WHO TRUST US</h1>
                </ClientLogos>
                <ClientCarouselslider infinite={true} slidesPerRow={4} ref={slider} dots={false} draggable autoplay autoplaySpeed={3000} afterChange={onChange} responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 6 } },
                { breakpoint: 900, settings: { slidesPerRow: 3 } },
                { breakpoint: 697, settings: { slidesPerRow: 2 } }]}>
                    {BrandLogo.map(({ pics, key }) => {
                        return (

                            <BrandCards key={key} >
                                <img src={pics} alt="pics" /><br />
                            </BrandCards>
                        )
                    }
                    )}
                </ClientCarouselslider>
            </ClientHead>
        </>
    )
}

export default Client