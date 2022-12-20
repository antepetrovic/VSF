import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
// import Map from 'components/Homepage/Map'
import { urologija, urologijaPregledi } from 'public/utils/urologija'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('components/Map'))

const Cistoskopija = () => {
  return (
    <div>
      <Head>
        <title>
          Video cistoskopija pregled | Poliklinika Petrović
        </title>
        <meta
          name="description"
          content="Video cistoskopiju provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/video-cistoskopija"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, video cistoskopija"
        />
        <meta property="og:title" content="Video cistoskopija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Video cistoskopijU provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/Video-cistoskopija"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={urologija} title={urologija[0].name} />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h2 className={title}>
                  {urologijaPregledi[2].name}:
                </h2>
                <p className={text}>{urologijaPregledi[2].text}</p>
              </div>
              <div className={imagesDiv}>
                <img
                  alt={urologijaPregledi[2]}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={urologijaPregledi[2]}
                  src={'../images/img8.jpg'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicComponent />
    </div>
  )
}

export default Cistoskopija
