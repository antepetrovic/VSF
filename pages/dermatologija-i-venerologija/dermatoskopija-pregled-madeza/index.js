import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { dermatologija, usluge } from 'public/utils/dermatologija'

const Dermatologija = () => {
  return (
    <div>
      <Head>
        <title>Dermatoskopija mladeža - pregled mladeža</title>
        <meta
          name="description"
          content="Pregledajte madež koji je naglo promijenio boju, oblik ili veličinu. Madeži koji su na vrijeme otkriveni imaju velik postotak izlječenja."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoskopija-pregled-madeza"
        ></link>
        <meta name="keywords" content="dermatologija" />
        <meta property="og:title" content="Dermatologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Pregledajte madež koji je naglo promijenio boju, oblik ili veličinu. Madeži koji su na vrijeme otkriveni imaju velik postotak izlječenja."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoskopija-pregled-madeza"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Dermatoskopija mladeža - pregled mladeža',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoskopija-pregled-madeza',
              description:
                'Pregledajte madež koji je naglo promijenio boju, oblik ili veličinu. Madeži koji su na vrijeme otkriveni imaju velik postotak izlječenja.',
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
              name: 'Pregled madeža',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoskopija-pregled-madeza'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            title={'PRETRAGE'}
            list1={[
              {
                name: 'Dermatologija',
                url: '/dermatologija-i-venerologija'
              },
              {
                name: 'Dermatološki pregled',
                url: '/dermatologija-i-venerologija/dermatoloski-pregled'
              },
              {
                name: 'Uklanjanje bradavica krioterapijom',
                url: '/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom'
              },
              {
                name: 'Cjenik dermatoloških usluga',
                url: '/dermatologija-i-venerologija/cjenik'
              }
            ]}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>DERMATOSKOPSKI PREGLED MADEŽA</h1>
              <p className={text}>
                U našoj Poliklinici možete napraviti{' '}
                <b>dermatoskopski </b>
                pregled madeža, odnosno mikroskopiju površine kože
                mikroskopskom metodom. Dermoskopija je neinvazivna
                dijagnostička tehnika koja služi kao pomoć u
                dijagnostici nekih oblika melanoma, pigmentnih i
                nepigmentovanih kožnih lezija.
              </p>
              <p className={text}>
                Točnost dijagnosticiranja melanoma „golim okom“ iznosi
                60%, a dermatoskopskim pregledom madeža, omogućeno je
                njegovo <b>otkrivanje u 90% slučajeva</b>.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                Kada je potrebno pregledati madež
              </h2>
              <p className={text}>Kada madež:</p>
              <ul className={ul}>
                <li>Promijeni boju</li>
                <li>Promijeni oblika</li>
                <li>Raste</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>RIZIČNE SKUPINE</h2>
              <p className={text}>
                Pacijenti koji se često trebaju obavljati dermatološki
                pregled:
              </p>
              <ul className={ul}>
                <li>
                  Pacijenti koji imaju velik broj madeža (više od 50)
                </li>
                <li>Pacijenti koji se često izlažu suncu</li>
                <li>
                  Pacijenti koji u obitelji imaju problema sa kožom
                  (karcinom)
                </li>
                <li>Pacijenti koji imaju oštećenja kože</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dermatologija
