import React, { Fragment } from "react";
import Head from "components/Head";
import {
  subwrapper,
  content,
  text,
  wrapper,
  ul,
  title,
  subtitle,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";

import {
  urologija,
  urologijaPregledi,
  uroloskiPregled,
} from "public/utils/urologija";

const Urologija = () => {
  return (
    <div>
      <Head>
        <title>Privatni urološki pregled (Pregled urologa)</title>
        <meta
          name="description"
          content="Napravite kompletan urološki pregled i pretrage ultrazvuk urotrakta, transrektalni ultrazvuk prostate i mokraćnog mjehura i urodinamiku urotrakta."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/uroloski-pregled"
        ></link>

        <meta property="og:title" content="Urologija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite kompletan urološki pregled i pretrage ultrazvuk urotrakta, transrektalni ultrazvuk prostate i mokraćnog mjehura i urodinamiku urotrakta."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/urologija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Urološki pregled",
              url: "https://poliklinikapetrovic.hr/uroloski-pregled",
              description:
                "Napravite kompletan urološki pregled i pretrage ultrazvuk urotrakta, transrektalni ultrazvuk prostate i mokraćnog mjehura i urodinamiku urotrakta.",
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
          <SidePicker title={urologija[0].name} list1={urologijaPregledi} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{uroloskiPregled.title}:</h1>
              <p
                className={text}
                dangerouslySetInnerHTML={{
                  __html: uroloskiPregled.text,
                }}
              />
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {uroloskiPregled.pregledZaZene.title}
              </h2>
              <p className={text}>{uroloskiPregled.pregledZaZene.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>
                {uroloskiPregled.pregledZaMuskarce.title}
              </h2>
              <p className={text}>{uroloskiPregled.pregledZaMuskarce.text}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{uroloskiPregled.subtitle1}</h2>
              <p className={text}>{uroloskiPregled.text1}</p>
              <p className={text}>
                Urologu se obratite kada imate jedan od sljedećih simtoma:
              </p>
              <ul className={ul}>
                {uroloskiPregled.list1.map((item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                  ></li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{uroloskiPregled.subtitle2}</h2>
              <p className={text}>{uroloskiPregled.text2}</p>
              <p className={text}>{uroloskiPregled.text3}</p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>{uroloskiPregled.subtitle3}</h2>
              <p className={text}>{uroloskiPregled.text5}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urologija;
