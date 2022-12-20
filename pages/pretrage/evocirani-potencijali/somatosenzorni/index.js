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
  linkRed
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/evociraniPotencijali'

const Somatosenzorni = () => {
  return (
    <div>
      <Head>
        <title>Somatosenzorni evocirani potencijali - SSEP</title>
        <meta
          name="description"
          content="Somatosenzorni evocirani potencijali (SSEP) procjenjuju živčani put od ruku i nogu preko leđne moždine do mozga. SSEP se koriste za identificiranje ozljeda ili bolesti leđne moždine."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/somatosenzorni"
        ></link>
        <meta
          name="keywords"
          content="Somatosenzorni evocirani potencijali SSEP"
        />
        <meta
          property="og:title"
          content="somatosenzorni evocirani potencijali ssep"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Somatosenzorni evocirani potencijali (SSEP) procjenjuju živčani put od ruku i nogu preko leđne moždine do mozga. SSEP se koriste za identificiranje ozljeda ili bolesti leđne moždine."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/somatosenzorni"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Vidni evocirani potencijali VEP',
              url: 'https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/somatosenzorni',
              description:
                'Somatosenzorni evocirani potencijali (SSEP) procjenjuju živčani put od ruku i nogu preko leđne moždine do mozga. SSEP se koriste za identificiranje ozljeda ili bolesti leđne moždine.',
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
              name: 'Vidni evocirani potencijali VEP',
              datePublished: '2022-12-01',
              url: 'https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/somatosenzorni'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                Somatosenzorni evocirani potencijali - SSEP
              </h1>
              <p className={text}>
                Somatosenzorni evocirani potencijali (SSEP)
                procjenjuju živčani put od ruku i nogu preko leđne
                moždine do mozga. SSEP se koriste za identificiranje
                ozljeda ili bolesti leđne moždine. Somatosenzorni
                evocirani potencijali mjere električnu aktivnost u
                mozgu kao odgovor na stimulaciju vida, zvuka ili
                dodira.
              </p>
              <p className={text}>
                SSEP donjih ekstremiteta smatra se jednom od
                najvrjednijih metoda. Studije su pokazale da SSEP
                donjih ekstremiteta mogu otkriti oštećenje
                somatosenzornog sustava leđne moždine u čak 80%
                oboljelih od <b>multiple skleroze </b> bez
                odgovarajućih kliničkih simptoma.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                ŠTO ZNAČI LOŠ SOMATOSENZORNI NALAZ?
              </h2>
              <p className={text}>
                Značajna promjena u odgovorima somatosenzornog
                evociranog potencijala (SSEP) naznačena je smanjenjem
                amplitude i/ili povećanjem latencije. Abnormalnosti
                otkrivene SSEP-om ne daju specifičnu dijagnozu, već
                upućuju na poremećenu funkciju u tom određenom
                senzornom putu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Somatosenzorni
