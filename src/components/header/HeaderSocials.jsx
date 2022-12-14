import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mercy-emordi-2aa24a207/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/nordi482" target="_blank"><BsGithub/></a>
      <a href="https://www.behance.net/mercyemordi" target="_blank"><BsBehance/></a>

    </div>
  )
}

export default HeaderSocials
