import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

const listaPregleda = [
  {
    name: 'EEG',
    url: '/pretrage/eeg'
  },
  {
    name: 'EMNG RUKU I NOGU',
    url: '/pretrage/emng-ruku-i-nogu'
  },
  {
    name: 'ERGOMETRIJA',
    url: '/pretrage/ergometrija'
  },
  {
    name: 'EVOCIRANI POTENCIJALI',
    url: '/pretrage/evocirani-potencijali'
  },
  {
    name: 'HOLTER SRCA I TLAKA',
    url: '/pretrage/holter-srca-i-tlaka'
  },
  {
    name: 'URODINAMIKA',
    url: '/pretrage/urodinamika'
  },
  {
    name: 'SPIROMETRIJA',
    url: '/pretrage/spirometrija'
  },
  {
    name: 'TRANSREKTALNI ULTRAZVUK PROSTATE',
    url: '/pretrage/transrektalni-ultrazvuk-prostate'
  },
  {
    name: 'ultrazvuk srca',
    url: '/pretrage/ultrazvuk-srca'
  },
  {
    name: 'color doppler',
    url: '/pretrage/color-doppler'
  },
  {
    name: 'color doppler testisa',
    url: '/pretrage/color-doppler/testisi'
  },
  {
    name: 'color doppler vena i arterija nogu',
    url: '/pretrage/color-doppler/vena-i-arterija-nogu'
  },
  {
    name: 'color doppler vratnih žila',
    url: '/pretrage/color-doppler/vrata'
  },
  {
    name: 'Dermatološki pregled',
    url: '/dermatologija-i-venerologija/dermatoloski-pregled'
  },
  {
    name: 'Pregled madeža',
    url: '/dermatologija-i-venerologija/dermatoskopija-pregled-madeza'
  },
  {
    name: 'Uklanjanje bradavica krioterapijom',
    url: '/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom'
  },
  {
    name: 'Cjenik dermatoloških usluga',
    url: '/dermatologija-i-venerologija/cjenik'
  }
]

const Pretrage = () => {
  return (
    <div>
      <Head>
        <title>
          Pretrage koje možete obaviti u Poliklinici Vrgorac
        </title>
        <meta
          name="description"
          content="U Poliklinici Petrović možete obaviti preglede kod neurologa, urologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pregledi"
        ></link>

        <meta
          property="og:title"
          content="Pregledi koje možete obaviti u Poliklinici Petrović Vrgorac"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Dogovorite privatni pulmološki pregled u poliklinici Petrović u Vrgoracu koji obavlja doktor Andrija Sušac."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pulmoloski-pregled"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType:
                'Pregledi koje možete obaviti u Poliklinici Petrović Vrgorac',
              url: 'https://poliklinikapetrovic.hr/pulmoloski-pregled',
              description:
                'U Poliklinici Petrović možete obaviti preglede kod neurologa, urologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa.',
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
        <div className={wrapper}>
          <SidePicker title={'PRETRAGE'} list1={listaPregleda} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{'PRETRAGE'}</h1>
              <p className={text}>
                Lista Pretraga koje možete obaviti u Poliklinici
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>EEG</h2>
              <p className={text}>
                EEG je pretraga koja snima moždanu aktivnost, te
                pomoću nje možemo detektirati promjene moždane
                aktivnosti i tako dijagnosticirati moždane poremećaje
                npr. epilepsija. EEG se koristi kod dijagnosticiranja,
                praćenja i liječenja određenih neuroloških bolesti.
                Radi se pomoću malih posloženih elektrodica koje se
                stavljaju na glavu. Pretraga je bezbolna i sigurna, a
                pacijent koji dolazi potrebno je da napravi pripremu u
                vidu pranja kose.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>EMNG RUKU I NOGU</h2>
              <p className={text}>
                U Vrgoracu u našoj Poliklinici napravite
                specijalistički neurološki pregledi,
                elektroencefalografija (EEG), te
                elektromioneurografija (EMNG) ruku i nogu.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>URODINAMIKA</h2>
              <p className={text}>
                URODINAMIKA Urodinamsko ispitivanje je skup pretraga
                kojima se utvrđuju funkcije donjeg urotrakta
                (mokraćnog mjehura i mokraćne cijevi). Urodinamika je
                zlatni standard u otkrivanju poremećaja mokrenja.
                Metoda je jednostavna, <b>neinvazivna</b>, jeftina i
                na temelju nje se donosi odluka hoće se pacijent
                izlagati nekim invazivnim pretragama.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>COLOR DOPPLER</h2>
              <p className={text}>
                Color dopler je bezbolna ultrazvučna pretraga kojom se
                ispituju arterijske i venske žile. Pretraga nam daje
                informaciju o postojanju zadebljanja na stijenkama
                žila uz pomoć mjernja brzine i otpora krvi u žili.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>SPIROMETRIJA</h2>
              <p className={text}>
                Spirometrija je jednostavna i bezbolna dijagnostička
                metoda. Ona je osnovni test u procjeni funkcije pluća.
                Spirometrija ne traje dugo, bezbolna je i ekonomski
                prihvatljiva. Spirometrija je osnovni test u procjeni
                funkcije pluća.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pretrage
