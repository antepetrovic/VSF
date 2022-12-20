import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle,
  ul,
  linkRed
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/ultrazvukColorDoppler'

const UltrazvukAbdomena = () => {
  return (
    <div>
      <Head>
        <title>
          Ultrazvuk abdomena i jetre - kada napraviti ultrazvuk
          abdomena?
        </title>
        <meta
          name="description"
          content="Napravite ultrazvučni pregled abdomena kako biste saznali imate li problema s jetrom ili žučnim kamencem."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-abdomena"
        ></link>
        <meta name="keywords" content="ultrazvuk abdomena" />
        <meta property="og:title" content="Ultrazvuk abdomena" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite ultrazvučni pregled abdomena kako biste saznali imate li problema s jetrom ili žučnim kamencem."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-abdomena"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk abdomena',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-abdomena',
              description:
                'Napravite ultrazvučni pregled abdomena kako biste saznali imate li problema s jetrom ili žučnim kamencem.',
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
        />{' '}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Ultrazvuk abdomena',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-abdomena'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>ULTRAZVUK ABDOMENA</h1>
              <p className={text}>
                Ultrazvuk abdomena provodi se radi utvrđivanja stanja
                unutarnjih organa trbušne šupljine, uključujući
                bubrege, jetru, žučni mjehur, slezenu, gušteraču,
                nadbubrežne žlijezde, mokraćni mjehur, prostatu,
                organe ženske zdjelice, velike trbušne krvne žile,
                uključujući aortu. te limfni čvorovi i crijeva.
              </p>

              <ul className={ul}>
                <li>
                  Ultrazvuk abdomena omogućuje nam otkrivanje tumora i
                  cista u organima
                </li>
                <li>
                  Dijagnosticiranje izvora boli na koju se pacijent
                  žali
                </li>
                <li>
                  Ultrazvučnim pregledom trbušne šupljine utvrđujemo
                  jesu li pojedini organi povećani
                </li>
                <li>Procjenjujemo izgled organa</li>
                <li>
                  U slučaju patologija – procjenjujemo stadij bolesti
                </li>
                <li>
                  Ultrazvuk abdomena nam može pomoći u
                  dijagnosticiranju ima li tekućine u tijelu i
                  abdomenu
                </li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KADA NAPRAVITI ULTRAZVUK ABDOMENA
              </h2>
              <ul className={ul}>
                <li>Povraćanje ili proljev</li>
                <li>Bol u abdomenu</li>
                <li>Sumnja na žučne kamence ili bubrežne kamence</li>
                <li>Otečen abdomen, povećan opseg abdomena</li>
                <li>Gubitak težine</li>
                <li>Poteškoće s mokrenjem i stolicom</li>
                <li>
                  Krvarenje iz urinarnog trakta, vaginalno krvarenje
                </li>
                <li>procjena progresije ili regresije bolesti</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>ULTRAZVUK ABDOMENA CIJENA</h2>
              <p className={text}>
                Cijena ultrazvuka je 500 kn. Ostale cijene možete
                pogledati{' '}
                <a className={linkRed} href={'/cjenik-usluga'}>
                  ovdje
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltrazvukAbdomena
