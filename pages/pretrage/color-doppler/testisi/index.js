import React from "react";
import Head from "components/Head";

import {
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";
import { pretrageList } from "public/utils/ultrazvukColorDoppler";

const ColorDopplerTestisa = () => {
  return (
    <div>
      <Head>
        <title>Color doppler testisa Vrgorac</title>
        <meta
          name="description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler testisa. Color doppler testisa je bezbolna,
          neinvazivna dijagnostička metoda, kojom se mjeri
          protok krvi kroz krvne žile testisa. Ovom metodom se
          mogu otkriti suženja krvnih žila ili njihova
          proširenja."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/color-doppler/testisi"
        ></link>
        <meta name="keywords" content="" />
        <meta property="og:title" content="Color doppler testisa" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler testisa. Color doppler testisa je bezbolna,
          neinvazivna dijagnostička metoda, kojom se mjeri
          protok krvi kroz krvne žile testisa. Ovom metodom se
          mogu otkriti suženja krvnih žila ili njihova
          proširenja."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/color-doppler/testisi"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Color doppler testisa",
              url: "https://poliklinikapetrovic.hr/pretrage/color-doppler/testisi",
              description:
                "U Poliklinici Petrović u Vrgoracu možete napraviti Color doppler testisa. Color doppler testisa je bezbolna, neinvazivna dijagnostička metoda, kojom se mjeri protok krvi kroz krvne žile testisa. Ovom metodom se mogu otkriti suženja krvnih žila ili njihova proširenja.",
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
              <h1 className={title}>Color doppler testisa</h1>
              <p className={text}>
                Color doppler testisa je bezbolna, neinvazivna dijagnostička
                metoda, kojom se mjeri protok krvi kroz krvne žile testisa. Ovom
                metodom se mogu otkriti suženja krvnih žila ili njihova
                proširenja.
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
              <h2 className={title}>
                {"Kako se pripremiti za color doppler"}:
              </h2>
              <p className={text}>
                Color doppler pretraga ne zahtjeva dodatne pripreme. Sam pregled
                traje kratko. Nakon pregleda radiolog očitava nalaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDopplerTestisa;
