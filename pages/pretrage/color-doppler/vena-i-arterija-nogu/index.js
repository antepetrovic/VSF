import React, { Fragment } from "react";
import Head from "components/Head";

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";
import { pretrageList } from "public/utils/ultrazvukColorDoppler";

const ColorDopplerNogu = () => {
  return (
    <div>
      <Head>
        <title>Color doppler arterija i vena nogu Vrgorac</title>
        <meta
          name="description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler arterija i vena nogu.  Color doppler krvnih žila nogu je bezbolna,
          neinvazivna dijagnostička metoda, kojom se mjeri
          protok krvi kroz krvne nogu."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/color-doppler/vena-i-arterija-nogu"
        ></link>
        <meta name="keywords" content="neurolog, neurologija, emng" />
        <meta property="og:title" content="EMNG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler arterija i vena nogu.  Color doppler krvnih žila nogu je bezbolna,
          neinvazivna dijagnostička metoda, kojom se mjeri
          protok krvi kroz krvne nogu."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/color-doppler/vena-i-arterija-nogu"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "EMNG",
              url: "https://poliklinikapetrovic.hr/pretrage/color-doppler/vena-i-arterija-nogu",
              description:
                "U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler arterija i vena nogu.  Color doppler krvnih žila nogu je bezbolna, neinvazivna dijagnostička metoda, kojom se mjeri protok krvi kroz krvne nogu.",
              provider: {
                "@type": "MedicalBusiness",
                name: "Poliklinika Petrović",
                image: "https://poliklinikapetrovic.hr/images/img7.jpg",
                priceRange: "By Appointment",
                telephone: "+38513776996",
                hasMap: "https://goo.gl/maps/syAWnYFwxPS3qnq67",
                address: {
                  streetAddress: "Ulica Tina Ujevića 15",
                  addressLocality: "Vrgorac",
                  addressRegion: "Vrgorac",
                  postalCode: "10000",
                  addressCountry: "HR",
                },
              },
            }),
          }}
        />
      </Head>

      <div id={"main-container"}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>Color doppler arterija i vena nogu</h1>
              <p className={text}>
                Color doppler krvnih žila nogu je bezbolna, neinvazivna
                dijagnostička metoda, kojom se mjeri protok krvi kroz krvne
                nogu. Ovom metodom se mogu otkriti suženja krvnih žila ili
                njihova proširenja (aneurizme). Na arterijama se mogu vidjeti
                naslage ili plakovi koji sužavaju krvnu žilu.
              </p>
            </div>
            <div className={content}>
              <h2 className={title}>Color dopplerom možemo otkriti:</h2>
              <ul className={ul}>
                <li>Suženje ili začepljenje žila</li>
                <li>Patološko proširenje zidova (aneurizma)</li>
                <li>
                  Arteriovensku fistulu (nenormalni kanal između arterije i
                  vene)
                </li>
                <li>Prohodnost i funkcionalnost arterija i vena</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={title}>Kada napraviti color doppler:</h2>
              <ul className={ul}>
                <li>Suženje ili začepljenje žila</li>
                <li>Patološko proširenje zidova (aneurizma)</li>
                <li>
                  Arteriovensku fistulu (nenormalni kanal između arterije i
                  vene)
                </li>
                <li>Prohodnost i funkcionalnost arterija i vena</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={title}>
                {"Kako se pripremiti za color doppler"}:
              </h2>
              <p className={text}>
                Color doppler pretraga ne zahtjeva dodatne pripreme. Sam pregled
                traje kratko. Nakon pregleda radiolog očitava nalaz.
              </p>
            </div>
            {/* <div className={content}>
              <h2 className={title}>{'Cijena color dopplera'}:</h2>
              <p className={text}>Cijena CD po udu iznosi 200kn.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDopplerNogu;
