import React from 'react'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import FooterStyle from './Footer.module.css'

export default function Footer(){
  return(
    <>
    <div className={FooterStyle.main}>
      <div >
      <h1>GYM</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, fugiat?</p>
      <a className={FooterStyle.links} style={{fontSize:"2em" ,color : "white"}} href='https://www.facebook.com/'><BsFacebook/></a>
      <a className={FooterStyle.links}  style={{fontSize:"2em" ,color : "white"}} href='https://www.instagram.com/'><BsInstagram/></a>
      <a  className={FooterStyle.links} style={{fontSize:"2em" ,color : "white"}} href='https://www.twitter.com/'><AiFillTwitterCircle/></a>
      </div>
      <div className={FooterStyle.griding}>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
      </div>
      </div>
      <div style={{display: "flex" , justifyContent : "center" ,border : "2px solid white " ,backgroundColor :"#9B2242" , color : "white"}}>
      <h3 >&copy;2023 All Rights Copy Reserved </h3>
      </div>
    </>
  )
}