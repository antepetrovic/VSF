import React, { useEffect, useState } from 'react'
import {
  wrapper,
  sidePicker,
  imageWrapper,
  title,
  name,
  contact,
  phone,
  divider
} from './style.module.scss'
import Book from 'components/UI/BookButton'
import Phone from 'components/UI/Icons/phone.js'
import Mail from 'components/UI/Icons/mail.js'
import Image from 'next/image'

const Doctor = ({ doctor }) => {
  return (
    <div className={sidePicker}>
      <div className={wrapper}>
        {doctor.imgUrl && (
          <div className={imageWrapper}>
            <img src={doctor.imgUrl} />
            <Image
              src={doctor.imgUrl}
              alt={'fotografija_doktora'}
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        )}
        <div>
          <h1 className={name}>{doctor.name}</h1>
          <h2 className={title}>{doctor.djelatnost}</h2>
          <div className={contact}>
            <Mail color={'#00b3cc'} />
            <a href="mailto:vrgorac@poliklinikapetrovic.com">
              vrgorac@poliklinikapetrovic.com
            </a>
          </div>

          <div className={contact}>
            <Phone color={'#00b3cc'} />
            <a href="tel:+38521674135">021 674 135</a>
          </div>
          <Book />
          <div className={divider}></div>
        </div>
      </div>
    </div>
  )
}

export default Doctor
