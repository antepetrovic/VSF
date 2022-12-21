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
  const [cookies, setCookie] = useCookies()
  const [showCookieBar, setShowCookieBar] = useState(false)

  const handleSetCookie = () => {
    const current = new Date()
    const nextYear = new Date()

    setCookie('cookieStatement', true, {
      expires: new Date(
        nextYear.setFullYear(current.getFullYear() + 1)
      ),
      path: '/'
    })
    setShowCookieBar(false)
  }

  useEffect(() => {
    if (!cookies.cookieStatement) {
      setShowCookieBar(true)
    }
  }, [])

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
      {showCookieBar && (
        <CookieBar handleSetCookie={handleSetCookie} />
      )}
    </>
  )
}

export default MyApp
