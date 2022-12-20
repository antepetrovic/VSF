import React, { Fragment } from 'react'
import Head from 'components/Head'

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

import { urologija, urologijaPregledi } from 'public/utils/urologija'

const Ultrazvukskrotuma = () => {
  return (
    <div>
      <Head>
        <title>Ultrazvuk testisa | Poliklinika Petrović</title>
        <meta
          name="description"
          content="Ultrazvučni pregled testisa(skrotuma) je osnovna slikovna pretraga za evaluaciju poremećaja testisa"
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-testisa"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, ultrazvuk testisa"
        />
        <meta property="og:title" content="Ultrazvuk testisa" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Svaki muškarac bi trebao napraviti urološki pregled, pregled prostate s 50 godina, a s 45 godina osobe koje imaju obiteljsku anamnezu karcinoma."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/ultrazvuk-testisa"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={urologija} title={urologija[0].name} />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>
                  {urologijaPregledi[3].name}:
                </h1>
                <p className={text}>{urologijaPregledi[3].text}</p>
              </div>
              <div className={imagesDiv}>
                <img
                  alt={urologijaPregledi[3].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={urologijaPregledi[3].name}
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

export default Ultrazvukskrotuma
