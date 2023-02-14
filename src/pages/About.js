import React from 'react'
import HAImg1 from '../images/aboutAbout.png'
import HAImg2 from '../images/adzoportfolio.jpg'
import HAImg3 from '../images/about2.png'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import BOOTSTRAP from '../images/boostrap.jpeg'
import JQUERY from '../images/jquery.png'
import JAVASCRIPT from '../images/javascript.png'
import REACT from '../images/react.png'
import NEXT from '../images/next.png'
import REDUX from '../images/redux.png'
import TAILWIND from '../images/tailwind.png'
import FIREBASE from '../images/firebase.png'
import AIRTABLE from '../images/airtable.png'
import STRAPI from '../images/strapi.png'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
const About = () => {
  return (
    <section className='section-center about'>
      <div className='container-about'>
        <article className='about-content'>
          <h3>about</h3>
          <p>
            Hello , my name is Adama Diouf. I am a passionate creative
            developer.😎 I was born in senegal.😎 currently I'm a
            freelancer.Please find out more
          </p>
        </article>
        <article className='about-img-first'>
          <img src={HAImg1} alt='' />
        </article>
      </div>
      <div className='about-myself'>
        <h3>Who I am</h3>
        <div className='about-myself-container'>
          <article className='about-myself-1'>
            <img src={HAImg2} alt='' />
            <h2>adama diouf</h2>
            <p>33 years old</p>
            <h4>developer</h4>
            <ul className='about-myself-links'>
              <li className='links-myself-f'>
                <a href=''>
                  <BsFacebook />
                </a>
              </li>
              <li className='links-myself-g'>
                <a href=''>
                  <BsGithub />
                </a>
              </li>
              <li className='links-myself-l'>
                <a href=''>
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </article>
          <article className='about-myself-2'>
            <p>
              I started studying engineering in March 2020.Since then I have
              been learning a lot of things every day to further my skills.I
              like to learn and try new things.I am a big fan of learning
              programing while making productions. I am proud to say that I
              always work hard and do my best to live up to expectations people
              have for me.😎
            </p>
          </article>
        </div>
      </div>
      <div className='about-who-im-container'>
        <article className='who-im-content'>
          <h3>How friends describe me</h3>
          <p>
            My friends would describe me as a creative, hard-working,passionate,
            motivated, reliable and highly productive.
          </p>
        </article>
        <article className='who-im-content'>
          <h3>What is my goal</h3>
          <p>
            My future goal is to be a great and capable creative developer
            working with clients from around the world.
          </p>
        </article>
      </div>
      <article className='who-im-img'>
        <img src={HAImg3} alt='' />
      </article>
      <div className='last-content-about'>
        <h3>I am on my way to be one of the best developers</h3>
        <p>
          Now I am making solid progress to be a good developer.I am always
          looking for new challenges.I keep on growing.
        </p>
      </div>
      <div className='skills'>
        <h3>skills</h3>
        <div className='skills-container'>
          <article>
            <h5>html5</h5>
            <img src={HTML} alt='' />
          </article>
          <article>
            <h5>css3</h5>
            <img src={CSS} alt='' />
          </article>
          <article>
            <h5>bootstrap</h5>
            <img src={BOOTSTRAP} alt='' />
          </article>
          <article>
            <h5>jquery</h5>
            <img src={JQUERY} alt='' />
          </article>
          <article>
            <h5>javascript</h5>
            <img src={JAVASCRIPT} alt='' />
          </article>
          <article>
            <h5>react</h5>
            <img src={REACT} alt='' />
          </article>
          <article>
            <h5>next js</h5>
            <img src={NEXT} alt='' />
          </article>
          <article>
            <h5>redux</h5>
            <img src={REDUX} alt='' />
          </article>
          <article>
            <h5>tailwind</h5>
            <img src={TAILWIND} alt='' />
          </article>
          <article>
            <h5>firebase</h5>
            <img src={FIREBASE} alt='' />
          </article>
          <article>
            <h5>strapi</h5>
            <img src={STRAPI} alt='' />
          </article>
          <article>
            <h5>airtable</h5>
            <img src={AIRTABLE} alt='' />
          </article>
        </div>
      </div>
    </section>
  )
}

export default About