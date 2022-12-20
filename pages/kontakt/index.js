import React from 'react'
import Head from 'components/Head'
import {
  wrapper,
  info,
  infoTitle,
  title,
  block,
  day,
  time,
  contactRow
} from './Contact.module.scss'
import { formWrapper, col, row } from 'pages/Form.module.scss'
import Location from 'components/UI/Icons/location.js'
import Phone from 'components/UI/Icons/phone.js'
import Mail from 'components/UI/Icons/mail.js'

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Kontakt Poliklinika Petrović Vrgorac</title>
        <meta
          name="description"
          content="Poliklinika Petrović sa sjedištem na Trgu Francuske republike 12, 10000 Vrgorac."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/kontakt"
        ></link>
        <meta name="keywords" content="neurolog, neurologija, eeg" />
        <meta property="og:title" content="Neurologija lokacija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Poliklinika Petrović sa sjedištem na Trgu Francuske republike 12, 10000 Vrgorac."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/kontakt"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <h1 className={title}>KONTAKT</h1>
          <div className={info}>
            <h3 className={infoTitle}>RADNO VRIJEME</h3>
            <div className={block}>
              <span className={day}>Pon - Pet</span>
              <span className={time}>6:30 - 21:00h</span>
            </div>
            <div className={block}>
              <span className={day}>Sub</span>
              <span className={time}>6.30 - 21:00h</span>
            </div>
            <div className={block}>
              <span className={day}>Ned</span>
              <span className={time}>Ne radimo</span>
            </div>
            <h3 className={infoTitle}>KONTAKT</h3>
            <div className={contactRow}>
              <Phone color={'#0e3151'} />
              <a href="tel:+38521674135">021 674 135</a>
            </div>
            <div className={contactRow}>
              <Mail color={'#0e3151'} />
              <a href="mailto:vrgorac@poliklinikapetrovic.com">
                vrgorac@poliklinikapetrovic.com
              </a>
            </div>
            <div className={contactRow}>
              <Location color={'#0e3151'} />
              <a href="http://maps.google.com/?q=12 Ulica Tina Ujevića 15, Vrgorac, Croatia, 10000">
                Ulica Tina Ujevića 15, Vrgorac
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt
