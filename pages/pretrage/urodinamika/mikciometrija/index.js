import Head from "components/Head";

import {
  imagesDiv,
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul,
  subtitle,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";

const listaPregleda = [
  {
    name: "URODINAMIKA",
    url: "/pretrage/urodinamika",
  },
  {
    name: "CISTOMETRIJA",
    url: "/pretrage/urodinamika/cistometrija",
  },
  {
    name: "ELEKTROMIOGRAFIJA",
    url: "/pretrage/urodinamika/elektromiografija-sfinktera",
  },
];

const Mikciometrija = () => {
  return (
    <div>
      <Head>
        <title>Mikciometrija pretraga | Poliklinika Petrović</title>
        <meta
          name="description"
          content="U Poliklinici Petrović napravite mikciometriju, pretragu kojom se mjeri mlaz urina kod
          pacijenta koji učestalo mokri, otežano mokri ili ima
          problema sa inkontinencijom."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/urodinamika/mikciometrija"
        ></link>

        <meta
          name="keywords"
          content="urolog, urologija, urodinamika, mikciometrija"
        />
        <meta property="og:title" content="mikciometrija pretraga" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="U Poliklinici Petrović napravite mikciometriju pretragu kojom se mjeri mlaz urina kod
          pacijenta koji učestalo mokri, otežano mokri ili ima
          problema sa inkontinencijom."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/urodinamika/mikciometrija"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "Mikciometrija",
              url: "https://poliklinikapetrovic.hr/pretrage/urodinamika/mikciometrija",
              description:
                "U Poliklinici Petrović napravite mikciometriju pretragu kojom se mjeri mlaz urina kod pacijenta koji učestalo mokri, otežano mokri ili ima problema sa inkontinencijom.",
              additionalType:
                "https://hr.wikipedia.org/wiki/Urinarna_inkontinencija",
              provider: {
                "@type": "MedicalBusiness",
                name: "Poliklinika Petrović",
                image: "https://poliklinikapetrovic.hr/images/img1.jpg",
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
          <SidePicker list1={listaPregleda} title="UROLOGIJA" />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>MIKCIOMETRIJA</h1>
                <p className={text}>
                  Mikciometrijom (uroflow) se mjeri mlaz urina kod pacijenta
                  koji učestalo mokri, otežano mokri ili ima problema sa
                  inkontinencijom. Mikciometrijom dobivamo uvid u funkciju
                  mokraćnog mjehura i mokraćne cijevi. Metoda je neinvazivna.
                </p>
              </div>
              <div className={content}>
                <h1 className={subtitle}>
                  KADA TREBATE MIKCIOMETRIJU (UROFLOW)
                </h1>
                <ul className={ul}>
                  <li>Učestalo mokrenje</li>
                  <li>Otežano mokrenje</li>
                  <li>Protoku mlaza urina ( Mikciometrija ili uroflow )</li>
                  <li>Kod inkontinencije</li>
                  <li>Kod neurogenong mjehura</li>
                  <li>Nemogućnost potpunog pražnjenja mjehura</li>
                </ul>
              </div>
              <div className={content}>
                <h1 className={subtitle}>KAKO SE PRIPREMITI ZA PRETRAGU</h1>

                <p className={text}>
                  Poželjno je piti tekućinu prije pretrage kako bi mjehur bio
                  pun.
                </p>
              </div>

              <div className={imagesDiv}>
                <img alt="urodinamika" src={"/images/img6.jpg"} />
                <img alt="mikciometrija" src={"/images/img8.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mikciometrija;
