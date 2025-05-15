import { THEME } from "@theme/index";
import { Card } from "antd";
import styled from "styled-components";

export const StyledObjectives = styled.div`
padding-top: 100px;
background: #FFFFFF;
.ant-row {
    gap:20px !important;
} 

`

export const ObjectiveCards = styled(Card)`

/* height:260px; */
width: 100%;
text-align: center;
background:${props=>props.bgColor};
border-radius:10px;
padding: 30px 20px 20px 10px;

:hover{
  box-shadow: 11px 11px 11px #EBEBEB;
}

& p{
    color:  #5A5A5A;
    text-align: center;
};

& h1{
    color:  #000000;
};

& img{
     align-items: center;
};

&.yelloww {
    background: yellow;
};

&.redd {
    background: red;
};

&.greenn {
    background: green;
    border: 10px solid black;
}



`


export const Container = styled.div`
  width: 100%;
  margin: 15px auto;
  padding-right: calc(${THEME.gutter_x} * 0.5);
  padding-left: calc(${THEME.gutter_x} * 0.5);

  @media ${THEME.MOBILEL} {
    max-width: 570px;
  }

  @media ${THEME.TABLET} {
    max-width: 758px;
  }

  @media ${THEME.LAPTOP} {
    max-width: 982px;
  }

  @media ${THEME.LAPTOPL} {
    max-width: 1190px;
  }

  @media ${THEME.DESKTOP} {
    max-width: 1390px;
  }

  @media ${THEME.DESKTOPL} {
    max-width: 1790px;
  }
`