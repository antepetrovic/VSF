import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { neurologija, pretrage } from 'public/utils/neurologija'

const Emng = () => {
  return (
    <div>
      <Head>
        <title>EMNG ruku i nogu u Vrgoracu</title>
        <meta
          name="description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti EMNG ruku i nogu(donjih i gornjih ekstremiteta). Cijena pregleda je 500kn za EMNG ruku ili nogu. EMNG je dijagnostički postupak kojim se procjenjuje funkcija perifernog živčanog sustava, a uključuje aktivnosti mišića i živaca koji njima upravljaju."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/emng-ruku-i-nogu"
        ></link>
        <meta name="keywords" content="neurolog, neurologija, emng" />
        <meta property="og:title" content="EMNG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti EMNG ruku i nogu(donjih i gornjih ekstremiteta). Cijena pregleda je 500kn za EMNG ruku ili nogu. EMNG je dijagnostički postupak kojim se procjenjuje funkcija perifernog živčanog sustava, a uključuje aktivnosti mišića i živaca koji njima upravljaju."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/emng-ruku-i-nogu"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'EMNG',
              url: 'https://poliklinikapetrovic.hr/pretrage/emng-ruku-i-nogu',
              description:
                'U Poliklinici Petrović u Vrgoracu možete napraviti EMNG ruku i nogu(donjih i gornjih ekstremiteta). Cijena pregleda je 500kn za EMNG ruku ili nogu. EMNG je dijagnostički postupak kojim se procjenjuje funkcija perifernog živčanog sustava, a uključuje aktivnosti mišića i živaca koji njima upravljaju.',
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
              name: 'EMNG ruku i nogu',
              datePublished: '2022-11-16',
              url: 'https://poliklinikapetrovic.hr/pretrage/emng-ruku-i-nogu'
            })
          }}
        />
      </Head>

      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={neurologija} title={'EMNG'} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pretrage[0].name}:</h1>
              <p className={text}>
                U Vrgoracu u našoj Poliklinici napravite
                specijalistički neurološki pregledi,
                elektroencefalografija (EEG), te
                elektromioneurografija (EMNG) ruku i nogu. EMNG je
                dijagnostički postupak kojim se procjenjuje funkcija
                perifernog živčanog sustava, a uključuje aktivnosti
                mišića i živaca koji njima upravljaju. EMNG pretraga
                <b> sastoji se od dva dijela</b>: elektroneurografije
                i elektromiografije.
              </p>
              <p className={text}>
                <b>Elektroneurografija</b> je pretraga kojom se
                analizira funkcija perifernih živaca. Prema dobivenim
                rezultatima se određuje visina mjesta oštećenja i tip
                oštećenja perifernih živaca. <b>Elektromiografija</b>{' '}
                daje uvid u stanje mišića i pokazuje je li slabost i
                gubitak mišićne mase posljedica bolesti živaca (živci
                koji dolaze mišićima iz mozga i kralježničke moždine)
                ili je posljedica bolesti samog mišića. Pretraga se
                radi pomoću igle elektrode. Igla je vrlo tanka i oštra
                i ne izaziva neugodne bolne senzacije. Pacijenti
                trebaju znati da se prije same pretrage djelomično
                skidaju, to znači ekstremiteti (udovi) koji se
                ispituju moraju biti dostupni pregledu. Sama pretraga
                traje 15 do 40 minuta.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>{pretrage[0].subtitle1}:</h2>
              <p className={text}>{pretrage[0].text1}</p>
              <ul className={ul}>
                {pretrage[0].list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={title}>{pretrage[0].subtitle2}:</h2>
              <p className={text}>{pretrage[0].text2}</p>
            </div>
            <div className={content}>
              <h2 className={title}>{pretrage[0].subtitle3}:</h2>
              <p className={text}>{pretrage[0].text3}</p>
              <div className={imagesDiv}>
                <img
                  alt={pretrage[0].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={pretrage[0].subtitle3}
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

export default Emng
