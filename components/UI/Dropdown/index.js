import React from 'react'
import Link from 'next/link'
import { ul } from './Dropdown.module.scss'

const Dropdown = ({ list }) => {
  return (
    <ul className={ul}>
      {list.map((item, index) => (
        <Link key={index} href={item.url}>
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default Dropdown
