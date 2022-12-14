import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'



const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Dubai Naija Foodie',
      demo: 'https://www.behance.net/gallery/158041007/Food-App'
    },

    {
      id: 2,
      image: IMG2,
      title: 'Nold Groceries',
      demo: 'https://www.behance.net/gallery/157882401/Nold-Groceries'
    },

    {
      id: 3,
      image: IMG3,
      title: 'Artlery',
      demo: 'https://www.behance.net/gallery/157997601/Artlery'
    },

    {
      id: 4,
      image: IMG4,
      title: 'CFT',
      string: 'https://www.behance.net/gallery/157796887/CFT', 
      demo: 'https://play.google.com/store/apps/details?id=com.frontendlabs.cft.androidApp'
    },

    {
      id: 5,
      image: IMG5,
      title: 'Workstedi',
      demo: 'https://www.workstedi.com/'
    },

    {
      id: 6,
      image: IMG6,
      title: 'Sladdrs',
      demo: 'https://play.google.com/store/apps/details?id=com.sladdrs.android'
    },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,  title, string, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__link'>
              <a href={string}  target='_blank'>Case Study</a>
              <a href={demo}  target='_blank'>Live</a>
              </div>
        </article>
            )
          })
        }

        

        {/* <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
              </div>
              <h3>Nold Groceries</h3>
              <a href="https://www.behance.net/gallery/157882401/Nold-Groceries" target='_blank'>Case Study</a>
        </article>

        <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
              </div>
              <h3>Artlery</h3>
              <a href="https://www.behance.net/gallery/157997601/Artlery"  target='_blank'>Case Study</a>
        </article>

        <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
              </div>
              <h3>CFT</h3>
              <div className='portfolio__link'>
              <a href="https://www.behance.net/gallery/157796887/CFT" target='_blank'>Case Study</a>
              <a href="https://play.google.com/store/apps/details?id=com.frontendlabs.cft.androidApp"  target='_blank'>Live</a>
              </div>
        </article>

        <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
              </div>
              <h3>Workstedi</h3>
             
              
              <a href="https://www.workstedi.com/"target='_blank'>Live</a>
              
        </article>

        <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
              </div>
              <h3>Sladdrs</h3>
              
                <a href="https://play.google.com/store/apps/details?id=com.sladdrs.android"  target='_blank'>Live</a>
              
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
