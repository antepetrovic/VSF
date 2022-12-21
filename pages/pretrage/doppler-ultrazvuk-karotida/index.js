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
  ul,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";
import { pretrageList } from "public/utils/ultrazvukColorDoppler";

const CarotidArteries = () => {
  return (
    <div>
      <Head>
        <title>Ultrazvuk karotida: svrha, postupak i rezultati</title>
        <meta
          name="description"
          content="Ultrazvuk karotida je bezbolan i siguran test koji vam može reći imate li sužene ili začepljene karotidne arterije koje povećavaju rizik od moždanog udara."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/doppler-ultrazvuk-karotida"
        ></link>

        <meta
          name="keywords"
          content="ultrazvuk karotida, ultrazvuk arterija"
        />
        <meta property="og:title" content="Ultrazvuk karotida" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ultrazvuk karotida je bezbolan i siguran test koji vam može reći imate li sužene ili začepljene karotidne arterije koje povećavaju rizik od moždanog udara."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/doppler-ultrazvuk-karotida"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Ultrazvuk karotida: svrha, postupak i rezultati",
              url: "https://poliklinikapetrovic.hr/pretrage/doppler-ultrazvuk-karotida",
              description:
                "Ultrazvuk karotida je bezbolan i siguran test koji vam može reći imate li sužene ili začepljene karotidne arterije koje povećavaju rizik od moždanog udara.",
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
              name: "Ultrazvuk karotida: svrha, postupak i rezultati",
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
              <h1 className={title}>Doppler ultrazvuk karotidnih arterija</h1>
              <p className={text}>
                Korištenjem zvučnih valova, ultrazvuk karotida je bezbolan i
                siguran način provjere vaših karotidnih arterija ― koje
                opskrbljuju vaš mozak krvlju.
              </p>
              <p className={text}>
                Ultrazvuk karotidnih arterija koristi se za procjenu glavnih
                arterija vrata koje dovode oksigeniranu krv u mozak. Ponekad se
                ove arterije mogu suziti zbog nakupljanja plaka. Sužavanje
                krvnih žila može povećati rizik od moždanog udara. Ultrazvučni
                pregled karotide može pokazati
                <b> postoje li suženja ili začepljenja</b> u dvjema arterijama
                vrata koje vode do vašeg mozga. Doppler karotida može pomoći
                liječnicima da utvrde rizik od moždanog udara i potrebu za
                preventivnim mjerama.
              </p>
              <p className={text}>
                Kada je potreban ultrazvuk karotida, on bi se trebao
                <b> napraviti u što kraćem roku </b> jer ranija dijagnoza može
                dovesti do ranog liječenja i ponekad spasiti živote.
              </p>
              <p className={text}>
                Ultrazvuk karotida arterija pokazuje vašem liječniku može
                pokazati vašem liječniku:
              </p>
              <ul className={ul}>
                <li>Jesu li karotidne arterije začepljene ili sužene</li>
                <li>Izmjeriti koliko dobro krv teče kroz vaše arterije</li>
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>KADA NAPRAVITI ULTRAZVUK KAROTIDA</h2>
              <p className={text}>
                Ultrazvuk karotidnih arterija je potreban kada vaš liječnik želi
                potražiti krvne ugruške ili naslage masti i kolesterola na
                stijenkama karotidne arterije. Ove naslage mogu ograničiti i na
                kraju blokirati dotok krvi u vaš mozak, lice i vrat. Blokirana
                karotidna arterija može uzrokovati moždani udar.
              </p>
              <ul className={ul}>
                <li>Nakon operacije arterije</li>
                <li>Ako je arterija bila sužena</li>
                <li>Ako imate visok tlak ili kolesterol</li>
                <li>Ako ste imali moždani udar</li>
                <li>Ako idete na operaciju premosnice koronarne arterije</li>
                <li>
                  Ako u obitelji imate povijest moždanih udara ili srčanih
                  bolesti
                </li>
              </ul>
            </div>
            {/* <div className={content}>
              <h2 className={subtitle}>CIJENA ULTRAZVUKA KAROTIDA</h2>
              <p className={text}>
                Cijena ultrazvuka je 350 kn. Ostale cijene možete
                pogledati{' '}
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

export default CarotidArteries;
