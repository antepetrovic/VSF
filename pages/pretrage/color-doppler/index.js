import React from 'react'
import Head from 'components/Head'

import {
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/ultrazvukColorDoppler'

const ColorDoppler = () => {
  return (
    <div>
      <Head>
        <title>Color doppler (CD) Vrgorac</title>
        <meta
          name="description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler vratnih žila, arterija i vena nogu i ruku i color doppler testisa. Cijena pregleda je 200 - 350kn. Color dopler je bezbolna ultrazvučna pretraga kojom se
          ispituju arterijske i venske žile. Pretraga nam daje
          informaciju o postojanju zadebljanja na stijenkama
          žila."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/color-doppler"
        ></link>
        <meta name="keywords" content="color doppler" />
        <meta property="og:title" content="Color doppler" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color dopler vratnih žila, arterija i vena nogu i ruku i color doppler testisa. Cijena pregleda je 200 - 350kn. Color dopler je bezbolna ultrazvučna pretraga kojom se
          ispituju arterijske i venske žile. Pretraga nam daje
          informaciju o postojanju zadebljanja na stijenkama
          žila."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/color-doppler"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Color doppler',
              url: 'https://poliklinikapetrovic.hr/pretrage/color-doppler',
              description:
                'U Poliklinici Petrović u Vrgoracu možete napraviti Color dopler vratnih žila, arterija i vena nogu i ruku i color doppler testisa. Cijena pregleda je 200 - 350kn. Color dopler je bezbolna ultrazvučna pretraga kojom se ispituju arterijske i venske žile. Pretraga nam daje informaciju o postojanju zadebljanja na stijenkama žila.',
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
              name: 'Color doppler',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/pretrage/color-doppler'
            })
          }}
        />
      </Head>

      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>Što je color doppler?</h1>
              <p className={text}>
                Color dopler je bezbolna ultrazvučna pretraga kojom se
                ispituju arterijske i venske žile. Pretraga nam daje
                informaciju o postojanju zadebljanja na stijenkama
                žila uz pomoć mjernja brzine i otpora krvi u žili.
                Doppler ultrazvuk koristi visokofrekventne zvučne
                valove za{' '}
                <b>mjerenje protoka krvi kroz arterije i vene</b>,
                obično one koje krvlju opskrbljuju vaše ruke i noge.
                Postavljanjem ultrazvučne sonde na površinu kože iznad
                arterija i vena dobivamo prikaz strukture krvnih žila.
              </p>{' '}
              <p className={text}>
                Doppler ultrazvuk je bezbolan postupak koji zahtijeva
                malo pripreme. Test pruža vašem liječniku važne
                informacije o protoku krvi kroz vaše glavne arterije i
                vene. Također može otkriti <b>blokiran ili smanjen</b>{' '}
                protok krvi kroz sužena područja u arterijama, što bi
                na kraju moglo dovesti do moždanog udara.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>
                Color dopplerom možemo otkriti:
              </h2>
              <ul className={ul}>
                <li>Suženje ili začepljenje žila</li>
                <li>Patološko proširenje zidova (aneurizma)</li>
                <li>
                  Arteriovensku fistulu (nenormalni kanal između
                  arterije i vene)
                </li>
                <li>Prohodnost i funkcionalnost arterija i vena</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={title}>Kada napraviti color doppler:</h2>
              <p className={text}>
                Vaš liječnik može predložiti Doppler ultrazvučni
                pregled:
              </p>
              <ul className={ul}>
                <li>U sklopu redovne kontrole</li>
                <li>Kada vam otiču noge</li>
                <li>Kada imate bol u nozi</li>
                <li>Kod nepokretnih osoba</li>
                <li>Nakon dugotrajnog nošenja gipsa</li>
                <li>Nakon teških operacija</li>
              </ul>
              <p className={text}>
                Doppler ultrazvuk može pomoći u određivanju krvnog
                tlaka u vašim arterijama. Također može pokazati koliko
                krvi trenutno teče kroz vaše arterije i vene.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>
                {'Kako se pripremiti za color doppler'}:
              </h2>
              <p className={text}>
                Color doppler pretraga ne zahtjeva dodatne pripreme.
                Sam pregled traje kratko. Nakon pregleda radiolog
                očitava nalaz.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>{'Cijena color dopplera'}:</h2>
              <ul className={ul}>
                <li>Color doppler karotida: 350kn</li>
                <li>Color doppler vertebralne arterije: 350kn</li>
                <li>Color doppler po ekstremitetu: 200kn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorDoppler
