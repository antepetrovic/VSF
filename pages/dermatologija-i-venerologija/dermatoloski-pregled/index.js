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

const DermatoloskiPregled = () => {
  return (
    <div>
      <Head>
        <title>Dermatološki pregled kože, noktiju i vlasišta</title>
        <meta
          name="description"
          content="Ako uočite promjene na koži, noktima, vlasištu, sluznici ili spolovilu napravite kratki dermatološki pregled i otklonite sve sumnje."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoloski-pregled"
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
          content="Ako imate promjene na koži, noktima, vlasištu, sluznici ili spolovilu napravite kratki dermatološki pregled i otklonite sve sumnje."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoloski-pregled"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Pregled dermatologa',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoloski-pregled',
              description:
                'Ako imate promjene na koži, noktima, vlasištu, sluznici ili spolovilu napravite kratki dermatološki pregled i otklonite sve sumnje.',
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
              name: 'Dermatološki pregled',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/dermatologija-i-venerologija/dermatoloski-pregled'
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
            ]}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>DERMATOLOŠKI PREGLED</h1>
              <p className={text}>
                Opći dermatološki pregled uključuje pregled kože,
                vlasišta, noktiju, sluznice ili vanjskog dijela
                spolovila. Prilikom dermatološkog pregleda prvo s Vama
                razgovaramo o problemu zbog kojeg dolazite. Važno je
                točno opisati kada su se problemi prvi put pojavili i
                gdje, šire li se i kako, je li vas svrbi ili peče,
                jeste li se već liječili ili sami koristili kakve
                masti ili lijekove? Također je važno liječite li se od
                drugih bolesti i koje lijekove uzimate.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                Kada Vam je potreban dermatološki pregled
              </h2>
              <p className={text}>
                Dermatološki pregled Vam je potreban kada imate
                promjene na koži, noktima, vlasištu, sluznici ili
                spolovilu.
              </p>
              <ul className={ul}>
                <li>Bradavice</li>
                <li>Ekcem</li>
                <li>Akne</li>
                <li>Opadanje kose</li>
                <li>Fleke po tijelu (nakon sunčanja)</li>
                <li>Spolne bolesti</li>
                <li>Madeži</li>
                <li>Rozacea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DermatoloskiPregled
