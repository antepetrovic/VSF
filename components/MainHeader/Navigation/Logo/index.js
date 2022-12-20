import React from 'react'
import { logo, companyName } from './Logo.module.scss'
import Snake from 'components/UI/Icons/snake.js'

function Logo() {
  return (
    <div id={'header-logo'} className={logo}>
      <Snake />
      <a className={companyName} href={'/'}>
        <p>POLIKLINIKA</p>
        <span>PETROVIĆ</span>
      </a>
    </div>
  )
}

export default Logo
