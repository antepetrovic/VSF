import React from 'react'
import Head from 'components/Head'

import {
  subwrapper,
  content,
  text,
  title,
  subtitle,
  marginTop,
  wrapper,
  linkRed
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/neurologija'
import { pregledPsihijatra } from 'public/utils/psihijatrija'

const Psihijatrija = () => {
  return (
    <div>
      <Head>
        <title>
          Pregled psihijatra (psihijatrijski pregled) Vrgorac
        </title>
        <meta
          name="description"
          content="Napravite privatni psihijatrijski pregled u Poliklinici Petrović. Psihijatrijske preglede u našoj Poliklinici obavlja iskusni psihijatar dr. Živko Malnar. Psihijatrijski pregled se odvija kroz ugodan razgovor sa psihijatrom. Razgovora nije vremenski ograničen, već traje koliko to zahtijeva situacija."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pregled-psihijatra"
        ></link>

        <meta name="keywords" content="neurokirurg" />
        <meta property="og:title" content="Pregled psihijatra" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite privatni psihijatrijski pregled u Poliklinici Petrović. Psihijatrijske preglede u našoj Poliklinici obavlja iskusni psihijatar dr. Živko Malnar. Psihijatrijski pregled se odvija kroz razgovor sa psihijatrom. Razgovora nije vremenski ograničen, već traje koliko to zahtijeva situacija."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pregled-psihijatra"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType:
                'Pregled psihijatra (psihijatrijski pregled)',
              url: 'https://poliklinikapetrovic.hr/pregled-psihijatra',
              description:
                'Napravite privatni psihijatrijski pregled u Poliklinici Petrović. Psihijatrijske preglede u našoj Poliklinici obavlja iskusni psihijatar dr. Živko Malnar. Psihijatrijski pregled se odvija kroz razgovor sa psihijatrom. Razgovora nije vremenski ograničen, već traje koliko to zahtijeva situacija.',
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
              name: 'Pregled psihijatra (psihijatrijski pregled)',
              datePublished: '2022-11-15',
              url: 'https://poliklinikapetrovic.hr/pregled-psihijatra'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker title={'PRETRAGE'} list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pregledPsihijatra.title}</h1>
              {/* <p>
                Psihijatrijske preglede u našoj Poliklinici obavlja
                iskusni psihijatar{' '}
                <a
                  className={linkRed}
                  href={'/doktori/psihijatar/zivko-malnar'}
                >
                  dr. Živko Malnar
                </a>{' '}
              </p> */}
              <h2 className={`${subtitle} ${marginTop}`}>
                PRVI RAZGOVOR SA PSIHIJATROM
              </h2>
              <p className={text}>
                Strah od prvog razgovora s psihijatrom sasvim je
                normalan. Stručnjaci za mentalno zdravlje to čak
                očekuju - i ne moraju nužno obeshrabriti. Treba vas
                pohvaliti za spremnost i snagu koja je potrebna da
                pristupite ovom često izbjegavanom, važnom dijelu
                vašeg života. Spremni ste se usredotočiti na brigu o
                sebi i istraživanje.
              </p>
              <p className={text}>
                Ovdje vas pripremamo za prvi razgovor sa psihijatrom.
                Podijelit ćemo sve što trebate znati o tome kako
                razgovarati sa psihijatrom, kako se trebate pripremiti
                za prve konzultacije i posjete.
              </p>
              <h2 className={`${subtitle} ${marginTop}`}>
                TREMA PRIJE RAGOVORA SA PSIHIJATROM
              </h2>
              <p className={text}>
                Nemojte dopustiti da zbog zabrinutosti ili treme
                otkažete ili se ne pojavite na terminu. Donijeli ste
                odluku potražiti liječenje mentalnog zdravlja jer neki
                dio vas razumije da vam je potrebna pomoć. Podsjetite
                se: traženje psihijatrijske pomoći nije slabost. Biti
                nervozan oko poduzimanja ovog prvog koraka zapravo je
                snaga.
              </p>
              <p className={text}>
                Mnogi ljudi provode godine duboko u sebi znajući da
                samo trebaju pomoć nekoga tko ih može razumjeti bez
                osuđivanja. Znati kada posjetiti psihijatra važno je
                za poduzimanje radnji prema izlječenju. Psihijatri su
                obučeni i vješti u pružanju kliničkih dijagnoza i
                ponudi liječenja lijekovima za liječenje raznih stanja
                mentalnog zdravlja.
              </p>
              <p className={text}>
                Tjeskoba oko vašeg prvog pregleda kod psihijatra
                potpuno je normalna. Većina ljudi će vam reći da su i
                prije prvog posjeta imali barem malo živaca. Zato se
                pokušajte opustiti i zapamtite da je vaš psihijatar tu
                da vam pomogne.
              </p>
              <h2 className={`${subtitle} ${marginTop}`}>
                ŠTO OČEKIVATI OD RAZGOVORA
              </h2>
              <p className={text}>
                Za liječenje je potrebno vrijeme. Vaš psihijatar možda
                neće dobiti savršen plan liječenja kada ga prvi put
                vidite. Međutim, zajedno možete pronaći plan koji
                funkcionira. Nije uvijek lako, a psihijatri nisu
                čudotvorci, ali zajedno možete pronaći plan koji je
                najučinkovitiji u liječenju vašeg stanja. Pronađite
                liječnika s kojim možete biti sami i s kojim se
                osjećati ugodno. Istina je da možda nećete vidjeti
                rezultate prvog dana, ali trebali biste se osjećati
                kao da razgovarate sa psihijatrom s kojim se možete
                poistovjetiti i kojemu možete vjerovati.
              </p>
            </div>
            <div className={content}>
              <h2 className={`${subtitle} ${marginTop}`}>
                Kako se pripremiti za pregled
              </h2>
              <p className={text}>
                Potrebno je ponijeti medicinsku dokumentaciju sa
                prijašnjeg liječenja ako ga je bilo i popis lijekova
                koje pacijent uzima. Želite da vaš prvi sastanak s
                novim psihijatrom bude što produktivniji. Da biste to
                postigli, razmislite o razlozima odlaska kod
                psihijatra.
              </p>
              <p className={text}>
                Kako biste ga najbolje iskoristili, odvojite nekoliko
                minuta da napravite popis tema ili simptoma kojima se
                želite pozabaviti na tom prvom sastanku.
              </p>
              <p className={text}>
                Mnogi ljudi koji traže pomoć od psihijatra pokušavaju
                upravljati mentalnim zdravstvenim stanjima poput
                shizofrenije, opsesivno kompulzivnog poremećaja (OKP),
                velikog depresivnog poremećaja (MDD) ili anksioznog
                poremećaja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Psihijatrija
