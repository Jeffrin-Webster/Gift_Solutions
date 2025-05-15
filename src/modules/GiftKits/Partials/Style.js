import { Button } from "@components/form";
import { THEME } from "@theme/index";
import { Card, Carousel } from "antd";
import styled from "styled-components";





export const GiftHead = styled.div`
padding-top: 50px;
background: #FFFFFF;

.giftimg {
        & img:hover {
            box-shadow: 11px 11px 11px #EBEBEB;
        }
    }


`

export const GiftKitsImg = styled.div`
width: 200px;
height: 160px;

& img {
    width: 100%;
    height: auto;
}






`

export const SaleCards = styled.div`

 &.loading {
  filter: blur(20px);
  clip-path: inset(0);
}
&.loaded {
  filter: blur(0px);
  transition: filter 2s linear;
}


`

export const GiftKitsCards = styled.div`
  text-align: center;
  padding: 30px 20px 20px 10px;
  &:hover {
    box-shadow: 11px 11px 11px #EBEBEB;
  }
  & p {
    color: #5A5A5A;
    text-align: center;
  }
  & h1 {
    color: #000000;
  }
  & img {
    align-items: center;
    width: 100%;
  }
  &.yelloww {
    background: yellow;
  }
  &.redd {
    background: red;
  }
  &.greenn {
    background: green;
    border: 10px solid black;
  }
 &.loading {
  filter: blur(20px);
  clip-path: inset(0);
}
&.loaded {
  filter: blur(0px);
  transition: filter 2s linear;
}
`;


export const GiftKitsText = styled.div`
text-align: center;

& h1 {
    font-size:64px ;
    font-weight: 400;

    @media screen and (max-width: 320px) {
    font-size:5px;
    font-weight: 200;

}

@media screen and (max-width: 992px) {
    font-size:32px ;
    font-weight: 200;

}
}

& p {
    font-size: 20px;
    font-weight: 400px;

    @media screen and (max-width: 320px) {
    font-size:10px ;
    font-weight: 200;
}

@media screen and (max-width: 992px) {
    font-size:15px ;
    font-weight: 200;

}

}
    
`

export const StyledButton = styled(Button)`

padding:20px 20px;
align-items: center;
text-align: center;
display: flex;
justify-content: center;
background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
color: white;
border-radius: 70px;
margin: auto;
margin-top:20px;
margin-bottom: 20px;


:hover{
     background: white;
     color: black !important;
     border-color:black !important
}
`

export const FeaturedHead = styled.div`
margin-top: 30px;

@media screen and (min-width:20px) and (max-width:769px) {
    margin-top: 0px;
    
}
`


export const Featured = styled.div`
text-align: center;
/* position: relative; */



& h1 {
    font-size: 50px;
    font-weight: 400;

    @media screen and (max-width:320px) {
        font-size: 40px;
        
    }
    & img {
    width: 36px !important;
    margin-bottom: 10px;
    right: 0;

    
    @media screen and (max-width:426px) {
       display: none;
        
    }
}
}


& p {
    font-size: 20px;
    font-weight: 400;

}
    


`



export const BrandCards = styled.div`
 /* height: 70px; */
 border-radius: 105px;
 width: 100%;


 
/* @keyframes scrollAnimation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
} */




& img {
    width: 90%;
    height: 50px;
    aspect-ratio: 3/2;
    object-fit: contain;
    background-color: white;
 border-radius: 105px;
margin: 0 auto;

 /* animation: scrollRight 10s linear infinite; Adjust the duration and timing function as needed */





}
    


    
`

export const LeftSide = styled.div`
    & h1 {
        font-size: 50px;
        font-weight: 400;

        @media screen and (max-width: 320px) {
    font-size:17px ;
    font-weight: 400;

}

        @media screen and (max-width: 992px) {
    font-size:30px ;
    font-weight: 400;

}
    }


`

export const FooterBefore = styled.div`
& h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 400;  

        @media screen and (max-width: 320px) {
    font-size:22px ;
    font-weight: 400;

}

    @media screen and (min-width:321px) and (max-width:376px) {
    font-size:27px;
    font-weight: 400; 
}

    @media screen and (min-width:321px) and (max-width:476px) {
    font-size:30px ;
    font-weight: 400; 
}

}

& p {
    text-align: center;
    font-size: 20px;
    font-weight: 400;

      @media screen and (max-width: 320px) {
    font-size:17px ;
    font-weight: 400;

}


    
}
    

`


