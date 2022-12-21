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
  linkRed,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";
import { pretrageList } from "public/utils/evociraniPotencijali";

const VidniEvocirani = () => {
  return (
    <div>
      <Head>
        <title>Vidni evocirani potencijali VEP</title>
        <meta
          name="description"
          content="Test evociranog vizualnog potencijala (VEP) koristi se kada imate probleme sa vidom koji mogu biti izazvani promjenama na očnom živcu. VEP - om  se provjerava put optičkog živca koji ide od očiju do mozga."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/vidni-evocirani-potencijali"
        ></link>
        <meta name="keywords" content="Vidni evocirani potencijali VEP" />
        <meta property="og:title" content="Vidni evocirani potencijali" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Test evociranog vizualnog potencijala (VEP) koristi se kada imate probleme sa vidom koji mogu biti izazvani promjenama na očnom živcu. VEP - om  se provjerava put optičkog živca koji ide od očiju do mozga."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/vidni-evocirani-potencijali"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Vidni evocirani potencijali VEP",
              url: "https://poliklinikapetrovic.hr/pretrage/evocirani-potencijali/vidni-evocirani-potencijali",
              description:
                "Test evociranog vizualnog potencijala (VEP) koristi se kada imate probleme sa vidom koji mogu biti izazvani promjenama na očnom živcu. VEP - om  se provjerava put optičkog živca koji ide od očiju do mozga.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebPage",
              name: "Vidni evocirani potencijali VEP",
              datePublished: "2022-12-01",
              url: "https://poliklinikapetrovic.hr/pretrage/doppler-ultrazvuk-karotida",
            }),
          }}
        />
      </Head>
      <div id={"main-container"}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>Vidni evocirani potencijali - VEP</h1>
              <p className={text}>
                Testom evociranog vizualnog potencijala (VEP) provjerava se
                optički živca koji vodi od očiju do mozga.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                KAKO IZGLEDA TESTIRANJE EVOCIRANIH POTENCIJALA VIDA
              </h2>
              <p className={text}>
                Vaš će se vid provjeriti i od vas će se tražiti da pročitate
                očnu kartu. Elektrode će vam se pričvrstiti na glavu. Jedno vaše
                oko bit će prekriveno povezom. Na zaslonu računala će vam se
                prikazani crni i bijeli kvadrati koji nalikuju šahovskoj ploči.
                Vidjet ćete kako se kvadrati kreću i mijenjaju veličinu tijekom
                testa. Dok ovo gledate, signali iz vašeg mozga će se snimati
                kroz elektrode. Svako oko se testira po nekoliko minuta. Test
                traje između 30 - 60 minuta.
              </p>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>CIJENA VEP-a</h2>
              <p className={text}>
                Cijena testiranja vidnih evociranih potencijala je 600
                kn. Ostale cijene možete pogledati{' '}
                <a className={linkRed} href={'/cjenik-usluga'}>
                  ovdje
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidniEvocirani;
