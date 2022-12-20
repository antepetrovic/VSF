import React from 'react'
import Head from 'components/Head'
import {
  center,
  content,
  wrapper,
  title,
  centerTitle,
  text,
  centerText
} from 'pages/Global.module.scss'

const oNama = () => {
  return (
    <div>
      <Head>
        <title>O nama | Poliklinika Petrović</title>
        <meta
          name="description"
          content="Naš tim vode vrhunski stručnjaci dr. Anita Marčinko specijalist neurolog, prof. dr. sc. Željko Petrović prim. dr. med. specijalit neurolog, prof. dr. sc. Ivan Mikula prim. dr. med. specijalit neurolog, prof. dr. sc. Branka Ribarić dr. med. specijalit neurolog,
          prof. dr. sc. Damir Gortan prim. dr. med. specijalist orl, neurootolog, audiolog, prof. dr. sc. Pavle Miklić neurokirurg, prof. dr. sc. Dean Strinić internist kardiolog, prof. dr. sc. Josip Janković psiholog - psihoterapeut, prof. psihologije Anita Alegić Karin klinički psiholog, dr. med. Malnar Živko specijalist psihijatrije"
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/o-nama"
        ></link>

        <meta
          name="keywords"
          content="o nama, naš tim, Željko Petrović, Branka Ribarić"
        />

        <meta property="og:title" content="O nama" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Naš tim vode vrhunski stručnjaci prof. dr. sc. Željko Petrović prim. dr. med. specijalit neurolog, prof. dr. sc. Ivan Mikula prim. dr. med. specijalit neurolog, prof. dr. sc. Branka Ribarić dr. med. specijalit neurolog,
          prof. dr. sc. Damir Gortan prim. dr. med. specijalist orl, neurootolog, audiolog, prof. dr. sc. Pavle Miklić neurokirurg, prof. dr. sc. Dean Strinić internist kardiolog, prof. dr. sc. Josip Janković psiholog - psihoterapeut, prof. psihologije Anita Alegić Karin klinički psiholog, dr. med. Malnar Živko specijalist psihijatrije"
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/o-nama"
        />
      </Head>
      <div id={'main-container'}>
        <div className={`${wrapper} ${center}`}>
          <div className={content}>
            <h2 className={`${title} ${centerTitle}`}>
              Upit je uspješno poslan!
            </h2>
            <p className={`${text} ${centerText}`}>
              Zahvaljujemo se na vašem upitu. Odgovorit ćemo Vam u
              najkraćem mogućem roku!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default oNama
