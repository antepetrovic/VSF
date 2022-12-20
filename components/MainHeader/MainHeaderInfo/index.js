import React from 'react'
import {
  position,
  wrapper,
  social,
  info,
  text,
  first,
  second,
  infoItem,
  indent,
  time
} from './MainHeaderInfo.module.scss'
import Hamburger from 'components/UI/Hamburger'
import Location from 'components/UI/Icons/location.js'
import Clock from 'components/UI/Icons/clock.js'
import Phone from 'components/UI/Icons/phone.js'
import Facebook from 'components/UI/Icons/facebook.js'

function MainHeaderInfo() {
  return (
    <div className={wrapper}>
      <div className={position}>
        <a
          className={social}
          href={'https://www.facebook.com/PoliklinikaPetrovic'}
          target="_blank"
        >
          <Facebook />
        </a>
        <div className={`${infoItem} ${time}`}>
          <Clock />
          <div className={info}>
            <span className={`${text} ${first}`}>
              Ponedjeljak - Petak: 6.30 - 21h
            </span>
            <span className={`${text} ${second}`}>
              Subota: 6.30 - 21h
            </span>
          </div>
        </div>
        <div className={infoItem}>
          <Phone />
          <div className={info}>
            <div>
              <a
                className={`${text} ${first} ${indent}`}
                href="tel:+38521674135"
              >
                021 674 135
              </a>
            </div>
            <a
              className={`${text} ${second}`}
              href="mailto:vrgorac@poliklinikapetrovic.com"
            >
              vrgorac@poliklinikapetrovic.com
            </a>
          </div>
        </div>
        <div className={infoItem}>
          <Location />
          <div className={info}>
            <a
              className={`${text} ${first}`}
              href="http://maps.google.com/?q=12 Ulica Tina Ujevića 15, Vrgorac, Croatia, 21276"
            >
              Ulica Tina Ujevića 15
            </a>
            <span className={`${text} ${second}`}>Vrgorac</span>
          </div>
        </div>
        <Hamburger />
      </div>
    </div>
  )
}

export default MainHeaderInfo
