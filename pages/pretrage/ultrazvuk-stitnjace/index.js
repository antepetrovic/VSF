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
import { pretrageList } from 'public/utils/ultrazvukColorDoppler'

const UltrazvukStitnjace = () => {
  return (
    <div>
      <Head>
        <title>Što je ultrazvuk štitnjače? Kada ga napraviti?</title>
        <meta
          name="description"
          content="Saznajte više o ultrazvuku štitnjače i naručite se na pregled. Kako se pripremiti za pregled, koje su prednosti i rizici ultrazvuka štitnjače."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-stitnjace"
        ></link>

        <meta name="keywords" content="ultrazvuk štitnjače" />
        <meta property="og:title" content="Ultrazvuk štitnjače" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Saznajte više o ultrazvuku štitnjače i naručite se na pregled. Kako se pripremiti za pregled, koje su prednosti i rizici ultrazvuka štitnjače."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-stitnjace"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk štitnjače',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-stitnjace',
              description:
                'Saznajte više o ultrazvuku štitnjače i naručite se na pregled. Kako se pripremiti za pregled, koje su prednosti i rizici ultrazvuka štitnjače.',
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
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>ULTRAZVUK ŠTITNJAČE</h1>
              <p className={text}>
                Ultrazvuk štitnjače koristi zvučne valove za stvaranje
                slike štitnjače unutar vrata. Ne koristi ionizirajuće
                zračenje i obično se koristi za procjenu kvržica ili
                čvorova pronađenih tijekom rutinskog fizičkog ili
                drugog slikovnog pregleda. Ovaj postupak ne zahtjeva
                posebn primjenu
              </p>
              <p className={text}>
                <b>
                  Ultrazvuk može vašem liječniku dati mnogo vrijednih
                  informacija, kao što su:
                </b>
              </p>
              <ul className={ul}>
                <li>
                  ako je izraslina ispunjena tekućinom ili je čvrsta
                </li>
                <li>broj izraslina</li>
                <li>gdje se nalaze izrasline</li>
                <li>dotok krvi u izraslinu</li>
                <li>ultrazvuk također može otkriti gušavost</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                ULTRAZVUK ŠTITNJAČE POMAŽE U OTKRIVANJU
              </h2>
              <p className={text}>
                Znanstvenici mogu koristiti ultrazvuk štitnjače za
                pomoć u otkrivanju širokog raspona stanja. Ultrazvuk
                štitnjače može pronaći dokaze za ili protiv sljedećih
                stanja:
              </p>
              <ul className={ul}>
                <li>
                  Guša: Oticanje štitnjače može proizvesti veliku
                  kvržicu u vratu ili grlu.
                </li>
                <li>
                  Gravesova bolest: Ova bolest je autoimuna bolest u
                  kojoj imunološki sustav napada zdrave stanice
                  štitnjače.
                </li>
                <li>
                  Limfom: Limfom je rak limfnog sustava, koji je dio
                  imunološkog sustava.
                </li>
                <li>
                  Rak štitnjače: Liječnici mogu koristiti ultrazvuk za
                  pronalaženje tumora na štitnjači
                </li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KADA SE KORISTI ULTRAZVUK ŠTITNJAČE
              </h2>
              <ul className={ul}>
                <li>
                  kako bi se utvrdilo proizlazi li kvržica na vratu iz
                  štitnjače ili susjedne strukture
                </li>
                <li>
                  kada treba analizirati izgled čvorova štitnjače i
                  utvrditi jesu li oni češći benigni čvorovi ili čvor
                  ima značajke koje zahtijevaju biopsiju. Ako je
                  potrebna biopsija, aspiracija tankom iglom vođena
                  ultrazvukom može pomoći u poboljšanju točnosti
                  biopsije.
                </li>
                <li>
                  da se provjeri je li čvor na štitnjači značajno
                  narastao tijekom vremena
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltrazvukStitnjace
