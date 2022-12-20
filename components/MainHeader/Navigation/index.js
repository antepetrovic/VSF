import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  position,
  wrapper,
  item,
  active,
  dropdown,
  first,
  last
} from './Navigation.module.scss'
import Dropdown from 'components/UI/Dropdown'
import Logo from './Logo'
import { listaPregleda } from 'public/utils/lista-pregleda'

function Navigation() {
  const router = useRouter()

  return (
    <div className={wrapper}>
      <div className={position}>
        <Logo />
        <Link href="/">
          <a
            className={`${item} ${first} ${
              router.pathname === '/' && active
            }`}
          >
            Početna
          </a>
        </Link>
        <Link href="/pregledi">
          <div className={[item, dropdown].join(' ')}>
            Djelatnosti
            <Dropdown list={listaPregleda} />
          </div>
        </Link>
        <Link href="/pretrage">
          <div className={[item, dropdown].join(' ')}>Pretrage</div>
        </Link>
        <Link href="/laboratorij">
          <div className={[item].join(' ')}>Laboratorij</div>
        </Link>
        <Link href="/brzi-antigenski-test-na-covid-19">
          <div className={[item, dropdown].join(' ')}>
            Antigensko testiranje
          </div>
        </Link>
        <Link href="/o-nama">
          <a className={item}>O nama</a>
        </Link>
        <Link href="/kontakt">
          <a className={[item, last].join(' ')}>Kontakt</a>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
