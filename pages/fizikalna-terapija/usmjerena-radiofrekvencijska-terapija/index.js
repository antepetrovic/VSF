import React, { Fragment } from 'react'
import Head from 'components/Head'
import {
  imagesDiv,
  wrapper,
  subwrapper,
  content,
  text,
  title,
  subtitle,
  ul
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'

const RadiofrekvencijskaTerapija = () => {
  return (
    <div>
      <Head>
        <title>Usmjerena radiofrekvencijska terapija | Vrgorac</title>
        <meta
          name="description"
          content="TR terapija je visoko učinkovita u relaksaciji mišića i tretmanima posttraumatskih stanja i najčešće se koristi u sportskoj medicini i fizikalnoj terapiji."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/fizikalna-terapija/usmjerena-radiofrekvencijska-terapija"
        ></link>

        <meta
          name="keywords"
          content="radiofrekvencijska terapija "
        />

        <meta
          property="og:title"
          content="Usmjerena radiofrekvencijska terapija"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="TR terapija je visoko učinkovita u relaksaciji mišića i tretmanima posttraumatskih stanja i najčešće se koristi u sportskoj medicini i fizikalnoj terapiji."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/fizikalna-terapija/usmjerena-radiofrekvencijska-terapija"
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>
                Usmjerena radiofrekvencijska terapija
              </h1>
              <p className={text}>
                Uređaj BTL-6000 TR-Therapy širi elektromagnetsku
                energiju visoke frekvencije u odabrano tkivo i
                uzrokuje selektivnu hipertermiju tkiva.{' '}
                <b>Najčešće indikacije su:</b>
              </p>
              <ul className={ul}>
                <li>lokalizirani grčevi mišića</li>
                <li> “trigger točke”</li>
                <li>mialgija</li>
                <li>tendinitis</li>
                <li>bol u vratu</li>
                <li>posttraumatski edem</li>
              </ul>
              <p className={text}>
                Kombinacijom masaže koju provodi terapeut i djelovanja
                uređaja, ovaj terapijski koncept predstavlja
                najmoderniju vrstu terapije za brze rezultate.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>Klinički učinci</h2>
              <ul className={ul}>
                <li>Opuštanje mišića</li>
                <li>Regeneracija i zacjeljivanje tkiva</li>
                <li>Smanjenje edema</li>
                <li>Ublažavanje bolova</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>Kako izgleda terapija</h2>
              <p className={text}>
                TR-terapija koristi radiofrekvencijsku energiju za
                <b> regeneraciju</b> mišića. To je jedina terapija na
                kojoj možete uživati u kombinaciji elemenata za masažu
                s ugodnim osjećaj zagrijavanja.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                Jeste li kandidat za terapiju?
              </h2>
              <p className={text}>
                Terapija je odlična opcija za sve koji traže rješenja
                za bolne i iscrpljene mišići ili jednostavno one koji
                žele ubrzati regeneraciju mišića nakon intenzivnog
                treninga.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>Koliko traje tretman?</h2>
              <p className={text}>
                Tipičan tretman traje oko 30 minuta i trebat će vam
                oko 5-10 zakazanih sesija dva puta tjedno.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                Koliko brzo ću vidjeti rezultate?
              </h2>
              <p className={text}>
                Osjetit ćete olakšanje mišića već nakon prve sesije.
                Rezultati će se nastaviti poboljšavati u sljedećih
                nekoliko tjedana.
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

export default RadiofrekvencijskaTerapija
