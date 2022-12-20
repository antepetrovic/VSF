import Link from 'next/link'
import {
  CookieWrapper,
  CookieContent,
  Text,
  CloseButton
} from './Cookie.module.scss'

const CookieBar = ({ handleSetCookie }) => {
  return (
    <div className={CookieWrapper}>
      <div className={CookieContent}>
        <div className={Text}>
          {/* <CookieIcon /> */}
          <p>
            <span>
              Koristimo kolačiće radi pružanja najboljeg korisničkog
              iskustva. Pregledavanjem i korištenjem naše internet
              stranice slažete se s korištenjem kolačića u skladu s
              našim{' '}
            </span>
            <Link href={'/izjava-o-kolacicima'}>
              Pravila o korištenju kolačića
            </Link>
          </p>
        </div>
        <button className={CloseButton} onClick={handleSetCookie}>
          SLAŽEM SE
        </button>
      </div>
    </div>
  )
}

export default CookieBar
