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
    name: 'CISTOMETRIJA',
    url: '/pretrage/urodinamika/cistometrija'
  }
]

const Elektromiografija = () => {
  return (
    <div>
      <Head>
        <title>Mikciometrija pretraga u Vrgoracu</title>
        <meta
          name="description"
          content="U Poliklinici Petrović napravite urodinamsku pretragu Elektromiografiju sfinktera kojom mjerimo živčane
          impulse mišića mokraćnog mjehura i mokraćnoj cijevi.
          Pretraga nam otkriva povezanost neurološkog
          poremećaja sa problemom mokrenja."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/urodinamika/elektromiografija-sfinktera"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, urodinamika, elektromiografija-sfinktera"
        />
        <meta
          property="og:title"
          content="elektromiografija-sfinktera pretraga"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović napravite urodinamsku pretragu Elektromiografiju sfinktera kojom mjerimo živčane
          impulse mišića mokraćnog mjehura i mokraćnoj cijevi.
          Pretraga nam otkriva povezanost neurološkog
          poremećaja sa problemom mokrenja"
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/urodinamika/elektromiografija-sfinktera"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Elektromiografija sfinktera',
              url: 'https://poliklinikapetrovic.hr/pretrage/urodinamika/elektromiografija-sfinktera',
              description:
                'U Poliklinici Petrović napravite urodinamsku pretragu Elektromiografiju sfinktera kojom mjerimo živčane impulse mišića mokraćnog mjehura i mokraćnoj cijevi. Pretraga nam otkriva povezanost neurološkog poremećaja sa problemom mokrenja',
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
                <h1 className={title}>ELEKTROMIOGRAFIJA SFINKTERA</h1>
                <p className={text}>
                  Elektromiografija je pretraga kojom mjerimo živčane
                  impulse mišića mokraćnog mjehura i mokraćnoj cijevi.
                  Pretraga nam otkriva povezanost neurološkog
                  poremećaja sa problemom mokrenja.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  CIJENA ELEKTROMIOGRAFIJE SFINKTERA
                </h2>
                <p className={text}>
                  <b>Cijena</b> pretrage iznosi 1000 kn.
                </p>
              </div>
              <div className={imagesDiv}>
                <img alt="urodinamika" src={'/images/img6.jpg'} />
                <img
                  alt="elektromiografija-sfinktera"
                  src={'/images/img8.jpg'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elektromiografija
