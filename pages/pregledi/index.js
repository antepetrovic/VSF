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

import { listaPregleda } from 'public/utils/lista-pregleda'
import { kardioloskiPregled } from 'public/utils/kardiologija'
import { neurološkiPregled } from 'public/utils/neurologija'
import { uroloskiPregled } from 'public/utils/urologija'
import { pulmoloskiPregled } from 'public/utils/pulmologija'

const Pregledi = () => {
  return (
    <div>
      <Head>
        <title>
          Pregledi koje možete obaviti u Poliklinici Petrović Vrgorac
        </title>
        <meta
          name="description"
          content="Lista pregleda koje možete obaviti u Poliklinici Petrović. Pregled neurologa, urologa, dermatologa, venerologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pregledi"
        ></link>

        <meta
          property="og:title"
          content="Lista pregleda koje možete obaviti u Poliklinici Petrović. Pregled neurologa, urologa, dermatologa, venerologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa."
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Lista pregleda koje možete obaviti u Poliklinici Petrović. Pregled neurologa, urologa, dermatologa, venerologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pregledi"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType:
                'Pregledi koje možete obaviti u Poliklinici Petrović Vrgorac',
              url: 'https://poliklinikapetrovic.hr/pregledi',
              description:
                'Lista pregleda koje možete obaviti u Poliklinici Petrović. Pregled neurologa, urologa, dermatologa, venerologa, kardiologa, reumatologa, imunologa, psihologa, psihijatra, pulmologa i otorinolaringologa.',
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
              name: 'Pregledi koje možete obaviti u poliklinici',
              datePublished: '2022-11-08',
              url: 'https://poliklinikapetrovic.hr/pregledi'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker title={'PREGLEDI'} list1={listaPregleda} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{'PREGLEDI'}</h1>
              <p className={text}>
                Lista regleda koje možete obaviti u Poliklinici
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {kardioloskiPregled.title}:
              </h2>
              <p className={text}>{kardioloskiPregled.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{neurološkiPregled.title}:</h2>
              <p className={text}>{neurološkiPregled.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{uroloskiPregled.title}:</h2>
              <p className={text}>{uroloskiPregled.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>IMUNOLOŠKI PREGLED:</h2>
              <p className={text}>
                Imunološke i reumatološke preglede u našoj poliklinici
                obavlja <b>dr. Vinka Vukosav</b>.
              </p>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>REUMATOLOŠKI PREGLED:</h2>
              <p className={text}>
                Reumatološke preglede u našoj poliklinici obavlja{' '}
                <b>dr. Vinka Vukosav</b>.
              </p>
            </div> */}
            <div className={content}>
              <h2 className={subtitle}>{pulmoloskiPregled.title}:</h2>
              <p className={text}>{pulmoloskiPregled.text}</p>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>{listaPregleda[6].name}:</h2>
              <p className={text}>
                {' '}
                Otorinolaringološke preglede u Poliklinici Petrović
                obavlja <b>prof. dr. Damir Gortan</b> specijalist
                otorinolaringolog i subspecijalist Audiolog i
                neurootolog.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pregledi
