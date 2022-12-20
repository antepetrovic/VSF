import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { urologija, urologijaPregledi } from 'public/utils/urologija'

const Transrektalni = () => {
  return (
    <div>
      <Head>
        <title>
          Transrektalni ultrazvuk prostate | Poliklinika Petrović
        </title>
        <meta
          name="description"
          content="U Poliklinici Petrović napravite transrektalni ultrazvuk prostate. Važnost UZV prostate u preventivi i ranom otkrivanju bolesti prostate i prije pojave simptoma."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/transrektalni-ultrazvuk"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, transrektalni ultrazvuk"
        />
        <meta property="og:title" content="Transrektalni ultrazvuk" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Važnost UZV prostate u preventivi i ranom otkrivanju bolesti prostate i prije pojave simptoma."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/transrektalni-ultrazvuk-prostate"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Transrektalni ultrazvuk prostate',
              url: 'https://poliklinikapetrovic.hr/pretrage/transrektalni-ultrazvuk-prostate',
              description:
                'U Poliklinici Petrović napravite transrektalni ultrazvuk prostate. Važnost UZV prostate u preventivi i ranom otkrivanju bolesti prostate i prije pojave simptoma.',
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
          <SidePicker list1={urologija} title={urologija[0].name} />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>
                  {urologijaPregledi[4].name}:
                </h1>
                <p className={text}>{urologijaPregledi[4].text}</p>
              </div>
              <div className={imagesDiv}>
                <img
                  alt={urologijaPregledi[4].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={urologijaPregledi[4].name}
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

export default Transrektalni
