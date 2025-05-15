import { Carousel } from "antd";
import styled from "styled-components";
import CollectionCard from '@assets/images/CollectionCard.png'


export const CustomHead = styled.div`
background-image: url(${CollectionCard});
/* margin: 100px; */
margin-top: 100px;
/* padding: 10px; */
display: flex;
justify-content: space-around;



@media screen  and (max-width:320px){
    display: flex;
    flex-direction: column;
    
}

@media screen and (min-width:321px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;

}



& li {
    text-align: start;
    padding: 10px;

}


`

export const FirstOne = styled.div`
margin: 10px;


`

export const CarouselSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;


& img {
    width: 70%;
}


`

// Carousel Section Style

export const CarouselDemo = styled.div`
 margin-top: 250px;

 @media screen and (max-width:320px) {
  margin-top: 120px;
  
 }

  @media screen and (min-width:321px) and (max-width:768px) {
  margin-top: 120px;
  
 }



  & img {
    max-width: 70%;
    height: auto;
    display: block;
    margin: 0 auto; 
  }
`;


export const Carouselslider = styled(Carousel)`
  height: 100%;
  width: 100%;
  position: relative;
overflow: hidden;


:where(.css-dev-only-do-not-override-2i2tap).ant-carousel .slick-dots li button {
    position: relative;
    display: block;
    width: 100%;
    height: 3px;
    padding: 0;
    color: transparent;
    font-size: 0;
    background: #504c4c;
    border: 0;
    border-radius: 1px;
    outline: none;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s;

    @media screen and (max-width:320px)  {
  display: none;
  }

  @media screen and  (min-width:320px) and  (max-width:767px)  {
   display: none;  
  
  }
}

.slick-dots li button {
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    outline: none;
    background: transparent;
    margin-top: 20px;
}

.slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 5pxpx;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width:320px)  {
  display: none;
  }

  @media screen and  (min-width:320px) and  (max-width:767px)  {
   display: none;
  
  }
}

  `;

export const CarouselHead = styled.div`
  position: relative;
  padding: 40px 100px;
  margin-top: 30px;

  @media screen and (max-width:320px)  {
    padding: 0px;
    
  }

  @media screen and  (min-width:320px) and  (max-width:767px)  {
    padding: 0px;

  
  }



  `

export const PreviousButton = styled.button`
position: absolute;
left: 6%;
z-index: 99;
background-color: black;
border: none;
padding: 10px;
background-color: black;
border-radius: 50%;
top: 40%;
left: 5%;

& svg {
  height: 35px;
  width:35px;
  border: none;

  
}

@media only screen and (max-width: 768px) {
    left: 3%;

  }


  
 @media only screen and (max-width: 426px) {
   display: none;
  }
`;

export const NextButton = styled.button`
position: absolute;
z-index: 99;
right: 6%;
border-radius: 50%;
padding: 10px;
background-color: black;
top: 40%;
right: 5%;


& svg {
  height: 35px;
  width:35px;
  border: none;


}

@media only screen and (max-width: 768px) {
    right: 3%;

  }


  
 @media only screen and (max-width: 426px) {
   display: none;
  }


`;