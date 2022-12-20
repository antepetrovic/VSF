import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  wrapper,
  cjenikList,
  name,
  price
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { dermatologijaCjenik } from 'public/utils/dermatologija'

const DermatologijaCjenik = () => {
  return (
    <div>
      <Head>
        <title>Cjenik dermatoloških usluga</title>
        <meta
          name="description"
          content="Cjenik dermatoloških i veneroloških usluga koje se mogu obaviti u našoj Poliklinici."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr//dermatologija-i-venerologija/cjenik"
        ></link>
        <meta name="keywords" content="dermatologija" />
        <meta property="og:title" content="Dermatologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Cjenik dermatoloških i veneroloških usluga koje se mogu obaviti u našoj Poliklinici.."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/cjenik"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Cijenik dermatoloških usluga',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/cjenik',
              description:
                'Cjenik dermatoloških i veneroloških usluga koje se mogu obaviti u našoj Poliklinici.',
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
        />{' '}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Cjenik dermatoloških usluga',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/cjenik'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            title={'PRETRAGE'}
            list1={[
              {
                name: 'DERMATOLOGIJA I VENEROLOGIJA',
                url: '/dermatologija-i-venerologija'
              },
              {
                name: 'Dermatološki pregled',
                url: '/dermatologija-i-venerologija/dermatoloski-pregled'
              },
              {
                name: 'Uklanjanje bradavica krioterapijom',
                url: '/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom'
              },
              {
                name: 'Pregled madeža',
                url: '/dermatologija-i-venerologija/dermatoskopija-pregled-madeza'
              }
            ]}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                CJENIK DERMATOLOŠKIH i VENEROLOŠKIH USLUGA
              </h1>
              <ul className={cjenikList}>
                {dermatologijaCjenik.map((v, k) => (
                  <li key={k}>
                    <span>{v.name}</span>
                    <span>{v.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DermatologijaCjenik
