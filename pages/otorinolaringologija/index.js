import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  imagesDiv,
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { otorinolaringologijaPregledi } from 'public/utils/otorinolaringologijaPregledi'

const Otorinolaringologija = () => {
  return (
    <div>
      <Head>
        <title>Privatni uho grlo nos pregled (orl) Vrgorac</title>
        <meta
          name="description"
          content="Napravite uho, grlo, nos (ORL) pregled, koji obavlja specijalist otorinolaringolog dr. Robert Tafra"
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/otorinolaringologija"
        ></link>

        <meta
          name="keywords"
          content="orl, uho, grlo, nos, vestibulometrija, vng, uređaj, videonistagmografija, timpanometrija, videonistamografija, fiberendoskopom, tonalna audiometrija, poliKLINIKA, otorinolaringologija, Vrgorac"
        />

        <meta
          property="og:title"
          content="Otorinolaringologija Orl"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite uho, grlo, nos (ORL) pregled, koji obavljaju specijalist otorinolaringolog dr. Ivana Kurtović i dr. Robert Tafra uz pomoće vng uređaja."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/otorinolaringologija"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            title={'OTORINOLARINGOLOGIJA'}
            list1={otorinolaringologijaPregledi}
          />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>Otorinolaringologija</h1>
              <p className={text}>
                Otorinolaringološke preglede u Poliklinici Petrović
                obavlja specijalist otorinolaringolog i subspecijalist
                Audiolog i neurootolog.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {otorinolaringologijaPregledi[0].name}:
              </h2>
              <p className={text}>
                {otorinolaringologijaPregledi[0].text}
              </p>
              <p className={text}>
                {otorinolaringologijaPregledi[0].text1}
              </p>
              <p className={text}>
                {otorinolaringologijaPregledi[0].text2}
              </p>
            </div>
            <div className={imagesDiv}>
              <img src={'../service-images/img1.jpg'} />
              <img src={'../service-images/img2.jpg'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otorinolaringologija
