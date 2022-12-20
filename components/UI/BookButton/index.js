import React from 'react'
import { link } from './BookButton.module.scss'

const BookButton = () => {
  return (
    <div className={link}>
      <a href={'/kontakt'}>NARUČITE SE</a>
    </div>
  )
}

export default BookButton
