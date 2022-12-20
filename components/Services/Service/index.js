import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  service,
  wrapper,
  textAboveTitle,
  serviceTitle
} from './Service.module.scss'
// import profilePic from 'public/service-images/img4.jpg'
// process.env.NODE_ENV === 'production' ? img : profilePic

function Service({ img, pathName, title, text }) {
  return (
    <div className={service}>
      <Image
        src={img}
        alt={pathName}
        layout="responsive"
        width={600}
        height={400}
      />
      <div className={wrapper}>
        <div className={textAboveTitle}>{'Djelatnosti'}</div>
        <Link href={`${pathName}`}>
          <h2 className={serviceTitle}>{title}</h2>
        </Link>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Service
