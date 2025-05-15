import styled from "styled-components";



export const AboutHead = styled.div`
margin: 100px 0px;
gap: 10px;



& h1 {
    text-align: center;
    font-size: 64px;
    font-weight: 400;

    @media screen and (max-width:320px) {
        font-size:50px;
    font-weight: 400;
        
    }
}

& p {
    padding: 30px;
    font-size: 23px;

        @media screen and (max-width:320px) {
        font-size:17px;
        
    }

}

`
