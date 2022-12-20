import React, { useState } from 'react'
import Link from 'next/link'
import Location from 'components/UI/Icons/location.js'
import Clock from 'components/UI/Icons/clock.js'
import Phone from 'components/UI/Icons/phone.js'
import Snake from 'components/UI/Icons/snake.js'
import {
  infoWrapper,
  info,
  hamburger,
  line,
  popup,
  companyName,
  list,
  show,
  socialWrapper,
  infoItem,
  first,
  second,
  text,
  indent
} from './Hamburger.module.scss'

const Hamburger = () => {
  const [active, setActive] = useState(false)

  return (
    <div
      onClick={() => setActive(!active)}
      className={`${hamburger}`}
    >
      <span className={line}></span>
      {active && (
        <div
          className={`${popup} ${active && show}`}
          onMouseLeave={active ? () => setActive(!active) : undefined}
        >
          <div>
            <div className={`${companyName} ${hamburger}`} />
          </div>
          <ul className={list}>
            <Link href="/">
              <li>
                <a>POČETNA</a>
              </li>
            </Link>
            <Link href="/pregledi">
              <li>
                <a>DJELATNOSTI</a>
              </li>
            </Link>
            <Link href="/pretrage">
              <li>
                <a>PRETRAGE</a>
              </li>
            </Link>
            <Link href="/brzi-antigenski-test-na-covid-19">
              <li>
                <a>ANTIGENSKO TESTIRANJE</a>
              </li>
            </Link>
            <Link href="/cjenik-usluga">
              <li>
                <a>CJENIK</a>
              </li>
            </Link>
            <Link href="/o-nama">
              <li>
                <a>O NAMA</a>
              </li>
            </Link>
            <Link href="/kontakt">
              <li>
                <a>KONTAKT</a>
              </li>
            </Link>
          </ul>
          <div className={socialWrapper}>
            {/* <a className={`${social} ${instagram}`} href={'https://www.instagram.com/poliklinikafalconperegrin/'} target='_blank' />
            <a className={social} href={'https://www.facebook.com/PoliklinikaFalconPeregrin'} target='_blank' /> */}
          </div>

          <div className={infoWrapper}>
            <div className={infoItem}>
              <Clock color={'#00b3cc'} />
              <div className={info}>
                <span className={`${text} ${first}`}>
                  Ponedjeljak - Petak: 6.30 - 21h
                </span>
                <span className={`${text} ${second}`}>
                  Subota: 8 - 15h
                </span>
              </div>
            </div>
            <div className={infoItem}>
              <Phone color={'#00b3cc'} />
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
              <Location color={'#00b3cc'} />
              <div className={info}>
                <a
                  className={`${text} ${first}`}
                  href="http://maps.google.com/?q=12 Ulica Tina Ujevića 15, Vrgorac, Croatia, 10000"
                >
                  Ulica Tina Ujevića 15
                </a>
                <span className={`${text} ${second}`}>Vrgorac</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hamburger
