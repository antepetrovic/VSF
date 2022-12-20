import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import {
  pulmologija,
  pretrageList,
  pulmoloskiPregled
} from 'public/utils/pulmologija'

const PulmologijaAlergologija = () => {
  return (
    <div>
      <Head>
        <title>Pulmološki pregled Vrgorac</title>
        <meta
          name="description"
          content="Ako se lako umarate, imate kroničan kašalj, bol u prsima, kratak dah ili vrtoglavicu ogovorite naručite se na pulmološki pregled u našoj poliklinici."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pulmoloski-pregled"
        ></link>
        <meta
          name="keywords"
          content="alergija, alergologija, pulmologija, pluća, kronični, spirometrija, ventolinski test, bronhoskopija, alergološko, testiranje, pleuralna punkcija, oksimetar, kornelija, miše, pregled"
        />
        <meta
          property="og:title"
          content="Pulmologija alergologija | Poliklinika Petrović Vrgorac"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ako se lako umarate, imate kroničan kašalj, bol u prsima, kratak dah ili vrtoglavicu ogovorite naručite se na pulmološki pregled u našoj poliklinici."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pulmoloski-pregled"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pulmološki pregled',
              url: 'https://poliklinikapetrovic.hr/pulmoloski-pregled',
              description:
                'Ako se lako umarate, imate kroničan kašalj, bol u prsima, kratak dah ili vrtoglavicu ogovorite naručite se na pulmološki pregled u našoj poliklinici.',
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
              name: 'Pulmološki pregled (pregled pulmologa)',
              datePublished: '2022-11-15',
              url: 'https://poliklinikapetrovic.hr/pulmoloski-pregled'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            title={pulmologija[0].name}
            list1={pretrageList}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pulmoloskiPregled.title}:</h1>
              <p className={text}>{pulmoloskiPregled.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {pulmoloskiPregled.subtitle1}:
              </h2>
              <ul className={ul}>
                {pulmoloskiPregled.list1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {pulmoloskiPregled.subtitle2}:
              </h2>
              <p className={text}>{pulmoloskiPregled.text2}</p>
              <ul className={ul}>
                {pulmoloskiPregled.list2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {pulmoloskiPregled.subtitle3}:
              </h2>
              <p className={text}>{pulmoloskiPregled.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PulmologijaAlergologija
