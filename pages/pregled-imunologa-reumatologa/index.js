import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  ul,
  title,
  subwrapper,
  content,
  text
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { imunologReumatolog } from 'public/utils/imunologReumatolog'

const Imunologija = () => {
  return (
    <div>
      <Head>
        <title>
          Privatni pregled imunologa reumatologa | Vrgorac
        </title>
        <meta
          name="description"
          content="Naručite se na pregled imunologa reumatologa. Kako se liječi reumatoidni artritis? Postavljanje dijagnoze reumatoidnog artritisa."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pregled-imunologa-reumatologa"
        ></link>

        <meta
          property="og:title"
          content="pregled-imunologa-reumatologa"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Kako se liječi reumatoidni artritis? Postavljanje dijagnoze reumatoidnog artritisa."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pregled-imunologa-reumatologa"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pregled reumatologa imunologa',
              url: 'https://poliklinikapetrovic.hr/pregled-imunologa-reumatologa',
              description:
                'Naručite se na pregled imunologa reumatologa. Kako se liječi reumatoidni artritis? Postavljanje dijagnoze reumatoidnog artritisa.',
              provider: {
                '@type': 'MedicalBusiness',
                name: 'Poliklinika Petrović',
                image:
                  'https://poliklinikapetrovic.hr/images/img2.jpg',
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
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                pregled imunologa reumatologa:
              </h1>
              <p className={text}>
                Reumatološki pregled podrazumijeva pregled doktora
                specijalista reumatologije. U reumatološka oboljenja
                spadaju sve one bolesti koje se povezuju sa upalnim
                procesima u zglobovima, mišićima i koštanom
                sistemu.Među njima postoje različite vrste artritisa
                koje su mnogobrojne. Aritritis je ustvari termin koji
                se koristi za stanja koja utječu na vaše zglobove.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>
                Najčešća reumatološka oboljenja
              </h2>
              <ul className={ul}>
                <li>Reumatoidni artritis</li>
                <li>Artritis zglobova</li>
                <li>Behtereva bolest</li>
                <li>Reiterov sindrom</li>
                <li>psorijazni artritis</li>
                <li>FUO</li>
                <li>Autoimune bolestu</li>
                <li>GIHT</li>
                <li>Lupus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imunologija
