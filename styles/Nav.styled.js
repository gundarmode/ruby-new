import styled from "styled-components"
import { MediaQueries } from "./MediaQueries"

export const NavStyled = styled.div `
    .main-nav {
        display:flex; justify-content:space-between; padding:50px; position:absolute; top:0; z-index:99; width:100%;
        &.active {
           
        }
        .logo {
            img {
                width:200px; cursor:pointer;
                @media(max-width:${MediaQueries.mediumDevices}) {
                    width:150px;
                }
                @media(max-width:${MediaQueries.smallDevices}) {
                    width:100px;
                }
            }
        }
        .nav-button{
            height:34px; width:40px;padding:0; display:flex; flex-direction:column; position:relative; border:none; border-bottom:3px solid #fff; background:none; cursor: pointer;z-index:2;transition:all ease .2s;
            &:before, &:after {
                content:"";width:40px; height:3px; display:block; top:0; position:absolute; background:#fff;transition:all ease .2s;
            }
            &:after {
                bottom:auto; top:auto; bottom:12px;
            }
          
            &.alt {
                border-color:#000;
                &::after, &:before {background:#000}
            }
            &.active {
                transform:rotate(90deg);
                /* &:before {
                   top:-100px; transition:all ease .2s;
                }
                &:after {
                    transform:rotate(-90deg)
                } */
                border-color:#fff;
                &::after, &:before {background:#fff}
            }
        }
    }
    .nav {
        position:absolute;top:0; right:0; background:rgba(0,0,0,0.8); z-index:1;transform:translate(200%); transition:all ease .2s; padding:40px;
        &.active{
             transform:translate(0); transition:all ease .2s;
        }
        li {
            &:before {display:none;}
        }
        .menu-title {
            color:#fff; font-size:24px; margin-bottom:30px;
        }
        button {
            background:none; border:none; cursor: pointer; color:#fff; font-size:24px; font-weight:700;
        }
        a {
            text-decoration:none; color:#fff;
            &:hover {
                color:#f5b800;
            }
        }
    }

    .side-buttons{
        position:relative;
        button {
            position:fixed;top:50%; transform:translateY(-50%);z-index:99; width:120px; height:100px; border:0; border-radius:50%;left:-20px; right:auto; padding:0 25px; text-align:center; cursor:pointer; background:rgba(0,0,0,.5); font-weight:700; font-size:21px; color:#fff;
            &:last-child {
                right:-20px; left:auto;padding:0 25px;
            }
            &:hover {
                transform:scale(1.1); transition:all ease .2s;
            }
        }
    }
    .bottom-nav {
        position:fixed; bottom:30px; left:50%; transform:translateX(-50%); display:flex;z-index:1;
        @media (max-width:${MediaQueries.xxLargeDevices}) {
            display:none;
        }
        .box {
            margin-right:20px;cursor: pointer; transition:all ease .2s;
            &:hover {
                transform:scale(1.1); transition:all ease .2s;
            }
        }
        img {
            border-radius:50%;
            width:100px;
        }
    }
`