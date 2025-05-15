import styled from "styled-components";
import BrandPartner from '@assets/images/BrandPartner.png'
import brand_style from '@assets/images/brand_style.png'


export const Head = styled.div`
/* margin: 20px; */
background-color: #DE2F25;
border-radius: 43px;
padding: 1px;

.greyimg {
    width: 100%;
    padding: 1px;
    margin: 30px;
}

/* .valentinetitle {
    padding: 10px;
    font-size: 45px;
    font-weight: 400;
    color: white;

    @media screen and (min-width: 767px) and (max-width:800px) {
        font-size: 23px;
       
        
    }
}

.valentinepara {
    padding: 30px;
    font-size: 16px;
    font-weight: 400;
    color: white;

}*/

.shopnow {
    left: 28px;
    font-size: 18px;
    font-weight: 400;
    color: black !important;
    border-radius: 25px;

    &:hover {
      background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white !important;
      border-color: black !important;

    } 

}
    .valentinetitle {
    padding: 30px;
    font-size: 40px;
    font-weight: 400;
    color: white;
}

.valentinepara {
    padding: 30px;
    font-size: 16px;
    font-weight: 400;
    color: white;

}

/* .shopnow {
    padding: 30px;
    font-size: 18px;
    font-weight: 400;
    color: #380C93;

} */

@media screen and (max-width: 320px) {
    padding: 1px;

    .greyimg {
 display: none;
}
.valentinetitle{
 display: none;

}
.valentinepara{
    display: none;
}
.shopnow{
    display: none;
}

  }

 @media screen and (max-width: 767px) {
    .greyimg {
 display: none;
}
.valentinetitle{
 display: none;

}
.valentinepara{
    display: none;
}
.shopnow{
    display: none;
}
.valentine{
    display: none;
}
}




`


export const Brand = styled.div`
margin: 30px;
background-image: url(${brand_style});
/* object-fit: cover; */
/* width: 100%; */
border-radius: 12px, 12px, 0px, 0px;
padding: 50px;

& h1 {
    font-size: 50px;
    font-weight: 400;

    @media screen and (max-width: 376px) {
font-size: 31px;


  }
    

    
}



@media screen and (max-width: 376px) {
    padding: 10px;


  }




`

export const BrandCard = styled.div`
margin: 3px;
text-align: center;
border: 1px solid black;
border-radius: 9px;
/* height: auto; */


& img {
    width: 100%;
}

@media screen and (max-width: 376px) {
    & img {
    width: 100%;
}


  }


`

export const BrandCardImg = styled.div`
/* border: 1px solid black; */




`
