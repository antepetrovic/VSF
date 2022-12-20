import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  title,
  subwrapper,
  content,
  text,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { kardiologijaPregledi } from 'public/utils/kardiologijaPregledi'
import { kardiologija } from 'public/utils/kardiologija'

const Ergometrija = () => {
  return (
    <div>
      <Head>
        <title>Ergometrija pregled | Poliklinika Petrović</title>
        <meta
          name="description"
          content="Naručite se na Ergometriju i provjerite rad srca pod opterećenjem. Zahvaljujući ovom testu, moguće je otkriti je li
          pacijentova bol u prsima posljedica suženja ili
          začepljenja koronarne arterije."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ergometrija"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, ergometrija"
        />
        <meta property="og:title" content="ergometrija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Naručite se na Ergometriju i provjerite rad srca pod opterećenjem. Zahvaljujući ovom testu, moguće je otkriti je li
          pacijentova bol u prsima posljedica suženja ili
          začepljenja koronarne arterije."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ergometrija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ergometrija',
              url: 'https://poliklinikapetrovic.hr/pretrage/ergometrija',
              description:
                'Naručite se na Ergometriju i provjerite rad srca pod opterećenjem. Zahvaljujući ovom testu, moguće je otkriti je li pacijentova bol u prsima posljedica suženja ili začepljenja koronarne arterije.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Ergometrija',
              datePublished: '2022-11-08',
              url: 'https://poliklinikapetrovic.hr/pretrage/ergometrija'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            list1={kardiologija}
            title={kardiologija[0].name}
          />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>ERGOMETRIJA</h1>
                <p className={text}>
                  Ergometrija je postupak kojim se proučava rad srca
                  pod naporom (test opterećenja srca). Ovim postupkom
                  se utvrđuje{' '}
                  <b> utjecaj tjelesne aktivnosti na rad srca. </b>
                  Srce zdrave osobe omogućuje prevladavanje značajnog
                  fizičkog stresa. Ishemijska bolest srca značajno
                  smanjuje ovu sposobnost, pogoršavajući stanje
                  bolesnika tijekom napora. Potreba za proučavanjem
                  kardiovaskularnog stanja srca uzrokovana je
                  činjenicom da se neke bolesti srca ne manifestiraju
                  u mirovanju (na primjer, aritmija i insuficijencija
                  koronarnih arterija), što otežava pravovremenu
                  dijagnozu.
                </p>
                <p className={text}>
                  Zahvaljujući ovom testu, moguće je otkriti je li
                  pacijentova bol u prsima posljedica suženja ili
                  začepljenja koronarne arterije. Osim što pomaže u
                  ispravnoj dijagnozi, ergometrija je korisna za
                  procjenu prognoze kod pacijenata s poznatom
                  koronarnom bolešću, kao i učinak liječenja.
                </p>
              </div>
              <div className={content}>
                <h1 className={title}>KAKO SE IZVODI ERGOMETRIJA</h1>
                <p className={text}>
                  Prije početka testa, liječnici će zabilježiti vaš
                  krvni tlak i puls. Elektrode će biti pričvršćene
                  tako da se električna aktivnost vašeg srca može
                  zabilježiti prije početka vježbanja, dok vježbate i
                  oko 10 minuta nakon vježbanja.{' '}
                </p>
                <p className={text}>
                  U najčešće korištenom protokolu, svake tri minute
                  razina napora se automatski povećava tako da srce
                  ubrzava dok ne postigne željeni broj otkucaja. Kada
                  pacijent ne može nastaviti s naporom, mora
                  obavijestiti liječnika. Zatim se test odmah
                  zaustavlja i pacijent prelazi na fazu oporavka,
                  tijekom koje će se od njega tražiti da legne ili
                  sjedne i odmori se. Vrlo je važno nastojati uložiti
                  što više truda kako bi rezultati testa bili
                  pouzdani. Ako se u bilo kojem trenutku otkrije bilo
                  kakva ozbiljna aritmija, promjene u krvnom tlaku,
                  promjene u elektrokardiogramu ili pacijent doživi
                  progresivnu anginu pektoris, test će također biti
                  zaustavljen.
                </p>
                <p className={text}>
                  <b>Tijekom izvođenja ergometije doktor prati:</b>
                </p>
                <ul className={ul}>
                  <li>brzinu otkucaja srca</li>
                  <li>disanje</li>
                  <li>krvni tlak</li>
                  <li>EKG očitanja</li>
                  <li>razinu umora</li>
                  <li>otkucaje srca</li>
                </ul>
                <p className={text}>
                  <b>
                    Ako tijekom izvođenja ergometije dođe do neke od
                    slijedećih pojava, liječnik može prekinuti
                    testiranje
                  </b>
                </p>
                <ul className={ul}>
                  <li>vrtoglavica</li>
                  <li>visoki / visoki krvni tlak</li>
                  <li>aritmija, ili nepravilan rad srca</li>
                  <li>bol u prsima</li>
                  <li>otežano disanje</li>
                  <li>umor</li>
                </ul>
              </div>
              <div className={content}>
                <h1 className={title}>
                  KADA JE POTREBNO NAPRAVITI ERGOMETRIJU
                </h1>
                <p className={text}>
                  Liječnik može preporučiti test opterećenja ako osoba
                  ima simptome koji bi mogli ukazivati ​​na srčano
                  oboljenje, kao što su:
                </p>
                <ul className={ul}>
                  <li>teškoće u disanju</li>
                  <li>bol u prsima</li>
                  <li>vrtoglavica</li>
                  <li>brz ili nepravilan rad srca</li>
                </ul>
              </div>
              <div className={imagesDiv}>
                <img
                  alt={kardiologijaPregledi[1].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={kardiologijaPregledi[1].name}
                  src={'../images/img8.jpg'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ergometrija
