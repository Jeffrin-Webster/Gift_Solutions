import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Nunito Sans', sans-serif; 
        /* overflow-x: hidden; */
    } 
    html{
        scroll-behavior:smooth !important;
    }
   
    ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #1677ff; 
        cursor: pointer;
        border-radius: 10px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(3 108 255 / 43%);
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(3 108 255 / 43%);
        visibility: visible;
    }

`

export default GlobalStyle
