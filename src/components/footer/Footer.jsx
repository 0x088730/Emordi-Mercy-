import React from 'react'
import './footer.css'
import {ImBehance2} from 'react-icons/im'
import {FaLinkedin} from 'react-icons/fa'
import {SiNotion} from 'react-icons/si'

const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>MercyE</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
     
            <a href="https://www.behance.net/mercyemordi"><ImBehance2/></a>
            <a href="https://www.linkedin.com/in/mercy-emordi-2aa24a207/"><FaLinkedin/></a>
            <a href="https://www.notion.so/Hey-I-m-Mercy-Emordi-9807f2a58ce64ccb823358f712ce97af"><SiNotion/></a>
    </div>

    <div className="footer__copyright">
      <small>2022, All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer
