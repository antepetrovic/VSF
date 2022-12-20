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

const UltrazvukDojki = () => {
  return (
    <div>
      <Head>
        <title>
          Ultrazvuk dojki - kada napraviti ultrazvuk dojki?
        </title>
        <meta
          name="description"
          content="Napravite ultrazvuk dojki ukoliko ste stariji od 25 i mlađi od 40 godina ili još ranije ako među članovima obitelji imate rak dojki."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-dojki"
        ></link>
        <meta name="keywords" content="ultrazvuk dojki" />
        <meta property="og:title" content="Ultrazvuk dojki" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite ultrazvuk dojki ukoliko ste stariji od 25 i mlađi od 40 godina ili još ranije ako među članovima obitelji imate rak dojki."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-srca"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk dojki',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-dojki',
              description:
                'Napravite ultrazvuk dojki ukoliko ste stariji od 25 i mlađi od 40 godina ili još ranije ako među članovima obitelji imate rak dojki.',
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
              name: 'Ultrazvuk dojki',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-dojki'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>ULTRAZVUK DOJKI</h1>
              <p className={text}>
                Ultrazvučno snimanje dojke koristi zvučne valove za
                stvaranje slika unutarnjih struktura dojke. Koristi se
                za pomoć pri dijagnosticiranju kvržica u dojkama ili
                drugih abnormalnosti koje se uoče tijekom fizičkog
                pregleda ili na mamografiji ili MRI dojke. Mnoge
                abnormalnosti otkrivene ultrazvukom dojke nisu rak
                (lažno pozitivni rezultati). Ultrazvuk je siguran,
                neinvazivan i ne koristi zračenje. Ovaj pregled
                zahtjeva malo ili nimalo posebne pripreme. Morat ćete
                se skinuti od struka naviše.
              </p>
              <p className={text}>
                Ultrazvučno snimanje je neinvazivna medicinska
                pretraga koja pomaže liječnicima u dijagnosticiranju i
                liječenju zdravstvenih stanja.{' '}
                <b>Sigurno je i bezbolno.</b>
                Proizvodi slike unutrašnjosti tijela pomoću zvučnih
                valova. Ultrazvučno snimanje naziva se i sonografija.
                Koristi malu sondu i gel koji se postavlja izravno na
                kožu. Zvučni valovi visoke frekvencije putuju od sonde
                kroz gel u tijelo. Sonda prikuplja zvukove koji se
                odbijaju. Računalo koristi te zvučne valove za
                stvaranje slike.
              </p>{' '}
              <p className={text}>
                Ultrazvučni pregledi ne koriste zračenje (rendgenske
                zrake). Budući da ultrazvuk snima slike u stvarnom
                vremenu, može pokazati strukturu i kretanje unutarnjih
                organa tijela. Slike također mogu prikazati protok
                krvi kroz krvne žile. Doppler ultrazvuk je posebna
                ultrazvučna tehnika koja procjenjuje kretanje
                materijala u tijelu. Omogućuje liječniku da vidi i
                procijeni protok krvi kroz arterije i vene u tijelu.
                Ultrazvuk (UZ) dojke daje{' '}
                <b>sliku unutarnjih struktura dojke</b>. Tijekom
                ultrazvučnog pregleda dojki, sonograf ili liječnik
                može koristiti Doppler tehnike za procjenu protoka
                krvi ili nedostatka protoka u bilo kojoj masi dojke. U
                nekim slučajevima to može pružiti dodatne informacije
                o uzroku mase.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>PRIPREMA ZA PREGLED</h2>
              <p className={text}>
                Za ovaj pregled nije potrebna nikakva poslebna
                potreba. Preporučuje se da se obavi 7. do 10. dana
                menstrualnog ciklusa. Za razliku od mamografije
                ultrazvuk dojki ne koristi rendgensko zračenje.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>KAKO IZGLEDA PREGLED</h2>
              <p className={text}>
                Leći ćete na leđa ili na bok na ispitnom stolu.
                Sonograf može tražiti da podignete rukue iznad glave.
                Radiolog će vas postaviti na stol za pregled.{' '}
              </p>
              <p className={text}>
                Na područje tijela koje se pregledava nanijet će gel
                na bazi vode. Gel će pomoći sondi da uspostavi siguran
                kontakt s tijelom. Također uklanja zračne džepove
                između sonde i kože koji mogu blokirati prolazak
                zvučnih valova u vaše tijelo. Radiolog postavlja sondu
                na tijelo i pomiče je naprijed-natrag po području
                interesa dok ne uhvati željene slike. Obično nema
                nelagode od pritiska dok pritišću sondu na područje
                koje se ispituje. Međutim, ako je područje osjetljivo,
                možete osjetiti pritisak ili manju bol od sonde. Nakon
                što je snimanje završeno, obrisat ćete ultrazvučni gel
                s vaše kože. Svi preostali dijelovi brzo će se
                osušiti.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>KORISTI</h2>
              <ul className={ul}>
                <li>
                  Većina ultrazvučnih pretraga je neinvazivna (bez
                  igala ili injekcija). Povremeno, ultrazvučni pregled
                  može biti privremeno neugodan, ali ne bi trebao biti
                  bolan.
                </li>
                <li>
                  Ultrazvuk je široko dostupan, jednostavan za
                  korištenje i jeftiniji od većine drugih metoda
                  snimanja.
                </li>
                <li>
                  Ultrazvučno snimanje je iznimno sigurno i ne koristi
                  zračenje.
                </li>
                <li>
                  Ultrazvučno skeniranje daje jasnu sliku mekih tkiva
                  koja se ne vide dobro na rendgenskim slikama.
                </li>
                <li>
                  Ultrazvuk omogućuje prikaz slike u stvarnom vremenu.
                  To ga čini dobrim alatom za vođenje minimalno
                  invazivnih postupaka kao što su biopsije iglom i
                  aspiracija tekućine.
                </li>
                <li>
                  Ultrazvučno snimanje može pomoći u otkrivanju lezija
                  grudi.
                </li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={title}>RIZICI</h2>
              <ul className={ul}>
                <li>
                  {' '}
                  Standardni dijagnostički ultrazvuk nema poznatih
                  štetnih učinaka na ljude.
                </li>
                <li>
                  {' '}
                  Tumačenje ultrazvučnog pregleda dojke može dovesti
                  do dodatnih postupaka kao što je kontrolni ultrazvuk
                  i/ili aspiracija ili biopsija.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltrazvukDojki
