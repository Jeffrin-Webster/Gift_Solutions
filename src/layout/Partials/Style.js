import { THEME } from '@theme/index';
import { Layout, Menu } from 'antd';
import styled from 'styled-components'


export const MainLayout = styled.section`
    min-height:100vh;
    display:flex;
    width:100%;
    overflow:hidden;
    transition:0.5s;
    /* overflow-y: hidden !important; */
`;
export const ImageProfile = styled.div`
    cursor: pointer;
    & img {
        width: 50px;
        margin: auto;
        border-radius: 50%;
    }
`

export const MenuImageProfile = styled.div`
    width:160px;
    height:160px;
    background:red; 
    position:relative;
    border-radius: 15px;
    overflow:hidden;
    margin-bottom:20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition:0.3s;

    & img {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &.active{
        width:50px;
        height:50px;
    }
`

export const MenuHolder = styled.div`
    height:calc(100vh - 380px);  // NO Img calc(100vh - 100)
    overflow:auto;
`

export const Profile = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 10px 0px;
    gap: 10px;
    padding: 5px 20px;
`

export const MenuText = styled.div`
    font-size: 16px;
    color: #545454;
    padding-left: 7px;
`

export const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    padding: 13px 21px;
    z-index: 999;
    & p {
        padding-left: 10px;
    }
`

export const NavTopDraw = styled.div`
    height: inherit;


    
    .ant-btn {
        border-radius: 0px !important;
    }

    .notify{
        cursor: pointer;
    }

 @media (min-width: 901px) {
    .DrawBtn {
      display: none;
    }
    .Btnresponsive{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px !important;
    }
  }

  @media (max-width: 901px){
    .DrawBtn{
        cursor: pointer;
        padding:5px;
    }

    .Btnresponsive {
        display:flex;
        align-items:center;
        gap: 15px !important;
    }
  }

  &.btnborder .icon {
    font-size: 3px;
    margin-right: 10px;
  }

`

export const SideMenuLayout = styled(Layout.Sider)`
  
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    @media (max-width:900px){
        display: none;
    }

    .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
        background-color: rgba(0,0,0,0.1);
        color: white;
    }
    .ant-btn {
        border-radius: 0px !important;
    }
    .anticon svg {
        font-size: 18px;
        color: #545454 !important;
    }
    .ant-layout .ant-layout-sider-children {
        background: #fff !important;

    }
    .ant-layout-sider-children {
        background: #fff !important;
        /* box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.08) */
        border-right: 1px solid #e8e8e8;
    }
    .ant-menu-dark {
        background: #fff !important;
    }

    .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):active {
        background-color: #e6f4ff;
        border-radius: 0% !important;
    }

    .ant-menu .ant-menu-item {
        border-radius: 0% !important;
        /* border-right: 1px solid; */
    }

    .ant-menu-light .ant-menu-item-selected {
        border-right: 2px solid !important;
    }

    .ant-menu-light .ant-menu-item:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected):hover {
        color: white !important;
    }
    .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover {
        background-color: transparent !important;
    }
    .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:hover {
        background-color: transparent !important;
    }
    .ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
        background-color: transparent !important;
    }
    .ant-menu-item .ant-menu-item-icon +span {
        margin-inline-start: 20px !important;
    }
    .ant-menu .ant-menu-submenu-title .ant-menu-item-icon +span {
        margin-inline-start: 20px !important;
    }

`


export const TopHeader = styled(Layout.Header)`
   height: 100px !important;
   box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.08) !important;
    background:${THEME.white};
    line-height:0;
`

export const BodyContent = styled(Layout.Content)`
    height: 80vh;
    overflow-y: auto;
& .ant-menu-item-icon {
    font-size: 20px !important;
}
& .ant-menu .ant-menu-item .ant-menu-item-icon {
    font-size: 20px !important;
}

@media (max-width:900px){
    & .ant-layout-content {
    width:100% !important;
    margin:0 !important;
   }
}

`

export const AntdStyledMenu = styled(Menu)`
    position: absolute !important;
    right: 3px;
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px !important; */
    .ant-dropdown-menu-item{
        padding:10px 12px !important;
        color: '#757575' !important;
    }
    .ant-dropdown-menu-item-icon {
        margin-inline-end: 16px !important;
    }
`

export const BtnProfile = styled.div`
margin: 0 10px;
padding: 9px;
display: flex;
color: black !important;
border-radius: 25px;
cursor: pointer;
align-items: center;
justify-content: flex-end;
padding-right: 20px;

& h1{
display: flex;
justify-content: flex-start;
font-weight: 600;
padding-right: 9px;
}

& svg{
    font-size:1.5rem;
    color:'#111827';
}

&:hover {
   background: #d9d9e75e;
}

& .header__icon{
    font-size: 26px;
    color:'white';
}

`

// ------------------------------------------------------ festive five ------------navbar




export const LogoPlace = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 40px;
  /* padding-left: 50px; */
  cursor: pointer;
  & img{
    width: 150px;
  }

   @media screen and (max-width: 376px) {
    margin: auto;
   }

   
  @media screen and (min-width:377px) and (max-width: 992px) {
    margin: auto;

  }
 
`;

export const TopNavBar = styled.nav`
position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 30px;
  color: #262626;
  position:sticky;
  top:0px;
  height: 100px;
  width: 100%;
  z-index: 999;
  position: fixed;
  transition: 1s ease-out !important ;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
  box-shadow: 0 4px 114.7px 0 rgba(206, 157, 212, 0.54);

  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
    color: #545454;
    font-size: 16px;
    padding: 0 60px 5px 0;
    /* border-bottom: 1px solid #545454 !important; */
}

a:-webkit-any-link:active {
    color: #0391df;
    /* padding: 0 0 5px 0; */
    /* border-bottom: 1px solid #545454 !important; */
}
a:-webkit-any-link:hover {
  color: #0391df;
    /* border-bottom: 1px solid #545454 !important; */
}
  &.sticky {
    position: fixed;
    transition: all 1s ease-out !important;
  }

  & button {
    font-weight: 400;
    font-size:1rem;
    border-radius: 25px;
    padding: 20px 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    float: left;
    margin-right:20px;
    border-color: black;
    color: black;
    top: 5px;
    &:hover {
      background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white;

    }

  }

  .btnstylesicon{
    
  }

  .btnstylesmobleicon {

    :hover {
      color: white !important;
    }
  }

  .btnstylesmoble {
    color: black !important;
    border-color: black !important;
    box-shadow: none !important;

    :hover {
      color: white !important;
    }
  }

  .whatsappbtnstylesicon{
    box-shadow: none !important;



    :hover {
      background-color:white;
    }




  
  }

.whatsapplogo{

}

.whatsapplogobtn{

}

.btnstylesicon{
    border-radius: 50%;

    

}



  @media screen and (max-width: 376px) {
    .btnstylesmoble {
      display: none;
  }

  .whatsappbtnstylesicon{
    display: none;
  }




  }

 @media screen and (max-width: 992px) {

    .whatsapplogo {
    display: none;
    
}

 }
  

  @media screen and (min-width:377px) and (max-width: 992px) {


.btnstylesicon {
    display: none;
}

.whatsappbtnstylesicon{
  display: none;
}

  }
  @media screen and (min-width: 992px) and (max-width: 2000px) {
    /* .MediaScreenshow {
      display: none;
  } */

  .btnstylesicon {
    display: none;
}
 
  }

 
`;

export const NavCollapse = styled.div`
  /* position: relative; */
  /* display: flex;
  flex-direction: row; */
  /* padding-right: 70px; */
  margin-left: 40px;


  & img {
    width: 29px;
  }

  & span {
    color: var(--white-color);
    text-decoration: none;
    font-weight: 400;
    padding: 10px 2px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: var(--brown-color);
      /* background: #252525; */
    }
    @media (max-width: 992px){
        color: #000;
    }
   
  }
  @media screen and (min-width: 1207px) and (max-width: 2900px){
        & span { padding: 10px 16px;}
    }
  @media screen and (max-width:992px) {
    position: absolute;
    display: ${(props) => props.State};
    flex-direction: column;
    padding:20px;
    gap: 0;
    width: 100%;
    top: 70px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    right: 0;
    background-color: #f3f8ff;

    & a {
      display: block;
      /* text-align: center; */
      font-size:20px;
      border-radius: 0;
      line-height: 2rem;
    }
  }

  .submenu {
    position: absolute;
    top: 85px;
    background-color: white;
    padding: 20px;
    width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  right: 2px;
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px); 
  background-color: rgba(255, 255, 255, 0.5); 
  /* flex-direction: center; */
  display: flex;
  justify-content: space-around;
  font-size: 16px;


  @media screen and (max-width:768px) {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    
  }
  }
  .submenu a {
  color: black;
  /* margin-top: 10px; */
  text-decoration: none;
  padding: 24px 35px;


}


/* .submenu a:hover {
  background-color: red;
} */
`;


export const Iconplace = styled.div`
  /* padding-right: 50px; */
  display: none;

  & svg {
    color: var(--white-color);
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width:992px) {
    display: flex;
  }
`;