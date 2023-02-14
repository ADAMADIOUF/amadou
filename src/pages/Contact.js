import React from 'react'

import { useMemo } from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'
import HAImg1 from '../images/contactt.png'
const Contact = () => {
  const {} = useLoadScript({googleMapsApiKey:""})
  return (
    <section className='section-center contact'>
      <div className='container-contact'>
        <article className='contact-info'>
          <h3>contact me</h3>
          <p>
            I'm interested in freelance opportunities-especially ambitious or
            large projects.However,if you have other request or question,don't
            hesitate to contact me😍
          </p>
          <form className='form'>
            <div className='input'>
              <h6>name</h6>
              <input type='text' className='input-form' />
            </div>
            <div className='input'>
              <h6>email</h6>
              <input type='email' className='input-form' />
            </div>
            <div className='input'>
              <h6>message</h6>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='input-form'
              ></textarea>
              <button className='btn-form'>send message</button>
            </div>
          </form>
        </article>
        <article>
          <img src={HAImg1} alt='' className='contact-img' />
        </article>
      </div>
    </section>
  )
}

export default Contact