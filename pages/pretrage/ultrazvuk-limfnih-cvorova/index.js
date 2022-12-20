import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { kardiologija } from 'public/utils/kardiologija'

const Ultrazvuk = () => {
  return (
    <div>
      <Head>
        <title>
          Ultrazvuk limfnih čvorova - kada napraviti ultrazvuk limfnih
          čvorova
        </title>
        <meta
          name="description"
          content="Ako imate povećane limfne čvorove vrata i pazuha ili kožne promjene u području limfnog čvora potrebno je naručiti se na ultrazvuk limfnih čvorova."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-limfnih-cvorova"
        ></link>

        <meta
          name="keywords"
          content="ultrazvuk, ultrazvuk limfnih čvorova"
        />
        <meta
          property="og:title"
          content="Ultrazvuk limfnih čvorova"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ako imate povećane limfne čvorove vrata i pazuha ili kožne promjene u području limfnog čvora potrebno je naručiti se na ultrazvuk limfnih čvorova."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-limfnih-cvorova"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk limfnih čvorova u Vrgoracu',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-limfnih-cvorova',
              description:
                'Ako imate povećane limfne čvorove vrata i pazuha ili kožne promjene u području limfnog čvora potrebno je naručiti se na ultrazvuk limfnih čvorova.',
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
          <SidePicker
            list1={kardiologija}
            title={kardiologija[0].name}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>ULTRAZVUK LIMFNIH ČVOROVA</h1>
              <p className={text}>
                Ultrazvuk limfnih čvorova je pretraga koja omogućuje
                procjenu izgleda, veličine, oblika i odnosa limfnih
                čvorova s okolnim tkivima.{' '}
                <b>Najčešći razlog za naručivanje</b> na ultrazvuk
                limfnih čvorova je njihovo povećanje, bol ili kožne
                promjene u području limfnog čvora. Najčešći uzrok
                limfadenopatije je upala na mjestu gdje se nalaze
                čvorovi. <b>Najopasniji uzroci povećanja </b> čvorova
                su tumori i neoplazme, uzrokovane bolestima kao što su
                Hodgkinova bolest i ne-Hodgkinov limfom ili metastaze
                u limfnim čvorovima.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KADA NAPRAVITI ULTRAZVUK LIMFNIH ČVOROVAR
              </h2>
              <ul className={ul}>
                <li>
                  Povećane limfne čvorove veće od 10 mm potrebno je
                  pregledati ultrazvukom.
                </li>
                <li>
                  Kada se pacijenti žale na bolove u području limfnih
                  čvorova potrebno je napraviti ultrazvučni pregled.
                </li>
              </ul>
              <p className={text}>
                <b>Bol u limfnim čvorovima</b> može biti povezana s
                brzim oticanjem limfnih čvorova. Štoviše, ako se
                unutar limfnih čvorova nađu kožne lezije, to je
                također pokazatelj za obavljanje ultrazvučnog pregleda
                limfnih čvorova.
              </p>
              <p className={text}>
                Nisu svi simptomi koji ukazuju na potrebu ultrazvučnog
                pregleda limfnih čvorova povezani s ozbiljnom bolešću.
                No, neovisno o tome koji su limfni čvorovi povećani,
                potrebno je napraviti ultrazvuk kako bi se utvrdio
                uzrok problema. Bakterije, virusne infekcije, bolesti
                poput leukemije ili lupusa (autoimuna bolest).
              </p>
            </div>

            <div className={content}>
              <h2 className={subtitle}>
                LIMFNI ČVOROVI KOJI SE NAJČEŠĆE PREGLEDAVAJU
              </h2>
              <ul className={ul}>
                <li>Limfni čvorovi vratnog područja</li>
                <li>
                  Limfni čvorovi pazuha (aksilarni limfni čvorovi)
                </li>
                <li>
                  limfni čvorovi prepona (ingvinalni limfni čvor)
                </li>
              </ul>
              <p className={text}>
                Ako primijetite povećane limfne čvorove, koji se
                obično manifestiraju kao potkožni, često bolni i
                pomični mali čvorovi, potrebno ih je pregledati
                ultrazvukom. Ultrazvučna slika patološki promijenjenih
                limfnih čvorova često nam omogućuje naslutiti zašto su
                povećani, a ponekad i sugerirati radi li se o akutnoj
                ili kroničnoj bolesti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ultrazvuk
