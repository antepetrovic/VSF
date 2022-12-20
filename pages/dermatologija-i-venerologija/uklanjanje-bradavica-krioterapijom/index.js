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

const Krioterapija = () => {
  return (
    <div>
      <Head>
        <title>Uklanjanje bradavica krioterapijom</title>
        <meta
          name="description"
          content="PBradavice se ponekad same povuku, ali to može potrajati godinama. Ako ne želite čekati možete odstraniti bradavice smrzavanjem pomoću krioterapije."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom"
        ></link>
        <meta
          name="keywords"
          content="dermatologija. bradavice, uklanjanje, krioterapija"
        />
        <meta property="og:title" content="Dermatologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Bradavice se ponekad same povuku, ali to može potrajati godinama. Ako ne želite čekati možete odstraniti bradavice smrzavanjem pomoću krioterapije."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Dermatoskopija mladeža - pregled mladeža',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom',
              description:
                'Bradavice se ponekad same povuku, ali to može potrajati godinama. Ako ne želite čekati možete odstraniti bradavice smrzavanjem pomoću krioterapije.',
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
              name: 'Uklanjanje bradavica krioterapijom',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/uklanjanje-bradavica-krioterapijom'
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
                name: 'Pregled madeža',
                url: '/dermatologija-i-venerologija/dermatoskopija-pregled-madeza'
              },
              {
                name: 'Cjenik dermatoloških usluga',
                url: '/dermatologija-i-venerologija/cjenik'
              }
            ]}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                UKLANJANJE BRADAVICA KRIOTERAPIJOM
              </h1>
              <p className={text}>
                Bradavice ponekad nestanu same od sebe, ali to može
                trajati godinama. Ako ne želite čekati, možete ih
                odstaraniti krioterapijom. To je{' '}
                <b>jedan od najčešćih </b>
                načina da se riješite bradavica. Također može smanjiti
                šanse da se bradavice prošire na druge dijelove
                tijela. Krioterapijom se bradavice zamrzavaju pomoću
                tekućeg dušika. Krioterapija je standardni tretman za
                bradavice i može se provesti u liječničkoj ordinaciji.
                Primjena tekućeg dušika obično traje manje od minute.
              </p>
              <ul className={ul}>
                <li>
                  Liječnik može podrezati bradavicu malim nožem prije
                  primjene tekućeg dušika.
                </li>
                <li>
                  Liječnik koristi tekući dušik, koji može doseći
                  <b> temperature i do -160 C°</b> kako bi zamrznuo
                  bradavicu
                </li>
                <li>
                  Krioterapija može biti neugodna. Lokalni anestetik
                  obično nije potreban, ali se može koristiti u nekim
                  slučajevima.
                </li>
                <li>
                  Liječnik nanosi tekući dušik na bradavicu pomoću
                  sonde ili pamučnog štapića. Tekući dušik također se
                  može prskati izravno na bradavicu.
                </li>
                <li>
                  Ovo se može činiti kao da kockica leda dodiruje vašu
                  kožu, ali traje samo nekoliko sekundi. Vaša koža
                  može nakratko utrnuti i može boljeti, pocrvenjeti, a
                  zatim stvoriti mjehur.
                </li>
                <li>
                  Većina bradavica zahtijeva 1 do 4 tretmana, sa 1 - 3
                  tjedna između svakog tretmana.
                </li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KRIOTERAPIJA BRADAVICA OPORAVAK
              </h2>
              <p className={text}>
                Bol nakon krioterapije može trajati do 3 dana.
                Zacjeljivanje je općenito brzo <b>7 do 14 dana</b> sa
                malo ili bez ožiljaka. U roku od nekoliko sati nakon
                tretmana može se stvoriti mjehurić.
              </p>
              <ul className={ul}>
                <li>
                  Ako mjehurić pukne, očistite područje kako biste
                  spriječili širenje virusa bradavica.
                </li>
                <li>
                  Mjehur će se osušiti tijekom sljedećih nekoliko
                  dana, a bradavica može otpasti.
                </li>
                <li>
                  Jedan tretman može biti dovoljan da se riješite
                  manjih bradavica. Za one veće možda će biti potrebno
                  nekoliko tretmana. Vjerojatno ćete dobiti ta 1 - 3
                  tjedna razmaka između tretmana.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Krioterapija
