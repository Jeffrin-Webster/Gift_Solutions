import { Card } from "antd";
import styled from "styled-components";

export const Main = styled.div`
text-align: center;
/* border: 1px solid black; */
max-width: 250px;


.productbtncart {
    border-radius: 50%;
}

.productbtnheart {
    border-radius: 50%;

}


`


export const CardMain = styled(Card)`
/* border: 1px solid grey; */
/* margin: 10px; */
/* max-width: 250px; */
padding: 50px 20px 50px 20px;
background-color: #F2FAFB;


:hover {
            box-shadow: 11px 11px 11px #EBEBEB;

}

@media screen and (max-width:320px) {
    padding: 0px;

     }

     @media screen and (min-width:321px) and (max-width:476px) {
    padding: 10px;

     }



& img {
    width: 100%;
    height: 300px;
    /* margin-bottom: 10px; */
    /* object-fit: cover; */
    @media screen and (max-width:320px) {
  object-fit:none;

     }

     @media screen and (min-width:321px) and (max-width:476px) {
    object-fit:none;

     }

}


`

export const LoveCards = styled.div`

 &.loading {
  filter: blur(20px);
  clip-path: inset(0);
}
&.loaded {
  filter: blur(0px);
  transition: filter 2s linear;
}



`

export const CardMainOne = styled.div`
width: 100%;
height: auto;
padding: 10px;
object-fit: cover;

& img {
    width: 100%;
    height: 300px;
    object-fit: cover;

}


 &.loading {
  filter: blur(20px);
  clip-path: inset(0);
}
&.loaded {
  filter: blur(0px);
  transition: filter 2s linear;
}



`