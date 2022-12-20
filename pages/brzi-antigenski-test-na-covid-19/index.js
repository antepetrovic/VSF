import React from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  wrapper,
  ul,
  center
} from 'pages/Global.module.scss'
import { formWrapper, col, row } from 'pages/Form.module.scss'
import SidePicker from 'components/UI/SidePicker'

const AntigenskiTest = () => {
  return (
    <div>
      <Head>
        <title>Brzi antigenski test na COVID-19 - Vrgorac</title>
        <meta
          name="description"
          content="Napravite brzi antigenski test (BAT) na covid-19 bez naručivanja. Rezultat antigenskog testiranja dobivate bez čekanja u elektroničkom ili papirnatom obliku"
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/brzi-antigenski-test-na-covid-19"
        ></link>

        <meta name="keywords" content="covid-19 testiranje" />
        <meta property="og:title" content="Covid-19 testiranje" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović možete napraviti testiranje na COVID-19 uz pomoć brzog antigenskog testa bez čekanja."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/brzi-antigenski-test-na-covid-19"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Brzi antigenski test na covid-19',
              url: 'https://poliklinikapetrovic.hr/brzi-antigenski-test-na-covid-19',
              description:
                'U Poliklinici Petrović možete napraviti testiranje na COVID-19 uz pomoć brzog antigenskog testa bez čekanja.',
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
        <div className={`${wrapper} ${center}`}>
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                Brzi Antigenski Test Na Covid-19
              </h1>
              <p className={text}>
                U Poliklinici Petrović možete obaviti testiranje na
                COVID-19 uz pomoć brzog antigenskog testa. Testiranje
                je odobreno od strane HZZO i nalazimo se na popisu{' '}
                <b>certificiranih laboratorija</b> koji provode
                testiranje na COVID-19. Testiranje se vrši uzimanjem
                brisa nosa koji je bezbolan i traje par sekundi. EU
                digitalnu potvrdu i nalaz možete dobiti na vaš email i
                u papirnatom obliku.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                CIJENA BRZOG ANTIGENSKOG TESTIRANJA
              </h2>
              <ul className={ul}>
                <li>
                  Cijena testiranje: <b>100 kn</b>
                </li>
                <li>
                  Cijena testiranje na dogovorenoj lokaciji:{' '}
                  <b>100 kn </b>( minimalno 10 testiranja )
                </li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>VAŽNO</h2>
              <p className={text}>
                Osobe koje imaju simptome i misle da bi mogle biti
                zaražene sa COVID-19 molimo da nas kontaktiraju prije
                dolaska kako bi bris uzeli ispred Poliklinike.
              </p>
              <p className={text}>Kontaktirati nas možete:</p>
              <ul className={ul}>
                <li>
                  <a
                    href={
                      'https://www.facebook.com/PoliklinikaPetrovic/'
                    }
                  >
                    Putem <b>Facebooka</b>
                  </a>
                </li>
                <a href="mailto:vrgorac@poliklinikapetrovic.com">
                  <li>
                    Mailom <b>vrgorac@poliklinikapetrovic.com</b>
                  </li>{' '}
                </a>
                <a href="tel:+38521674135">
                  <li>
                    Telefonom <b>021 674 135</b>
                  </li>
                </a>
              </ul>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>NARUČITE SE NA TESTIRANJE</h2>
              <ul className={ul}>
                <li>
                  Za testiranje je <b>potrebno naručiti se.</b>
                </li>
                <li>
                  Testiranja vršimo od{' '}
                  <b>ponedjeljka do četvrtka od 10:15 - 18:30h</b>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AntigenskiTest
