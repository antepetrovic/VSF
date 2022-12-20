import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { dermatologija, usluge } from 'public/utils/dermatologija'

const Dermatologija = () => {
  return (
    <div>
      <Head>
        <title>Dermatologija i venerologija Vrgorac</title>
        <meta
          name="description"
          content="Ako imate dermatološki problem koji ne možete riješiti i zadajte Vam brige, slobodno nam se obratite."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/dermatologija-i-venerologija"
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
          content="Ako imate dermatološki problem koji ne možete riješiti i zadajte Vam brige, slobodno nam se obratite."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/dermatologija-i-venerologija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pregled dermatologa',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija',
              description:
                'Ako imate dermatološki problem koji ne možete riješiti i zadajte Vam brige, slobodno nam se obratite.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Dermatologija i venerologija',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija'
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
                name: 'Dermatološki pregled',
                url: '/dermatologija-i-venerologija/dermatoloski-pregled'
              },
              {
                name: 'Pregled madeža',
                url: '/dermatologija-i-venerologija/dermatoskopija-pregled-madeza'
              },
              {
                name: 'Uklanjanje bradavica krioterapijom',
                url: '/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom'
              },
              {
                name: 'Cjenik dermatoloških usluga',
                url: '/dermatologija-i-venerologija/cjenik'
              }
            ]}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{dermatologija.title}:</h1>
              <p className={text}>{dermatologija.text}</p>
              <p className={text}>
                Liječenje bolesti kože može biti kompleksno zbog
                specifičnosti kože kao organa i interakcije s drugim
                organskim sustavima, stoga je u pristupu važno
                koristiti najmodernije spoznaje i znanstvene dokaze.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>Dermatološke usluge</h2>
              <ul className={ul}>
                {usluge.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dermatologija
