import styled from "styled-components";
import client from '@assets/images/client.png'
import { Carousel } from "antd";


export const ClientHead = styled.div`
/* background-image: url(${client}); */
background: linear-gradient(#AF71F5, #FD5B5F);
/* height: 220px; */



`

export const ClientLogos = styled.div`
padding: 20px;


.clienttitle{
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    padding: 15px;
    color: white;

    @media screen and (max-width:320px) {
        font-size: 22px;
        
    }

        @media screen and (min-width:321px) and (max-width:426px) {
        font-size: 26px;
        
    }

}


`

export const ClientCarouselslider = styled(Carousel)`
height: 100%;
width: 100%;
/* margin: 30px 30px 0px 30px; */
position: relative;


.slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 20px;
    left: 0;
    width: 118px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width:320px) {
    /* margin: 0 auto; */
    display: none;   
}

    @media screen and (min-width:320px) and (max-width:476px) {
    /* margin: 0 auto; */
    display: none;   
}

}

@media screen and (max-width:320px) {
    margin: 0 auto;
    
}


`