export const ReviewContent = styled.div`
margin: 10px;
box-shadow: 20px;
/* width: 300px; */
height: 500px;
/* box-shadow:10px 10px 95px rgba(0, 0, 0, 0.25); */
border: 1px solid #F2FAFB;

:hover {
    box-shadow: 11px 11px 11px #EBEBEB;
}

@media screen and (max-width:320px) {
    margin: 0 auto;
}

@media screen and  (max-width:768px) {
    margin: 0 auto;
}






& img{
width:100%;
}; 

& h2{
      padding: 15px 15px;
    text-align: center;
    color: #232323;

      @media screen and (max-width:320px) {
        padding: 15px;
        
    }
    
    @media screen and (min-width:321px) and (max-width:768px) {
        padding: 15px;
        
    }


    @media screen and (min-width:768px) and (max-width:1200px) {
        padding: 15px;
        
    }
};

& p{
      padding: 25px;
    color: #5A5A5A;
    text-align: center;
    align-items: center;

    @media screen and (max-width:320px) {
        padding: 30px;
        
    }
    
    @media screen and (min-width:321px) and (max-width:768px) {
        padding: 35px;
        
    }


    @media screen and (min-width:768px) and (max-width:1200px) {
        padding: 15px;
        
    }
}

`


export const Cards = styled.div`
display: flex;
  background-color: ${THEME.white}; 
  margin:10px;
  box-shadow: 7px 9px 37px 0px rgba(0, 0, 0, 0.03);
border-radius: 10px;
  height: 250px;
  color:var(--light-color);
  padding: 30px 15px;
  cursor:pointer;
  transition: all 0.5s;
  
  & svg{
      font-size: 35px;
      color:white;

  }
  & h1{
      font-size: 18px;
    padding: 0 10px;
    text-align: end;
    color:white;
  }
  & h2{
      font-size: 20px;
  }
  & p{
      font-size:13px;
  }
  & h4{
      font-size: 18px;
      padding:20px 0px;
      color:white;
  }
  &:hover {
    transform: translateY(-7px) scale(1.005) translateZ(0);
    /* box-shadow: 0 24px 36px rgba(0,0,0,0.11), */
      /* 0 24px 46px var(--box-shadow-color); */
      background-color:var(--light-color);
      & h4,h1,h2,p,svg{
          color: ${THEME.primary_color};  
      }
  }
  
  &:hover .overlay {
    transform: scale(4) translateZ(0);
  }
  
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0,0,0,0.11),
      0 15px 24px var(--box-shadow-color);
  }
  
  & h1 {
    z-index: 1;
    transition: color 0.3s ease-out;
  }
  .overlay {
    width: 276px;
    position: absolute; 
    height: 118px;
    border-radius: 50%;
    background: var(--bg-color);
    top: 70px;
    left: 50px;
    z-index: 0;
    transition: transform 4s ease-out;
  }
    
  `;

export const Review = styled.div`
  border: 1px solid black;
  max-width: 250px;
  height: 250px;
  

  `


export const HeadSlider = styled.div`
position: relative;
padding: 40px 50px;




@media only screen and (max-width: 1500px) {
   padding: 0px;
}



`

export const Carouselslider = styled(Carousel)`
height: 100%;
width: 90%;
margin: 30px 30px 0px 30px;
position: relative;


@media screen and (max-width:320px) {
    margin: 0 auto;
    
}



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

    @media screen and (min-width:320px) and (max-width:1000px) {
    /* margin: 0 auto; */

    display: none;   

}

}




`;


export const StyledImage = styled.div`
 height: 250px;
 width: 180px;

 & img{
   width: 80%;
   height:100%;
   padding:5px;
 }
`


export const StyledButtons = styled(Button)`
/* border: 1px solid #D00000; */
padding: 20px;
width: 200px;
margin:auto;
font-size:18px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
.whatsappicon{
color: #25D366;
font-size: 20px;
}

& span{
color: #D00000;
}


& div{
   display:flex;
   justify-content: center;
   align-items: center;
}
`


export const ClientStyle = styled.div`
margin-top: 60px;

`