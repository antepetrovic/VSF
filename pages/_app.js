import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../style.scss'
import { visuallyHidden } from './Global.module.scss'
import MainHeader from 'components/MainHeader'
import Map from 'components/Map'
import Script from 'next/script'
import CookieBar from 'components/CookieBar'
import { useCookies } from 'react-cookie'

function MyApp({ Component, pageProps }) {
  const [decisionMade, setDecisionMade] = useState(false) // start with true to avoid flashing
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    if (cookies.CookieConsent !== undefined) {
      setDecisionMade(true)
    } else {
      setDecisionMade(false)
    }
  }, [cookies, setDecisionMade])

  const handleDecision = (outcome) => {
    setCookie('CookieConsent', true, {
      expires: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ),
      path: '/'
    })

    setDecisionMade(true)
  }

  const router = useRouter()

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NDBGHS8');`
            }}
          ></Script>
        </>
      )}
      <MainHeader>
        {router.pathname === '/' ? (
          <h1 className={visuallyHidden}>Poliklinika Petrović</h1>
        ) : (
          ''
        )}
      </MainHeader>
      <Component {...pageProps} />
      <Map />
      {decisionMade ? (
        <></>
      ) : (
        <CookieBar
          onAccept={() => {
            handleDecision()
          }}
          onDeny={() => {
            handleDecision()
          }}
        />
      )}
    </>
  )
}

export default MyApp
