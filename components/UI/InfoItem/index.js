import React, { Fragment } from 'react'
import {
  infoItem,
  logo,
  info,
  text,
  first,
  second,
  time,
  location,
  contact,
  timeContainer,
  indent
} from './InfoItem.module.scss'

const InfoItem = (props) => {
  return (
    <div
      className={`${infoItem} ${
        props.type === 'time' && timeContainer
      }`}
    >
      <span
        className={`${logo} ${
          props.type === 'time'
            ? time
            : props.type === 'contact'
            ? contact
            : location
        }`}
      />
      <div className={info}>
        {props.type === 'time' && (
          <>
            <span className={`${text} ${first}`}>
              Ponedjeljak - Petak: 6.30 - 21h
            </span>
            <span className={`${text} ${second}`}>
              Subota: ne radimo
            </span>
          </>
        )}

        {props.type === 'contact' && (
          <>
            <div>
              <a
                className={`${text} ${first} ${indent}`}
                href="tel:+38521674135"
              >
                021 674 135
              </a>
              <a
                className={`${text} ${first} ${indent}`}
                href="tel:+38513702326"
              >
                01/3702-326
              </a>
            </div>
            <a
              className={`${text} ${second}`}
              href="mailto:vrgorac@poliklinikapetrovic.com"
            >
              vrgorac@poliklinikapetrovic.com
            </a>
          </>
        )}

        {props.type === 'location' && (
          <>
            <a className={`${text} ${first}`} href="#map">
              Ulica Tina Ujevića 15
            </a>
            <a className={`${text} ${second}`}>Vrgorac</a>
          </>
        )}
      </div>
    </div>
  )
}

export default InfoItem
