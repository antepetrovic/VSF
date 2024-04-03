import Link from 'next/link'
import {
  CookieWrapper,
  CookieContent,
  Text,
  AcceptButton,
  DenieButton,
  Flex
} from './Cookie.module.scss'

const CookieBar = ({ onAccept, onDeny }) => {
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
        <div className={Flex}>
          <button
            id="consent-v2-accept"
            className={AcceptButton}
            onClick={onAccept}
          >
            DOPUSTI SVE
          </button>
          <button
            id="consent-v2-denied"
            className={DenieButton}
            onClick={onDeny}
          >
            USKRATI
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBar
