import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  subtitle,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { kardiologija, pretrage } from 'public/utils/kardiologija'

const Ultrazvuk = () => {
  return (
    <div>
      <Head>
        <title>Ultrazvuk srca u Vrgoracu</title>
        <meta
          name="description"
          content="Napravite ultrazvuk srca kod naših stručnjaka, radiologa Tomislava Krpana i kardiologa Deana Strinića. Osim ultrazvuka možete obaviti kardiološki pregled i ergometriju."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-srca"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, ultrazvuk srca"
        />
        <meta property="og:title" content="EEG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ultrazvuk srca provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-srca"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk srca',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-srca',
              description:
                'Brza i kvalitetna dijagnostika. Bez čekanja. Nalazi isti dan. Saznajte više! Individualno vođenje. Prepoznatljiva kvaliteta. Vrhunski tim liječnika.',
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
              name: 'Ultrazvuk srca',
              datePublished: '2022-11-30',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-srca'
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
              <h1 className={title}>
                {pretrage.ultrazvukSrca.title}:
              </h1>
              <p className={text}> {pretrage.ultrazvukSrca.text}</p>
              <p className={text}> {pretrage.ultrazvukSrca.text1}</p>
              <ul className={ul}>
                {pretrage.ultrazvukSrca.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {pretrage.ultrazvukSrca.subtitle}:
              </h2>
              <p className={text}>{pretrage.ultrazvukSrca.text2}</p>
              <ul className={ul}>
                {pretrage.ultrazvukSrca.list1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={content}>
              <h2 className={subtitle}>
                {pretrage.ultrazvukSrca.subtitle3}:
              </h2>
              <p className={text}>{pretrage.ultrazvukSrca.text4}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {pretrage.ultrazvukSrca.subtitle2}:
              </h2>
              <p className={text}>{pretrage.ultrazvukSrca.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ultrazvuk
