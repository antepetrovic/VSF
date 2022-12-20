import React from 'react'
import {
  contact,
  text,
  title,
  wrapper,
  subWrapper
} from './ContactUs.module.scss'

function ContactUs() {
  return (
    <div className={contact}>
      <div className={wrapper}>
        <div className={subWrapper}>
          <p className={title}>Zainteresirani?</p>
          <h3 className={text}>
            KONTAKTIRAJTE NAS I DOGOVORITE SVOJ PREGLED
          </h3>
        </div>
        {/* <a className={link}>CONTACT US</a> */}
      </div>
    </div>
  )
}

export default ContactUs
