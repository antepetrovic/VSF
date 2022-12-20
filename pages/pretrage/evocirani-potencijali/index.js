import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  ul,
  wrapper
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { pretrage } from 'public/utils/neurologija'
import { pretrageList } from 'public/utils/evociraniPotencijali'

const Evocirani = () => {
  return (
    <div>
      <Head>
        <title>Evocirani potencijali | Poliklinika Petrović</title>
        <meta
          name="description"
          content="U poliklinici obavljamo testiranje evociranih potencijala, somatosenzornih, audiotornih i vidnih. Evocirani potencijali se koriste u dijagnosticiranju multiple skleroze."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, evocirani potencijali"
        />
        <meta property="og:title" content="Neurologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U poliklinici obavljamo testiranje evociranih potencijala, somatosenzornih, audiotornih i vidnih."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Evocirani potencijali',
              url: 'https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali',
              description:
                'U poliklinici obavljamo testiranje evociranih potencijala, somatosenzornih, audiotornih i vidnih.',
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
              name: 'Evocirani potencijali',
              datePublished: '2022-12-01',
              url: 'https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pretrage[2].name}:</h1>
              <p className={text}>{pretrage[2].text}</p>
              <p className={text}>
                Posljednjih godina evocirani potencijali postaju sve
                važniji u dijagnostici multiple skleroze, što se jasno
                očituje u činjenici da su vidno izazvani evocirani
                potencijali uvršteni u nove kriterije za{' '}
                <b>dijagnosticiranje multiple skleroze</b>.
              </p>
              <p className={text}>
                Evocirani potencijali koje radimo:
              </p>
              <ul className={ul}>
                {pretrage[2].list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={text}>{pretrage[2].text1}</p>
              <p className={text}>{pretrage[2].text2}</p>
              <div className={imagesDiv}>
                <img
                  alt={pretrage[2].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={pretrage[2].name}
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

export default Evocirani
