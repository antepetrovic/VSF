import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { cover, noCover, box } from './MainHeader.module.scss'
import MainHeaderInfo from './MainHeaderInfo'
import { useRouter } from 'next/router'
import { headerServices } from 'public/utils/headerServices'

const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false
})

const breakpoint = 480

function MainHeader({ children }) {
  const router = useRouter()
  const [size, setSize] = useState(null)
  const [randomNumber, setNumber] = useState(0)

  useEffect(() => {
    setSize(window.innerWidth)
    setNumber(Math.floor(Math.random() * headerServices.length))
  })

  return (
    <div>
      {children}
      <MainHeaderInfo />
      {size > breakpoint ? <Navigation /> : null}
      {router.pathname === '/' && (
        <div className={cover}>
          <div className={box}>
            <span>{headerServices[randomNumber].title}</span>
            <p>{headerServices[randomNumber].text}</p>
            <a href={headerServices[randomNumber].link}>VIŠE</a>
          </div>
        </div>
      )}
      {router.pathname !== '/' && <div className={noCover}></div>}
    </div>
  )
}

export default MainHeader
