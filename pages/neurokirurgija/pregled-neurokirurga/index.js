import React from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  wrapper,
  linkRed
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/neurologija'
import { neurokirurgijaPregled } from 'public/utils/neurokirurgija'

const PregledNeurokirurga = () => {
  return (
    <div>
      <Head>
        <title>
          Privatni pregled neurokirurga (neurokirurški pregled)
          Vrgorac
        </title>
        <meta
          name="description"
          content="Napravite privatni neurokirurški pregled za djecu i odrasle."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/neurokirurgija/pregled-neurokirurga"
        ></link>

        <meta name="keywords" content="neurokirurg" />
        <meta property="og:title" content="Neurokirurgija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite privatni neurokirurški pregled za djecu i odrasle."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/neurokirurgija/pregled-neurokirurga"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pregled neurokirurga',
              url: 'https://poliklinikapetrovic.hr/neurokirurgija/pregled-neurokirurga',
              description:
                'Napravite privatni neurokirurški pregled za djecu i odrasle.',
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
          <SidePicker title={'PRETRAGE'} list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                {neurokirurgijaPregled.subtitle1}:
              </h1>
              <p className={text}>
                {' '}
                Napravite privatni neurokirurški pregled za djecu i
                odrasle.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurokirurgijaPregled.subtitle2}:
              </h2>
              <p className={text}>{neurokirurgijaPregled.text2}:</p>
              <p className={text}>{neurokirurgijaPregled.source}:</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurokirurgijaPregled.subtitle3}
              </h2>
              <p className={text}>{neurokirurgijaPregled.text3}:</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {neurokirurgijaPregled.subtitle4}
              </h2>
              <p className={text}>{neurokirurgijaPregled.text4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PregledNeurokirurga
