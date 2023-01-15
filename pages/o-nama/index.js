import React from 'react'
import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  wrapper,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/ultrazvukColorDoppler'

const oNama = () => {
  return (
    <div>
      <Head>
        <title>O nama | Poliklinika Petrović</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/o-nama"
        ></link>

        <meta
          name="keywords"
          content="o nama, naš tim, Pavao Petrović, Branka Ribarić"
        />

        <meta property="og:title" content="O nama" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/o-nama"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} title="ULTRAZVUK" />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>POLIKLINIKA</h1>
                <p className={text}>
                  Poliklinika Petrović djeluje već više od deset
                  godina na području splitsko dalmatinske županije.
                  Zahvaljujući predanom radu, vrhunskoj kvaliteti
                  pružanja usluge te skrbi za pacijente postala je
                  prepoznatljiv simbol medicinske ustanove.
                  Poliklinika Petrović objedinjuje profesionalizam,
                  sofisticiranu tehnologiju te stručnost liječnika.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>
                  Temeljna djelatnosti Poliklinike
                </h2>
                <p className={text}>
                  Temeljna djelatnosti Poliklinike je zdravstvena
                  zaštita tijekom cijelog života. Osim udobnog
                  prostora i opremljenosti vrhunskim aparatima
                  najvažniji dio brige za zdravlje pacijenata u
                  Poliklinici obavlja stručno osoblje, koje stalnim
                  unapređenjem svojih usluga svakodnevno nastoji
                  opravdati zadobiveno povjerenje, te biti i ostati
                  prvo odredište u prevenciji i liječenju različitih
                  oboljenja. Osnovne značajke našeg rada su
                  najmodernija tehnologija, visoka kvaliteta usluge,
                  kontinuirano usavršavanje i certificiranje liječnika
                  i uvođenje modernih tehnologija, stalna briga za
                  pacijente te prilagođavanje individualnim potrebama
                  i mogućnostima.
                </p>
                <p className={text}>
                  U sklopu neurološke dijagnostike i terapije pored
                  temeljnih neuroloških pretraga izvode se EMNG udova,
                  evocirani potencijali (somatosenzorni, auditorni te
                  vidni). Dodatno, neurokirurški pregledi dostupni su
                  za odrasle i djecu. Stručni tim kardiologa izvodi
                  temeljne kardiološke pretrage te su dostupne
                  pretrage holter srca i tlaka te ergometrija. Ostale
                  djelatnosti dostupne u Poliklinici uključuju
                  otorinolaringologiju, pulmologiju, urologiju,
                  imunologiju i reumatologiju, psihijatriju. Konačno,
                  u Poliklinici se izvode kompletni sistematski
                  pregledi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default oNama
