import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id= "footer">

        <div className="footer-content">

      <div className="footer-content-left">
        <img src={assets.logo}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus ratione repudiandae, perspiciatis non labore rerum corrupti culpa magni quos, reprehenderit facere fuga?</p>
        <div className="footer-social-icons">
        <img src={assets.facebook_icon}/>
        <img src={assets.twitter_icon}/>
        <img src={assets.linkedin_icon}/>
        </div>
         </div>

            <div className="footer-content-center">
         <h2>Company</h2>
         <ul>
            <li>Home</li>
            <li>About As</li>
            <li> Delivery</li>
            <li>Privacy policy</li>
         </ul>
            </div>

            <div className="footer-content-right">
    <h2>Get In Touch</h2>
    <ul>
        <li>+123-4567-890</li>
        <li>Connect@Tomoto.com</li>
        </ul>
            </div>

        </div>
        <hr/>
        <p className='footer-copyright'>
            copyright 2024 @ Tomoto.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer