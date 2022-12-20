import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { list, link, sidePicker, active } from './style.module.scss'

const SidePicker = ({ list1 }) => {
  const { pathname } = useRouter()
  const { current } = useRef(pathname)

  const [rootUrl, setRootUrl] = useState('')
  useEffect(() => {
    setRootUrl(window.location.protocol + '//' + window.location.host)
  }, [])

  return (
    <div className={sidePicker}>
      <ul className={list}>
        {typeof list1 !== 'undefined' &&
          list1.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={rootUrl + item.url}
                  className={`${link} ${
                    current === item.url && active
                  }`}
                >
                  {item.name}
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default SidePicker
