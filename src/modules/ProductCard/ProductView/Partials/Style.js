import styled from "styled-components";



export const ProductHead = styled.div`
margin: 20px;

.cartlist {
    padding: 30px 0px 0px 50px;
    font-size: 15px;
    top: 152px;
    color: #008A06;

    
    @media screen and (max-width:320px) {
        top:15px;
        left: 0px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
    padding: 30px 0px 0px 0px;



}

    
@media screen and (min-width:321px) and (max-width:768px) {
        top:15px;
        left: 0px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
    padding: 30px 0px 0px 0px;


}


}


.btncart {
    font-weight: 400;
    font-size:1rem;
    border-radius: 25px;
    top: 152px;
    left: 50px;
    &:hover {
        background-color: #0980bc !important;
    }

    @media screen and (max-width:320px) {
        top:15px;
        left: 0px;
        font-size: 0;

}

@media screen and (min-width:321px) and (max-width: 768px) {
    padding: 0px;
    top: 15px;
    left: 0px;
    text-align: center;

}

}

.productimg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 0px 50px;
    @media screen and (max-width:320px) {
        padding:0px;

}

@media screen and (min-width:321px) and (max-width: 426px) {
    padding: 0px;
}
}

.producttitle {
    font-weight: 500;
    font-size: 40px;
    padding:30px 0px 0px 50px;


    @media screen and (max-width:320px) {
        padding:0px;
        font-size: 22px;
}

@media screen and (min-width:321px) and (max-width: 426px) {
    padding: 0px;
    font-size: 29px;

}
}

& h3 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 400;
    padding:30px 0px 0px 50px;

   
    @media screen and (max-width:320px) {
        padding:0px;
        font-size: 17px;
}

@media screen and (min-width:321px) and (max-width: 426px) {
    padding: 0px;
    font-size: 29px;
}



}




`