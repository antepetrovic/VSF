import React, { Fragment } from "react";
import Head from "components/Head";

import {
  wrapper,
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  subtitle,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";

import { pretrage, pulmologija } from "public/utils/pulmologija";

const Spirometrija = () => {
  return (
    <div>
      <Head>
        <title>Spirometrija s očitanjem pulmologa u Vrgoracu</title>
        <meta
          name="description"
          content="Spirometrija je osnovni test u procjeni funkcije pluća, ne traje dugo, bezbolna je i cijenovno prihvatljiva."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/spirometrija"
        ></link>

        <meta property="og:title" content="spirometrija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Spirometrija je osnovni test u procjeni funkcije pluća, ne traje dugo, bezbolna je i cijenovno prihvatljiva."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/spirometrija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "spirometrija",
              url: "https://poliklinikapetrovic.hr/pretrage/spirometrija",
              description:
                "Spirometrija je osnovni test u procjeni funkcije pluća, ne traje dugo, bezbolna je i cijenovno prihvatljiva.",
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
          <SidePicker list1={pulmologija} title={pulmologija[0].name} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pretrage[0].name}</h1>
              <p className={text}>{pretrage[0].text}</p>
              <p className={text}>
                Testovi funkcije pluća mjere različite parametre, uključujući
                količinu zraka koju možete unijeti u pluća, koliko brzo (i
                koliko) zraka možete ispuhati, koliko su jaki vaši mišići za
                disanje i količinu kisika koju pluća isporučuju krv.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{pretrage[0].subtitle1}:</h2>
              <p className={text}>{pretrage[0].text1}</p>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>CIJENA SPIROMETRIJE</h2>
              <p className={text}>
                Cijena spirometrije iznosi 300 kn.
              </p>
            </div> */}
            <div className={imagesDiv}>
              <img alt={pulmologija[0].name} src={"../images/img6.jpg"} />
              <img alt={pulmologija[0].name} src={"../images/img8.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spirometrija;
