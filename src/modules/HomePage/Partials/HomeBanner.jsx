import React, { useEffect, useState } from 'react'
import { BannerStyleMain } from './Style'
import { Flex } from '@components/others'
import Giftimg1 from '@assets/images/Banner/HomeThird.png'
import Giftimg2 from '@assets/images/Banner/HomeFirst.png'
import Giftimg3 from '@assets/images/Banner/HomeSecond.png'
import Giftimg4 from '@assets/images/Banner/HomeFourth.png'
import Giftimg5 from '@assets/images/Banner/HomeFfth.png'
import Giftimg6 from '@assets/images/Banner/HomeSixth.png'
import Star from '@assets/images/Star.png'
import { StyledButton } from '@modules/GiftKits/Partials/Style'
import styled from 'styled-components'
import { Button } from '@components/form'
import silver_watch from '@assets/images/silver_watch.png'


const EnquiryBtn = styled(Button)`
      background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white !important;


&:hover {
    background: white !important;
      color: black !important;
      border-color: black !important;
    }
    

`




const HomeBanner = () => {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [Giftimg1, Giftimg2, Giftimg3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <BannerStyleMain>
            <div className='starImg'>

                <img src={Star} alt='' />
            </div>
            {/* <h1>GIFTS FOR YOUR LOVED ONES</h1> */}
            <h1>Festive</h1>
            <h2>Five</h2>
            <p>GIFT SOLUTION</p>
            <h4>FOR YOUR LOVED ONES</h4>
            <br/>
            {/* <marquee width="100%" direction="right" scrolldelay="10"> */}
                <h3>Festive Five</h3>
            {/* </marquee> */}
            <Flex center className='MobileRespn'>
                <EnquiryBtn className='demo'>Enquiry</EnquiryBtn>
            </Flex>
            <div className='bottomImg'>
                {/* <img src={images[currentImgIndex]} alt={`Gift ${currentImgIndex + 1}`} /> */}
                <img src={Giftimg1} />

            </div>


            <div className='leftImg1'>
                <img src={Giftimg2} width={'10px'} />
            </div>
            <div className='leftImg2'>
                <img src={Giftimg3} width={'10px'} /><br />
                <img src={Giftimg4} width={'10px'} />
            
            </div>
            {/* <div className='leftImg8'> */}
                {/* <img src={Giftimg3} width={'10px'} /> */}
            {/* </div> */}

            <div className='leftImg3'>
                <img src={Giftimg4} /><br/>
                
            </div>
            <div className='leftImg4'>
                <img src={Giftimg5} />

            </div>
            <div className='leftImg5'>
                <img src={Giftimg4} />

            </div>
            <div className='leftImg6'>
                <img src={Giftimg5} />
            </div>
            <div className='leftImg7'>
                <img src={Giftimg6} />
            </div>

     
        </BannerStyleMain>
    )
}

export default HomeBanner