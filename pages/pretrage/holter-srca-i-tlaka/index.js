import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  ul,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { kardiologijaPregledi } from 'public/utils/kardiologijaPregledi'
import { kardiologija } from 'public/utils/kardiologija'

const Holtersrca = () => {
  return (
    <div>
      <Head>
        <title>Holter ekg i tlaka u Vrgorac</title>
        <meta
          name="description"
          content="Holter srca služi za kontinuirano, 24-satno snimanje EKG-a. Holter tlaka je 24 satno snimanje arterijskog krvnog tlaka. Holter srca i tlaka provodi stručno medicinsko osoblje uz brze rezultate."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/holter-srca-i-tlaka"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, holter srca"
        />
        <meta property="og:title" content="EEG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Holter srca (ekg) provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/holter-srca-i-tlaka"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'holter srca',
              url: 'https://poliklinikapetrovic.hr/pretrage/holter-srca-i-tlaka',
              description:
                'Holter EKG je 24-satno kontinuirano praćenje i bilježenje aktivnosti srca za vrijeme uobičajenih dnevnih aktivnosti. Postupak je u potpunosti bezbolan.',
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
          <SidePicker
            list1={kardiologija}
            title={kardiologija[0].name}
          />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>
                  {kardiologijaPregledi[1].name}:
                </h1>
                <p className={text}>{kardiologijaPregledi[1].text}</p>
                <p className={text}>
                  {kardiologijaPregledi[1].text1}
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  {kardiologijaPregledi[2].name}:
                </h2>
                <p className={text}>{kardiologijaPregledi[2].text}</p>
                <p className={text}>
                  {kardiologijaPregledi[2].text1}
                </p>
                <ul className={ul}>
                  {kardiologijaPregledi[2].list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  CIJENA HOLTERA SRCA I TLAKA
                </h2>
                <p className={text}>
                  Cijena holtera srca iznosi 500 kn. Cijena holtera
                  tlaka iznosi 350 kn.
                </p>
              </div>
              <div className={imagesDiv}>
                <img
                  alt={kardiologijaPregledi[1].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={kardiologijaPregledi[1].name}
                  src={'../images/img8.jpg'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Holtersrca
