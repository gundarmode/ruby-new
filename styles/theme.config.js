import {createGlobalStyle} from "styled-components";
import { MediaQueries } from "./MediaQueries";

export const lightTheme = {
    body: '#fffff',
    main: '#5C14DB',
    mainColor: '#FFFFFF',
    accent: '#E5DE17',
    accentColor: '#161616',
    secondary: '#FFFFFF',
    secondaryColor: '#343434',
    dullColor: '#343434',
    ternary: '#000000',
    codeColor: '#D121C5',
 }

export const GlobalStyles = createGlobalStyle `
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, strong, ul, li, form, br {margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: top;}
html {background: #fff; height: 100%;}
body {background:#fff; position: relative; color: #000; font-family: "Montserrat", sans-serif; -webkit-text-size-adjust: none; transition: transform ease .4s; overflow-x:hidden;}
sup {padding: 0; margin: 0; font-size: 90%; line-height: normal;}
a {text-decoration: none; color: #003fb8;text-decoration:underline;}
a:hover {color: #0e91f5; }
a img {border: none;}
input[type=text], input[type=password], textarea {background: #F3F3F3; border: 1px solid #EEE; padding: 6px 5px; font: normal 1em/16px "Open Sans", sans-serif; outline: none; border-radius: 0; transition: .3s all ease-in-out; color: #555; -webkit-appearance: none;}
*, *:before, *:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
li {list-style:none;}
sup {font-size: .65em;line-height: 0;}

h1,h2,h3,h4 {font-weight:700; letter-spacing:-1px;}

h1{font-size:60px;line-height:60px; margin-bottom:40px; }
h1:after {content:""; width:200px; height:2px; display:block; background: rgb(32,35,112);background: linear-gradient(90deg, rgba(32,35,112,1) 0%, rgba(236,0,140,1) 100%); margin-top:30px;}

h2 {font-size:30px;line-height:30px; margin-bottom:30px;}

@media (max-width:${MediaQueries.mediumDevices}) {
    h1 {font-size:30px;}
    h2 {font-size:24px;}
}

p {margin-bottom:30px; line-height:30px;}

.slide {
    transform:translateY(30px); opacity:0;
    &.active{
        opacity:1; transform:translateY(0); transition:all ease .5s;
    }
}

.col-half {
    width:50%;
    padding:10%;
    @media (max-width:${MediaQueries.xLargeDevices}) {
        padding:5%;
    }
}
.row {
    display:flex; width:100%
}

ul{
    margin-bottom:30px;
    li {
        margin-bottom:20px;
        list-style:none;
        &:before {
            content:"■"; width:10px;height:10px;display:inline-block; margin-right:10px;
        }
    }
}

section{
    background-size:contain; background-position:right bottom; background-repeat: no-repeat;
}

.btn {
    font-weight:700; display:inline-block;z-index:1; font-size:24px; border-radius:25px; padding:10px 25px; border:1px solid #fff; background:none; color:#fff; text-transform:uppercase; cursor: pointer; transition:all ease .2s; text-decoration:none;
    @media (max-width:${MediaQueries.xLargeDevices}) {
        font-size:18px;
    }
    &:hover {
        border-color:#f5b800; color:#f5b800; transition:all ease .2s;
    }
}

`