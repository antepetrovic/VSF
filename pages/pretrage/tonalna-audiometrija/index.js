import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  wrapper,
  imagesDiv,
  subwrapper,
  content,
  text,
  title
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { otorinolaringologijaPregledi } from 'public/utils/otorinolaringologijaPregledi'
import { otorinolaringologija } from 'public/utils/otorinolaringologija'

const Timpanometrija = () => {
  return (
    <div>
      <Head>
        <title>
          Tonalna audiometrija pregled | Poliklinika Petrović
        </title>
        <meta
          name="description"
          content="U našoj Poliklinici možete napraviti pregled sluha tonalnom audiometrijom slušalicama u tihoj sobi."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/tonalna-audiometrija"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, tonalna audiometrija"
        />
        <meta
          property="og:title"
          content="Tonalna-audiometrija pregled"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U našoj Poliklinici možete napraviti pregled sluha tonalnom audiometrijom slušalicama u tihoj sobi."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/tonalna-audiometrija"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            list1={otorinolaringologija}
            title={otorinolaringologija[0].name}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                {otorinolaringologijaPregledi[0].name}:
              </h1>
              <p className={text}>
                {otorinolaringologijaPregledi[0].text}
              </p>
              <div className={imagesDiv}>
                <img
                  alt={otorinolaringologijaPregledi[0].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={otorinolaringologijaPregledi[0].name}
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

export default Timpanometrija
