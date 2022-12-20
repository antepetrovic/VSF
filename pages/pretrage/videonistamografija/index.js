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

const Videonistamografija = () => {
  return (
    <div>
      <Head>
        <title>
          Videonistamografija pregled | Poliklinika Petrović
        </title>
        <meta
          name="description"
          content="Videonistamografiju provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/videonistamografija"
        ></link>

        <meta
          name="keywords"
          content="neurolog, neurologija, videonistamografija"
        />
        <meta property="og:title" content="EEG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Videonistamografiju provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/videonistamografija"
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
              <p className={text}>
                {otorinolaringologijaPregledi[0].text1}
              </p>
              <p className={text}>
                {otorinolaringologijaPregledi[0].text2}
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

export default Videonistamografija
