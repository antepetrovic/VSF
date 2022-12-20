import React from 'react'
import Head from 'components/Head'
import {
  content,
  title,
  subtitle,
  smallFont,
  wrapper,
  subwrapper,
  ul,
  text,
  smallMargin
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

const Cjenik = () => {
  return (
    <div>
      <Head>
        <title>
          Cjenik medicinskih usluga u Poliklinici Petrović
        </title>
        <meta
          name="description"
          content="Cjenik pregleda i pretraga koje možete obaviti u Poliklinici Petrović"
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/kontakt"
        ></link>
        <meta property="og:title" content="Cjenik usluga" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="
          Cjenik pregleda i pretraga koje možete obaviti u Poliklinici Petrović"
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/cjenik-usluga"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker
            title={'PRETRAGE'}
            list1={[
              {
                name: 'Cjenik dermatoloških usluga',
                url: '/dermatologija-i-venerologija/cjenik'
              }
            ]}
          />
          <div className={subwrapper}>
            <div className={`${content} ${smallMargin}`}>
              <h1 className={title}>CJENIK USLUGA</h1>
              <p className={text}>
                Cjenik pregleda i pretraga koje možete obaviti u
                Poliklinici
              </p>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                EVOCIRANI POTENCIJALI
              </h2>
              <ul className={ul}>
                <li>VIDNI VEP 600 kn</li>
                <li>SOMATOSENZORNI 500 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                KARDIOLOGIJA
              </h2>
              <ul className={ul}>
                <li>KARDIOLOŠKI PREGLED SA EKG-om 400 kn</li>
                <li>EKG 100 kn</li>
                <li>ERGOMETRIJA 500 kn</li>
                <li>HOLTER SRCA 500 kn</li>
                <li>HOLTER TLAKA 350 kn</li>
                <li>ULTRAZVUK SRCA 500 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                NEUROKIRURGIJA
              </h2>
              <ul className={ul}>
                <li>NEUROKIRURŠKI PREGLED 400 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                NEUROLOGIJA
              </h2>
              <ul className={ul}>
                <li>NEUROLOŠKI PREGLED 400 kn</li>
                <li>EMNG RUKU 500 kn</li>
                <li>EMNG NOGU 500 kn</li>
                <li>EMNG RUKU I NOGU 800 kn</li>
                <li>EEG 350 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                OTORINOLARINGOLOGIJA (ORL)
              </h2>
              <ul className={ul}>
                <li>ORL PREGLED 400 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                PSIHIJATRIJA
              </h2>
              <ul className={ul}>
                <li>PSIHIJATRIJSKI PREGLED 400 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                PULMOLOGIJA
              </h2>
              <ul className={ul}>
                <li>PULMOLOŠKI PREGLED 400 kn</li>
                <li>SPIROMETRIJA 300 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                REUMATOLOGIJA I IMUNOLOGIJA
              </h2>
              <ul className={ul}>
                <li>IMUNOLOŠKI PREGLED 400 kn</li>
                <li>REUMATOLOŠKI PREGLED 400 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                UROLOGIJA
              </h2>
              <ul className={ul}>
                <li>UROLOŠKI PREGLED 400 kn</li>
                <li>MIKCIOMETRIJA 300 kn</li>
                <li>URODINAMIKA 1000 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                ULTRAZVUK
              </h2>
              <ul className={ul}>
                <li>ULTRAZVUK ABDOMENA 500 kn</li>
                <li>ULTRAZVUK BUBREGA 300 kn</li>
                <li>ULTRAZVUK SRCA 500 kn</li>
                <li>ULTRAZVUK AORTE 500 kn</li>
                <li>ULTRAZVUK ŠTITNJAČE 300 kn</li>
                <li>ULTRAZVUK MOKRAĆNOG MJEHURA 200 kn</li>
                <li>ULTRAZVUK JETRE 300 kn</li>
                <li>ULTRAZVUK DOJKI 400 kn</li>
                <li>ULTRAZVUK TESTISA 300 kn</li>
                <li>ULTRAZVUK LIMFNIH ČVOROVA 350 kn</li>
              </ul>
            </div>
            <div className={`${content} ${smallMargin}`}>
              <h2 className={`${subtitle} ${smallFont}`}>
                COLOR DOPPLER
              </h2>
              <ul className={ul}>
                <li>CD KRVNIH ŽILA VRATA (karotide) 350 kn</li>
                <li>CD KRVNIH ŽILA VRATA (VB) 300 kn</li>
                <li>CD VENA NOGU 400 kn</li>
                <li>CD ARTERIJA NOGU 400 kn</li>
                <li>CD VENA RUKU 400 kn</li>
                <li>CD ARTERIJA RUKU 400 kn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cjenik
