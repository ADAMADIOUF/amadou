import React from 'react'
import HImg1 from "../images/presentation1.png"
import HAImg1 from '../images/aboutme.png'
import HWImg1 from '../images/work.png'
import HCImg1 from '../images/contact.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='section-center home'>
      <div className='home-container'>
        <article className='home-content'>
          <h3>
            i keep on <span className='home-animate'>growing.</span>
          </h3>
          <p>
            Hello my name is Adama Diouf ,i am a front end developer. I was born
            in Senegal, West Africa.currently,i am based in Unites States,Minot
            north dakota.
          </p>
        </article>
        <article className='home-img'>
          <img src={HImg1} alt='' />
        </article>
      </div>
      <div className='home-working'>
        <div className='home-working-container'>
          <article className='home-working-content'>
            <h3>
              creative <span>c</span>
            </h3>
          </article>
          <article className='home-working-content'>
            <h3>
              hard-working <span>h</span>
            </h3>
          </article>
          <article className='home-working-content'>
            <h3>
              passionate <span>p</span>
            </h3>
          </article>
          <article className='home-working-content'>
            <h3>
              motivated <span>m</span>
            </h3>
          </article>
          <article className='home-working-content'>
            <h3>
              reliable <span>r</span>
            </h3>
          </article>
          <article className='home-working-content'>
            <h3>
              productive <span>p</span>
            </h3>
          </article>
        </div>
      </div>

      <div className='home-about'>
        <h3 className='about-animate'>about</h3>
        <div className='container-home-about'>
          <article className='home-about-img'>
            <img src={HAImg1} alt='' />
          </article>
          <article className='home-about-content'>
            <h3>Hi,my name is Adama Diouf.</h3>
            <p>
              I am a creative developer who has a great passion for learning
              engineering.😎 currently I'm a freelancer.Please find out more!
            </p>
            <h2>sections</h2>
            <p>who I am what I can do my thoughts</p>
            <Link to={`/about`}>
              <button  type='button' className='about-home-link'>about me</button>
            </Link>
          </article>
        </div>
      </div>

      <div className='home-work'>
        <h3>work</h3>
        <div className='home-work-container'>
          <article className='home-work-content'>
            <h3>i constantly make new productions</h3>
            <p>
              My work is steadly improving.🔥 I love learning a lot of things
              while making productions.Please find out more about my works.
            </p>
            <h2>about my works</h2>
            <p>website web application blog</p>
            <Link to={`/work`}>
              <button className='about-home-link'>view the work</button>
            </Link>
          </article>
          <article className='home-work-img'>
            <img src={HWImg1} alt='' />
          </article>
        </div>
      </div>
      <div className='home-contact'>
        <h3>contact</h3>
        <div className='container-home-contact'>
          <article className='home-contact-img'>
            <img src={HCImg1} alt='' />
          </article>
          <article className='home-contact-content'>
            <h3>Don't hesitate to contact me.</h3>
            <p>
              I am always waiting for a message from you.I would be so happy to
              hear from you for an interview and a possible job offer.Or you can
              just talk to me.😎
            </p>
            <h3>How you can contact me</h3>
            <p>contact form facebook</p>
            <Link to={`/contact`}>
              <button className='about-home-link'>contact me</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Home