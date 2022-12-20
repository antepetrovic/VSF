import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

const listaPregleda = [
  {
    name: 'URODINAMIKA',
    url: '/pretrage/urodinamika'
  },
  {
    name: 'MIKCIOMETRIJA',
    url: '/pretrage/urodinamika/mikciometrija'
  },
  {
    name: 'ELEKTROMIOGRAFIJA',
    url: '/pretrage/urodinamika/elektromiografija-sfinktera'
  }
]

const Elektromiografija = () => {
  return (
    <div>
      <Head>
        <title>Cistometrija pretraga | Poliklinika Petrović</title>
        <meta
          name="description"
          content="U Poliklinici Petrović napravite urodinamsku pretragu Cistometriju kojom se mjeri tlak u mokraćnom mjehuru
          tijekom mokrenja. Kroz mokraćnu cijev u mokraćni
          mjehur se uvodi kateter, a drugi kateter se
          postavlja u anus."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/urodinamika/cistometrija"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, urodinamika, cistometrija"
        />
        <meta property="og:title" content="cistometrija pretraga" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović napravite urodinamsku pretragu Cistometriju kojom se mjeri tlak u mokraćnom mjehuru
          tijekom mokrenja. Kroz mokraćnu cijev u mokraćni
          mjehur se uvodi kateter, a drugi kateter se
          postavlja u anus."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/urodinamika/cistometrija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Cistometrija',
              url: 'https://poliklinikapetrovic.hr/pretrage/urodinamika/cistometrija',
              description:
                'U Poliklinici Petrović napravite urodinamsku pretragu Cistometriju kojom se mjeri tlak u mokraćnom mjehuru tijekom mokrenja. Kroz mokraćnu cijev u mokraćni mjehur se uvodi kateter, a drugi kateter se postavlja u anus.',
              additionalType:
                'https://hr.wikipedia.org/wiki/Urinarna_inkontinencija',
              provider: {
                '@type': 'MedicalBusiness',
                name: 'Poliklinika Petrović',
                image:
                  'https://poliklinikapetrovic.hr/images/img1.jpg',
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
          <SidePicker list1={listaPregleda} title="UROLOGIJA" />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>Cistometrija</h1>
                <p className={text}>
                  Cistometrijom se mjeri tlak u mokraćnom mjehuru
                  tijekom mokrenja. Kroz mokraćnu cijev u mokraćni
                  mjehur se uvodi kateter, a drugi kateter se
                  postavlja u anus. Mjehur se nakon toga puni
                  fiziološkom otopinom 20-30 minuta. Tijekom punjenja
                  mjere se tlakovi u mokraćnom mjehuru i debelom
                  crijevo. Analizom prikupljenih podataka dobivamo
                  sljedeće informacije:
                </p>
                <ul className={ul}>
                  <li>Kapacitet mokraćnog mjehura</li>
                  <li>Kako pacijent kontrolira mjehur</li>
                  <li>Rastezljivost mjehura</li>
                </ul>
              </div>
              <div className={content}>
                <h2 className={subtitle}>CIJENA CISTOMETRIJE</h2>
                <p className={text}>
                  <b>Cijena</b> pretrage iznosi 600 kn.
                </p>
              </div>
              <div className={imagesDiv}>
                <img alt="urodinamika" src={'/images/img6.jpg'} />
                <img alt="cistometrija" src={'/images/img8.jpg'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elektromiografija
