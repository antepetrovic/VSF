import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  subwrapper,
  content,
  text,
  title,
  ul,
  subtitle,
  wrapper
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import {
  neurološkiPregled,
  pretrageList
} from 'public/utils/neurologija'

const Neurologija = () => {
  return (
    <div>
      <Head>
        <title>Neurološki pregled (Pregled neurologa)</title>
        <meta
          name="description"
          content="Neurološki odjel naše poliklinike pruža dijagnostiku i liječenje poremećaja živčanog sustava. Naši neurolozi liječe poremećaje koji zahvaćaju mozak, leđnu moždinu i živce. Neurologija obuhvaća liječenja moždanog udara, epilepsije, neuromuskularnih poremećaja, poremećaj spavanja, liječenja boli ili poremećaja kretanja."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/neuroloski-pregled"
        ></link>

        <meta name="keywords" content="neurolog, neurologija, eeg" />
        <meta property="og:title" content="Neurologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Neurološki odjel naše poliklinike pruža dijagnostiku i liječenje poremećaja živčanog sustava. Naši neurolozi liječe poremećaje koji zahvaćaju mozak, leđnu moždinu i živce. Neurologija obuhvaća liječenja moždanog udara, epilepsije, neuromuskularnih poremećaja, poremećaj spavanja, liječenja boli ili poremećaja kretanja."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/neuroloski-pregled"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pregled neurologa',
              url: 'https://poliklinikapetrovic.hr/neuroloski-pregled',
              description:
                'Neurološki odjel naše poliklinike pruža dijagnostiku i liječenje poremećaja živčanog sustava. Naši neurolozi liječe poremećaje koji zahvaćaju mozak, leđnu moždinu i živce. Neurologija obuhvaća liječenja moždanog udara, epilepsije, neuromuskularnih poremećaja, poremećaj spavanja, liječenja boli ili poremećaja kretanja.',
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
              name: 'Neurološki pregled',
              datePublished: '2022-12-13',
              url: 'https://poliklinikapetrovic.hr/neuroloski-pregled'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker title={'PRETRAGE'} list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{neurološkiPregled.title}:</h1>
              <p className={text}>{neurološkiPregled.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurološkiPregled.subtitle1}:
              </h2>
              <ul className={ul}>
                {neurološkiPregled.list1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurološkiPregled.subtitle2}
              </h2>
              <p className={text}>{neurološkiPregled.text2}:</p>
              <ul className={ul}>
                {neurološkiPregled.list2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurološkiPregled.subtitle3}
              </h2>
              <ul className={ul}>
                {neurološkiPregled.list3.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                NEUROLOŠKI PROBLEMI NAKON PREBOLJENJA CORONA VIRUSA
              </h2>
              <p className={text}>
                Većina osoba koja su preboljele COVID-19 oporavi se
                unutar nekoliko tjedana. Procjenjuje se da do 30%
                preboljelih ima simptome nakon što je infekcija
                nestala. Post COVID simptomi mogu se dogoditi svima
                koji su imali COVID-19, čak i ako je bolest bila
                blaga.
              </p>
              <ul className={ul}>
                <li>GLAVOBOLJE I MIGRENE</li>
                <li>UTRNULOST - TRNCI</li>
                <li>POREMEĆAJ OKUSA ILI MIRISA</li>
                <li>VRTOGLAVICA</li>
                <li>BOL U MIŠIĆIMA</li>
                <li>PROBLEMI SA VIDOM</li>
                <li>ZUJANJE U UŠIMA</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurološkiPregled.subtitle4}
              </h2>
              <p className={text}>{neurološkiPregled.text4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Neurologija
