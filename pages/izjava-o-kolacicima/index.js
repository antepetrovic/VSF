import React from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  smallFont,
  wrapper,
  marginTop
} from 'pages/Global.module.scss'
import { privacyPolicy } from 'public/utils/privacyPolicy'

const CookiesStatement = () => {
  return (
    <div>
      <Head>
        <title>Izjava o kolačićima</title>
        <meta
          name="description"
          content="Poliklinika Petrović za psihijatriju, neurologiju, otorinolaringologiju, kardiologiju i pulmologiju je moderna ustanova koja u svom radu uz individualni pristup koristi najmodernije uređaje i najnovije metode rada s pacijentima."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/izjava-o-kolacicima"
        ></link>

        <meta name="keywords" content="cookies" />
        <meta property="og:title" content="Izjava o kolačićima" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Poliklinika Petrović za psihijatriju, neurologiju, otorinolaringologiju, kardiologiju i pulmologiju je moderna ustanova koja u svom radu uz individualni pristup koristi najmodernije uređaje i najnovije metode rada s pacijentima."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/izjava-o-kolacicima"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Izjava o kolačićima',
              url: 'https://poliklinikapetrovic.hr/izjava-o-kolacicima',
              description:
                'Poliklinika Petrović za psihijatriju, neurologiju, otorinolaringologiju, kardiologiju i pulmologiju je moderna ustanova koja u svom radu uz individualni pristup koristi najmodernije uređaje i najnovije metode rada s pacijentima.',
              provider: {
                '@type': 'MedicalBusiness',
                name: 'Poliklinika Petrović',
                image:
                  'https://poliklinikapetrovic.hr/images/img7.jpg',
                priceRange: 'By Appointment',
                telephone: '+38513776996',
                hasMap: 'https://goo.gl/maps/syAWnYFwxPS3qnq67',
                address: {
                  streetAddress: 'Ulica Tina Ujevića 15',
                  addressLocality: 'Vrgorac',
                  addressRegion: 'Vrgorac',
                  postalCode: '10000',
                  addressCountry: 'HR'
                }
              }
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{privacyPolicy.title}</h1>
              <h2 className={`${subtitle} ${marginTop}`}>
                {privacyPolicy.section1.title}
              </h2>
              <p className={text}>{privacyPolicy.section1.text}</p>
            </div>
            <div className={content}>
              <h3 className={`${subtitle} ${smallFont}`}>
                {privacyPolicy.section1.subtitle1}
              </h3>
              <p className={text}>{privacyPolicy.section1.text1}</p>
            </div>
            <div className={content}>
              <h3 className={`${subtitle} ${smallFont}`}>
                {privacyPolicy.section1.subtitle2}
              </h3>
              <p className={text}>{privacyPolicy.section1.text2}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {privacyPolicy.section2.title}
              </h2>
              <p className={text}>{privacyPolicy.section2.text}</p>
              <p className={text}>{privacyPolicy.section2.text1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiesStatement
