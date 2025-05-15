import styled from "styled-components";


export const BannerStyleMain = styled.div`
 margin-top: 100px;
  background-color: #FEF5FF;
  position: relative;
  overflow: hidden;

  .enquiryhome {
    background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
    color: white;

    :hover {
      background: white;
      color: black;
    }

    .hwKQxC {
    border-width: 1px;
    display: flex;
    height: 40px;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    letter-spacing: 1px;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: 400;
    pointer-events: auto;
    background-color: rgb(255, 255, 255);
    border-color: rgb(40, 170, 235);
    transition: all 0.5s ease 0s;
    padding: 0px 15px !important;
    margin: 0px 15px 8px 0px !important;
color: white;
}
  }

  

  & h1 {
    text-align: center;
    font-size: 80px;
    padding-top: 20px;
  }

  & h2 {
    text-align: center;
    font-size: 80px;
    margin-top: -30px ;
  }

  & h4 {
    text-align: center;
    font-size: 20px;


  }
  & p {
    text-align: center;
    font-size: 35px;
    letter-spacing: 8px;
    /* padding: 10px 0 20px 0; */
  }
  .ant-btn-default{
    background-color: white !important;
    color: black;

    :hover{
     background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
     color: white;
}
  }
  .ant-btn {
    font-size: 14px;
    height: 42px;
    padding: 7px 25px;
    border-radius: 25px;
  } .bottomImg {
      display: flex;
      justify-content: center;
    & img {
      width: 320px;
    }
  } ;

  // Bottom to Top

  @keyframes moveImage {
  0% {
    top: 100%;
  }
  100% {
    top: -100%;
  }
}

// Top to bottom

@keyframes topImage {
  0% {
    top: -100%;
  }
  100% {
    top: 100%;
  }
}

  .leftImg1 {
    position: absolute;
    left: 0;
    top: 35%;
    animation: moveImage 10s linear infinite;
   & img {
      width: 400px;
      height: 600px;
      
    }
  }

  .starImg {
    position: absolute;
    left: 35%;
    top: 1%;
   
  }


    .leftImg2 {
    position: absolute;
    left: 5%;
    /* top: 25%; */
    top: 65%;
    animation: moveImage 10s linear infinite;

   & img {
      width: 400px;
      height: 300px;
    }

    
  };

  .leftImg8 {
    position: absolute;
    left: 4%;
    top: 60%;
    /* animation: moveImage 10s linear infinite; */

   & img {
      width: 200px;
      height: 150px;
    }
  };


  
   

  .leftImg3 {
    position: absolute;
    right: 5%;
    top: -15%;
    animation: topImage 8s linear infinite;

   & img {
      width: 600px;
      height: 650px;
    }
  }



  .leftImg4 {
    position: absolute;
    right: 0;
    top: 10%;
    animation: topImage 8s linear infinite;

   & img {
      width: 140px;
      height: 400px;
    }
  };
  .leftImg5{
    position: absolute;
    top: 55%;
    right:4%;
    & img {
      width: 600px;
      height: 650px;
    }
  }

  .leftImg6{
    position: absolute;
    top: 90%;
    right:0%;
    & img {
      width: 150px;
      height: 200px;
    }
  }


  .leftImg5{
    display: none;
  }
  .leftImg6{
    display: none;
  }

 
 

  .leftImg7{
    display: none;
  }

 
  & h3 {
    display: none;
  }

@media screen and (max-width: 1286px) and (min-width: 1010px){
  .bottomImg {
      display: flex;
      justify-content: center;
    & img {
      width: 320px;
    }
  } ;
  .leftImg1 {
    position: absolute;
    left: 0;
    top: -50px;
   & img {
      width: 300px;
      height: 500px;
    }
  }
  .leftImg2 {
    position: absolute;
    left: 2%;
    top: 25%;
   & img {
      width: 300px;
      height: 300px;
    }
  };
  .leftImg3 {
    position: absolute;
    right: 7%;
    top: -10%;
   & img {
      width: 400px;
      height: 450px;
    }
  }
  .leftImg4 {
    position: absolute;
    right: 0;
    top: 10%;
   & img {
      width: 120px;
      height: 350px;
    }
  };
  .leftImg5{
    position: absolute;
    top: 75%;
    right:10%;
    & img {
      width: 300px;
      height: 350px;
    }
  }
  .leftImg6{
    position: absolute;
    top: 90%;
    right:0%;
    & img {
      width: 100px;
      height: 140px;
    }
  }
  .leftImg7 {
    display: none;
  }

  .starImg{
    display: none;
  }

  .leftImg8 {
    display: none;
  }

}
@media screen and (max-width: 1010px) and (min-width: 768px){
  .bottomImg {
      display: flex;
      justify-content: center;
    & img {
      width: 320px;
    }
  } ;
  .leftImg1 {
    position: absolute;
    left: 0;
    top: -50px;
   & img {
      width: 400px;
      height: 600px;
    }
  }
  .leftImg2 {
   display: none;
  };
  .leftImg3 {
    display: none;
  }
  .leftImg7 {
    display: none;
  }
  .leftImg8 {
    display: none;
  }


  .leftImg4 {
    position: absolute;
    right: 0;
    top: 10%;
   & img {
      width: 150px;
      height: 350px;
    }
  };
  .leftImg5{
    display: none;
  }
  .leftImg6{
    display: none;
  }
  .starImg {
display: none;
   
  }
}
@media screen and (max-width: 767px) and (min-width: 690px){
  & h1 { display: none; }
  & h2 { display: none; }
  & h4 { display: none; }
  & p { display: none; }
  & h3 {
    display: block;
    text-align: center;
    padding: 140px 0 0 0;
    font-size: 50px;
    font-weight: 700;
    color: rgb(55 13 146);
  }
  .MobileRespn{
    display: none;
  }
  .bottomImg {
      display: flex;
      justify-content: right;
    & img {
      width: 320px;
      margin-top: -50px;
    }
  } ;
  .leftImg3 {
    position: absolute;
    left: -15%;
    top: -20%;
   & img {
      width: 450px;
      height: 500px;
    }
  }
  .leftImg2 {
   display: none;
  };
  .leftImg1 {
    display: none;
  }
  .leftImg4 {
   display: none;
  };
  .leftImg5{
    display: none;
  }
  .leftImg6{
    display: none;
  }
  .leftImg7{
    display: none;
  }
  .leftImg8 {
    display: none;
  }
  .starImg {
display: none;
   
  }
}
@media screen and (max-width: 691px) and (min-width: 507px){
  & h1 { display: none; }
  & h2 { display: none; }
  & h4 { display: none; }
  & p { display: none; }
  & h3 {
    display: block;
    text-align: center;
    padding: 140px 0 0 0;
    font-size: 40px;
    font-weight: 700;
    color: rgb(55 13 146);
  }
  .MobileRespn{
    display: none;
  }
  .bottomImg {
      display: flex;
      justify-content: right;
    & img {
      width: 220px;
      margin-top: -50px;
    }
  } ;
  .leftImg3 {
    position: absolute;
    left: -10%;
    top: 2%;
   & img {
      width: 250px;
      height: 250px;
    }
  }
  .leftImg2 {
   display: none;
  };
  .leftImg1 {
    display: none;
  }
  .leftImg4 {
   display: none;
  };
  .leftImg5{
    display: none;
  }
  .leftImg6{
    display: none;
  }
  .leftImg7{
    display: none;
  }
  .leftImg8 {
    display: none;
  }
  .starImg {
    display: none;
   
  }
}
@media screen and (max-width: 506px) and (min-width: 20px){
  & h1 { display: none; }
  & h2 { display: none; }
  & h4 { display: none; }
  & p { display: none; }
  & h3 {
    display: block;
    text-align: center;
    padding: 140px 0 0 0;
    font-size: 30px;
    font-weight: 700;
    color: rgb(55 13 146);
  }
  .MobileRespn{
    display: none;
  }
  .bottomImg {
      display: flex;
      justify-content: right;
    & img {
      width: 120px;
      padding-top: 20px;
    }
  } ;
  .leftImg3 {
    position: absolute;
    left: -15%;
    top: -15%;
   & img {
      width: 250px;
      height: 250px;
    }
  }
  .leftImg7 {
    position: absolute;
    left: 45%;
    /* top: 35%; */
    display: block;
    animation: topImage 8s linear infinite;
    /* z-index: 99px; */

   & img {
    width: 100px;
      height: 100px;
    }
  }
  .leftImg2 {
   display: none;
  };
  .leftImg1 {
    display: none;
  }
  .leftImg4 {
   display: none;
  };
  .leftImg5{
    display: none;
  }
  .leftImg6{
    display: none;
  }

  .starImg{
    display: none;
  }
  .leftImg8 {
    display: none;
  }
}
`