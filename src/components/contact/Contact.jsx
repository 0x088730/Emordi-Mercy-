import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_npd3l6l', 'template_22jj107', form.current, 'bxRhbNd8P2qLl62zG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>emordichukwufumnanya@gmail.com</h5>
          <a href="mailto:emordichukwufumnanya@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          {/* <h5>09096772607</h5> */}
          <a href="https://api.whatsapp.com/send?phone+2349096772607">Send a message</a>
        </article>
      </div>

        <form ref={form} onSubmit={ sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='button'>Send Message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact
