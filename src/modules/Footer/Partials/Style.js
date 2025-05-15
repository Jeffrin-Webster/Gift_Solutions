// import styled from "styled-components";

import styled from "styled-components";


// export const StyledFooter = styled.div`
// margin-top: 200px;
// background-color: #380C93;
// color: #FFFFFF;
// padding: 50px 100px !important;
// /* & .CenterMe{
//     text-align: center;
// } */
// & .FontBig{
//     font-size: large;
// }
// & .ResponsiveIcons{
//     @media screen and (max-width: 768px) {
//         /* flex-direction: column;
//         width: 20px; */
//         display: none ;
//     }
// }
// /* & .IconAlign{
//     flex-direction: column;
//     width: 20px;
// } */
// `
// export const StyledFooterFirst = styled.div`
// padding: 0 !important;
// `
// export const StyledCopyRights = styled.div`
// margin-top: 100px;
// padding-bottom: 10px !important;
// @media screen and (max-width: 768px) {
//    margin-top: 0px !important;
//     }
// `



// ---------------------  NEW FOOTER



export const FooterSectionStyle = styled.div`
 /* background: linear-gradient(0deg, #513D82 -26.26%, #299A95 124.33%); */
 background: #380C93;
 color: white;
  /* color: #fff; */
  padding: 60px 50px;

  & h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }
  & h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  & p {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;


export const CopyRightFooter = styled.div`
  /* background: linear-gradient(0deg, rgba(41, 154, 149, 0.70) 0%, rgba(82, 59, 130, 0.70) 164.41%); */
  background: #380C93;
 color: white;
  /* color: #fff; */
  padding: 40px 50px;
  .footermedia{
   display: flex;
   gap: 10px;
  }
  /* @media screen and (min-width: 601px) and (max-width: 992px) {
   padding: 40px 50px;
  }
  @media screen and (max-width: 600px) {
   padding: 0px 5px;
  } */
`;

export const CopyWrightHolder = styled.div`
font-size:18px;
text-align: center;
  & a{
    font-size:20px;
    font-weight:800;
    color: white;
    transition:0.5s;
    text-decoration:none;
    
    &:hover{
      color:#000;
    font-weight:600;

    }
    @media screen and (max-width: 320px) {
      font-size: 11px;
      
    }
  }
`