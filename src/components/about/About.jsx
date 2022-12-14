import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg.png'
import {FaAward} from 'react-icons/fa'
import {MdOutlineHandyman} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>2 years working</small>
              </article>

              <article className='about__card'>
                <MdOutlineHandyman className='about__icon'/>
                  <h5>Skills</h5>
                  <small>15+ tech skills</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>Amazing projects</small>
              </article>
              
            </div>

            <div className='about__p-btn'>
              <p className='about__p'>
              I'm an Abuja-based Multidisciplinary Designer and Frontend developer. I'm passionate about creating products that solve real problems for their users and crafting meaningful experiences.
              I understand how aesthetics impact user experience and perception. I’m enthusiastic and eager to contribute to team success through my hard work and attention to detail. I’m motivated to learn, grow and excel in the design industry.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
        </div>
      </div>
    </section>
  )
}

export default About
