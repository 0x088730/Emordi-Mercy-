import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
              <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Can be counted on to figure it out and deliver</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing, building, and testing in an iterative way to learn and adapt</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Great communication & team skills </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Takes a holistic, systems-based approach</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Follow my design process thoroughly</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>I love beautiful aesthetics</p>
            </li>

            
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
              <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A problem-solvers, with a can-do attitude</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Self-evaluate along the way</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Great debugging skills</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>A passion for knowledge</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding and familiarity with common web development software</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ability to meet reasonable deadlines</p>
            </li>

            
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
              <h3>Marketing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Shows time management skills</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have good observational skills</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>learn new marketing strategies</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Being able to adapt to changing client needs</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating memorable customer experiences</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Setting clear and actionable goals</p>
            </li>

            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
