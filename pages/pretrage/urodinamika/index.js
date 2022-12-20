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
    name: 'MIKCIOMETRIJA',
    url: '/pretrage/urodinamika/mikciometrija'
  },
  {
    name: 'CISTOMETRIJA',
    url: '/pretrage/urodinamika/cistometrija'
  },
  {
    name: 'ELEKTROMIOGRAFIJA',
    url: '/pretrage/urodinamika/elektromiografija-sfinktera'
  }
]

const Urodinamika = () => {
  return (
    <div>
      <Head>
        <title>Urodinamika pretraga u Vrgoracu</title>
        <meta
          name="description"
          content="U Poliklinici Petrović napravite urodinamsko ispitivanje kojim se
          utvrđuju funkcije donjeg urotrakta (mokraćnog
          mjehura i mokraćne cijevi)."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/urodinamika"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, urodinamika"
        />
        <meta property="og:title" content="Urodinamika pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović napravite urodinamsko ispitivanje kojim se
          utvrđuju funkcije donjeg urotrakta (mokraćnog
          mjehura i mokraćne cijevi)."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/urodinamika"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Urodinamika',
              url: 'https://poliklinikapetrovic.hr/pretrage/urodinamika',
              description:
                'U Poliklinici Petrović napravite urodinamsko ispitivanje kojim se utvrđuju funkcije donjeg urotrakta (mokraćnog mjehura i mokraćne cijevi).',
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
                <h1 className={title}>URODINAMIKA</h1>
                <p className={text}>
                  Urodinamsko ispitivanje je skup pretraga kojima se
                  utvrđuju funkcije donjeg urotrakta (mokraćnog
                  mjehura i mokraćne cijevi). Urodinamika je zlatni
                  standard u otkrivanju poremećaja mokrenja. Metoda je
                  jednostavna, <b>neinvazivna</b>, jeftina i na
                  temelju nje se donosi odluka hoće se pacijent
                  izlagati nekim invazivnim pretragama.
                </p>
                <p className={text}>
                  Urodinamskim ispitivanjem dobivamo informacije o:
                </p>
                <ul className={ul}>
                  <li>Kapacitetu mokraćnog mjehura (Cistometrija)</li>
                  <li>
                    Tlaku i volumenu mokraćnog mjehura ( Cistometrija)
                  </li>
                  <li>
                    Protoku mlaza urina ( Mikciometrija ili uroflow )
                  </li>
                  <li>
                    Neurološkom poremećaju mokrenja (
                    Elektromiografija)
                  </li>
                </ul>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  Kako se izgleda urodinamski test?
                </h2>
                <p className={text}>
                  Od vas će se tražiti da se mokrite u posebnu opremu
                  koja će omogućiti mjerenje. Računalo se koristi za
                  automatsko mjerenje količine i protoka, stvarajući
                  grafikon koji prikazuje sve promjene. Rezultati
                  testa pokazat će imate li slabe mišiće mjehura ili
                  neku vrstu blokade.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  JE LI TESTIRANJE URODINAMIKOM BOLNO?
                </h2>
                <p className={text}>
                  Urodinamski test može biti nelagodan, osobito u
                  vrijeme umetanja, premještanja i uklanjanja katetera
                  mokraćnog mjehura (cijev umetnuta u mokraćni mjehur
                  kroz uretru).
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>MIKCIOMETRIJA</h2>
                <p className={text}>
                  Mikciometrijom (uroflow) se mjeri mlaz urina kod
                  pacijenta koji učestalo mokri, otežano mokri ili ima
                  problema sa inkontinencijom. Mikciometrijom dobivamo
                  uvid u funkciju mokraćnog mjehura i mokraćne cijevi.
                  Metoda je neinvazivna.
                </p>
                <p className={text}>
                  <b>Cijena</b> pretrage iznosi 300 kn.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>Cistometrija</h2>
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
                <p className={text}>
                  <b>Cijena</b> pretrage iznosi 600 kn.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  Elektromiografija sfinktera
                </h2>
                <p className={text}>
                  Elektromiografija je pretraga kojom mjerimo živčane
                  impulse mišića mokraćnog mjehura i mokraćnoj cijevi.
                  Pretraga nam otkriva povezanost neurološkog
                  poremećaja sa problemom mokrenja.
                </p>
                <p className={text}>
                  <b>Cijena</b> pretrage iznosi 1000 kn.
                </p>
              </div>
              <div className={imagesDiv}>
                <img alt="urodinamika" src={'../images/img6.jpg'} />
                <img alt="mikciometrija" src={'../images/img8.jpg'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Urodinamika
