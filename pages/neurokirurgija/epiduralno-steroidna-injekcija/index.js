import React, { Fragment } from "react";
import Head from "components/Head";

import {
  subwrapper,
  content,
  text,
  title,
  ul,
  subtitle,
  wrapper,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";

import { pretrageList } from "public/utils/neurologija";

import { neurokirurgijaPregled } from "public/utils/neurokirurgija";

const Esi = () => {
  return (
    <div>
      <Head>
        <title>Epiduralno steroidna injekcija (blokada) Vrgorac</title>
        <meta
          name="description"
          content="Epiduralna steroidna injekcija je vrlo efikasna u ublažavanju ili uklanjanju radikularnih bolova, a organizam će sam resorbirati većinu protruzija unutar 6 – 12 mjeseci od njihova nastanka."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/neurokirurgija/epiduralno-steroidna-injekcija"
        ></link>

        <meta name="keywords" content="neurokirurg" />
        <meta property="og:title" content="Neurokirurgija" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Epiduralna steroidna injekcija je vrlo efikasna u ublažavanju ili uklanjanju radikularnih bolova, a organizam će sam resorbirati većinu protruzija unutar 6 – 12 mjeseci od njihova nastanka."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/neurokirurgija/epiduralno-steroidna-injekcija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Pregled neurokirurga",
              url: "https://poliklinikapetrovic.hr/neurokirurgija/epiduralno-steroidna-injekcija",
              description:
                "Epiduralna steroidna injekcija je vrlo efikasna u ublažavanju ili uklanjanju radikularnih bolova, a organizam će sam resorbirati većinu protruzija unutar 6 – 12 mjeseci od njihova nastanka.",
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
          <SidePicker title={"PRETRAGE"} list1={pretrageList} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{neurokirurgijaPregled.subtitle2}:</h1>
              <p className={text}>{neurokirurgijaPregled.text2}:</p>
              <p className={text}>{neurokirurgijaPregled.source}:</p>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>
                KOLIKA JE CIJENA EPIDURALNO STEROIDNA INJEKCIJE?
              </h2>
              <p className={text}>
                Cijena epiduralno steroidne injekcije iznosi 600 kn
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esi;
