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

const UltrazvukMjehura = () => {
  return (
    <div>
      <Head>
        <title>
          Ultrazvuk mokraćnog mjehura: svrha, postupak i rezultati
        </title>
        <meta
          name="description"
          content="Napravite ultrazvuk mokraćnog mjehura ako imate krv u mokraći, otežano mokrenje, jak nagon za mokrenjem, bol tijekom mokrenja, problem s potpunim pražnjenjem mjehura."
        />
        <link
          rel="canonical"
          href="https://https://poliklinikapetrovic.com//pretrage/ultrazvuk-mokracnog-mjehura"
        ></link>
        <meta name="keywords" content="ultrazvuk mjehura" />
        <meta property="og:title" content="Ultrazvuk mjehura" />
        <meta
          property="og:image"
          content="https://https://poliklinikapetrovic.com//images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite ultrazvuk mokraćnog mjehura ako imate krv u mokraći, otežano mokrenje, jak nagon za mokrenjem, bol tijekom mokrenja, problem s potpunim pražnjenjem mjehura."
        />
        <meta
          property="og:url"
          content="https://https://poliklinikapetrovic.com//pretrage/ultrazvuk-mokracnog-mjehura"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk mokraćnog mjehura',
              url: 'https://https://poliklinikapetrovic.com//pretrage/ultrazvuk-mokracnog-mjehura',
              description:
                'Napravite ultrazvuk mokraćnog mjehura ako imate krv u mokraći, otežano mokrenje, jak nagon za mokrenjem, bol tijekom mokrenja, problem s potpunim pražnjenjem mjehura.',
              provider: {
                '@type': 'MedicalBusiness',
                name: 'Poliklinika Petrović',
                image:
                  'https://https://poliklinikapetrovic.com//images/img7.jpg',
                priceRange: 'By Appointment',
                telephone: '+38513776996',
                hasMap: 'https://goo.gl/maps/syAWnYFwxPS3qnq67',
                address: {
                  streetAddress: 'Trg Francuske republike 12',
                  addressLocality: 'Vrgorac',
                  addressRegion: 'Vrgorac',
                  postalCode: '10000',
                  addressCountry: 'HR'
                }
              }
            })
          }}
        />{' '}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Ultrazvuk mokracnog mjehura',
              datePublished: '2022-11-11',
              url: 'https://https://poliklinikapetrovic.com//pretrage/ultrazvuk-mokracnog-mjehura'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>ULTRAZVUK MOKRAĆNOG MJEHURA</h1>
              <p className={text}>
                Ultrazvuk mokraćnog mjehura radi se kada treba
                ispitati strukturu ili funkciju mjehura. Mokraćni
                mjehur je mišićna vrećica koja prima urin iz bubrega,
                rastežući se da zadrži tekućinu dok je ne ispustite
                tijekom mokrenja. Sposobnost da kontrolirate ove
                mišiće, čini mokrenje planiranim. Međutim, postoji
                mnogo problema koji mogu komplicirati proces mokrenja.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KADA NAPRAVITI ULTRAZVUK MOKRAĆNOG MJEHURA
              </h2>
              <p>
                Ako imate neki od sljedećih simptoma trebali biste
                napraviti ultrazvuk mokraćnog mjehura:
              </p>
              <ul className={ul}>
                <li>krv u mokraći</li>
                <li>otežano mokrenje</li>
                <li>bol tijekom mokrenja</li>
                <li>
                  problemi s potpunim pražnjenjem mokraćnog mjehura
                </li>
                <li>curenje mokraće</li>
                <li>iznenadni ili intenzivni nagoni za mokrenjem</li>

                <li>infekcija mokraćnog sustava</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                PRIPREME ZA ULTRAZVUK MJEHURA
              </h2>
              <p className={text}>
                Poželjno je imati pun mjehur tijekom ispitivanja.
                Lagan pritisak na pun mjehur može bili malo neugodan
                tijekom ispitivanja, ali može pomoći u pomicanju
                drugih organa kako bi se dobila jasna slika mjehura.
                Zvučni valovi bolje putuju kroz tekućine, tako da
                liječnik može dobiti bolju sliku kada te zrake putuju
                kroz pun mjehur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltrazvukMjehura
