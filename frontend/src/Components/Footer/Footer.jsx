import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import footer_logo from '../Asserts/logo_big.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt=""/>
        <Link className="navbar-brand my-4" to="/" style={{fontSize:"26px"}}>AgesStore </Link>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    <div className="footer_social my-4" >
        <a href="https://www.instagram.com/in/monagaridilip"  className="footer_icon"><i className='bx bxl-instagram'></i></a>
        <a href="https://www.linkedin.com/in/monagaridilip"  className="footer_icon"><i className='bx bxl-linkedin'></i></a>
        <a href="https://twitter.com/DilipMonagari"  className="footer_icon"><i className='bx bxl-twitter'></i></a>
    </div>
    <hr />
    <p>&#169;2023 copyright all right reserved</p>
</footer>
  )
}

export default Footer
