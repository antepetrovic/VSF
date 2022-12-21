import React, { Fragment } from "react";
import Head from "components/Head";

import {
  wrapper,
  ul,
  subwrapper,
  content,
  text,
  title,
  subtitle,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";
import { pretrageList, kardioloskiPregled } from "public/utils/kardiologija";

const Kardiologija = () => {
  return (
    <div>
      <Head>
        <title>Privatni pregled kardiologa Vrgorac</title>
        <meta
          name="description"
          content="U našoj poliklinici možete obaviti kardiološki pregled, a po potrebi EKG srca i ultrazvuk srca."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/kardioloski-pregled"
        ></link>
        <meta
          property="og:title"
          content="Kardiolog Poliklinika Petrović Vrgorac"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite kompletan kardiološki pregled i pretrage ultrazvuk srca, ekg, holter srca, holter tlaka i ergometriju."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/kardioloski-pregled"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Pregled kardiologa",
              url: "https://poliklinikapetrovic.hr/kardioloski-pregled",
              description:
                "Napravite kompletan kardiološki pregled i pretrage ultrazvuk srca, ekg, holter srca, holter tlaka i ergometriju.",
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
              name: "EMNG ruku i nogu",
              datePublished: "2022-11-21",
              url: "https://poliklinikapetrovic.hr/kardioloski-pregled",
            }),
          }}
        />
      </Head>
      <div id={"main-container"}>
        <div className={wrapper}>
          <SidePicker title={"Kardiologija"} list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{kardioloskiPregled.title}</h1>
              <p className={text}>
                Kardiološki pregled je bezbolan i nije potrebna nikakava posebna
                priprema prije dolaska, a u pregledu se koristi EKG uređaj koji
                grafički prikazuje rad srca u mirovanju i može otkriti razne
                srčane bolesti. Ako liječnik smatra da je potrebno može se
                napraviti i ultrazvuk srca, holter srca i ergometrija
              </p>
            </div>

            <div className={content}>
              <h2 className={subtitle}>
                {kardioloskiPregled.kadaOticiNaPregled.title}
              </h2>
              <p className={text}>
                {kardioloskiPregled.kadaOticiNaPregled.text}
              </p>
              <p className={text}>
                {" "}
                {kardioloskiPregled.kadaOticiNaPregled.text1}
              </p>
              <ul className={ul}>
                {kardioloskiPregled.kadaOticiNaPregled.list.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className={content}>
              <h2 className={subtitle}>
                {kardioloskiPregled.stoObuhvacaPregled.title}
              </h2>
              <ul className={ul}>
                {kardioloskiPregled.stoObuhvacaPregled.list.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kardiologija;
