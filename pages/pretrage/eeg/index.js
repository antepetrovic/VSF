import React, { Fragment } from "react";
import Head from "components/Head";
import {
  imagesDiv,
  subwrapper,
  content,
  text,
  wrapper,
  ul,
  title,
  subtitle,
} from "pages/Global.module.scss";
import SidePicker from "components/UI/SidePicker";

import { neurologija, pretrage } from "public/utils/neurologija";

const Eeg = () => {
  return (
    <div>
      <Head>
        <title>EEG glave</title>
        <meta
          name="description"
          content="U našoj Poliklinici možete napraviti EEG glave, nalaz EEG-a će Vam očitati neurolog kod kojega možete obaviti i neurološki pregled."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/pretrage/eeg"
        ></link>

        <meta name="keywords" content="neurolog, neurologija, eeg" />
        <meta property="og:title" content="EEG pregled" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="EEG snimanje provodi stručno medicinsko osoblje uz brze rezultate. Prepustite se u ruke vrhunskih dijagnostičara. Dijagnostika i rješenje na jednom mjestu! Najbolja oprema."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/pretrage/eeg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              serviceType: "EEG",
              url: "https://poliklinikapetrovic.hr/pretrage/eeg",
              description:
                "U našoj Poliklinici možete napraviti EEG glave, nalaz EEG-a će Vam očitati neurolog kod kojega možete obaviti i neurološki pregled.",
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
              name: "EEG glave",
              datePublished: "2022-11-08",
              url: "https://poliklinikapetrovic.hr/pretrage/eeg",
            }),
          }}
        />
      </Head>
      <div id={"main-container"}>
        <div className={wrapper}>
          <SidePicker list1={neurologija} title={"EEG"} />
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>{pretrage[1].name}:</h1>
              <p className={text}>
                EEG je pretraga koja snima moždanu aktivnost, te pomoću nje
                možemo detektirati promjene moždane aktivnosti i tako
                dijagnosticirati moždane poremećaje. EEG se koristi kod
                dijagnosticiranja, praćenja i liječenja određenih neuroloških
                bolesti. Radi se pomoću malih posloženih elektrodica koje se
                stavljaju na glavu. Pretraga je bezbolna i sigurna, a pacijent
                koji dolazi potrebno je da napravi pripremu u vidu pranja kose.
                EEG je jedan od glavnih dijagnostičkih testova za{" "}
                <b>epilepsiju</b>. EEG također može igrati ulogu u
                dijagnosticiranju drugih moždanih poremećaja.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>KADA JE POTREBAN EEG</h2>
              <p className={text}>
                EEG može pronaći promjene u moždanoj aktivnosti koje bi mogle
                biti korisne u dijagnosticiranju moždanih poremećaja, osobito
                epilepsije ili drugog poremećaja napadaja. EEG također može biti
                od pomoći za dijagnosticiranje ili liječenje:
              </p>
              <ul className={ul}>
                {pretrage[1].list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={content}>
              <h2 className={subtitle}>RIZICI</h2>
              <p className={text}>
                EEG je siguran i bezbolan. Ponekad se napadaji namjerno pokreću
                kod osoba s epilepsijom tijekom testa, ali se po potrebi pruža
                odgovarajuća medicinska njega.
              </p>
            </div>
            <div className={content}>
              <h2 className={subtitle}>PRIPREMA ZA EEG</h2>
              <p className={text}>
                Uzimajte svoje uobičajene lijekove osim ako vam nije drugačije
                rečeno.
              </p>
              <ul className={ul}>
                <li>
                  Operite kosu večer prije ili na dan testa, ali nemojte
                  koristiti kreme za kosu, sprejeve ili gelove za oblikovanje.
                  Proizvodi za kosu mogu otežati prianjanje elektroda na
                  vlasište.
                </li>
                <li>
                  Ako biste trebali spavati tijekom EEG-a, vaš će vas liječnik
                  zamoliti da spavate manje ili izbjegavate spavanje noć prije
                  EEG-a.
                </li>
              </ul>
            </div>

            <div className={content}>
              <h2 className={subtitle}>KAKO IZGLEDA EEG PRETRAGA</h2>
              <p className={text}>
                Osjećat ćete malu ili nikakvu nelagodu tijekom EEG-a. Elektrode
                ne prenose nikakve osjete. One samo snimaju vaše moždane valove.
              </p>
              <ul className={ul}>
                <li>
                  Tehničar mjeri vašu glavu i posebnom olovkom označava vaše
                  tjeme kako bi označio gdje pričvrstiti elektrode. Ta se mjesta
                  na tjemenu mogu istrljati hrapavom kremom kako bi se
                  poboljšala kvaliteta snimke.
                </li>
                <li>
                  Tehničar postavlja elastičnu kapicu opremljenu elektrodama.
                  Elektrode su žicama spojene na instrument koji pojačava
                  moždane valove i snima ih na računalnoj opremi.
                </li>
                <li>
                  Nakon što su elektrode postavljene, EEG obično traje između 20
                  i 40 minuta.
                </li>
                <li>
                  Opustite se u udobnom položaju zatvorenih očiju tijekom testa.
                  U različitim trenucima, tehničar bi od vas mogao tražiti da
                  otvorite i zatvorite oči, duboko dišete nekoliko minuta ili
                  gledate u bljeskajuće svjetlo.
                </li>
              </ul>
            </div>

            {/* <div className={content}>
              <h2 className={subtitle}>CIJENA EEG PREGLEDA:</h2>
              <p className={text}>Cijena EEG glave iznosi 350 kn.</p>
              <div className={imagesDiv}>
                <img
                  alt={pretrage[1].name}
                  src={'../images/img6.jpg'}
                />
                <img
                  alt={pretrage[1].name}
                  src={'../images/img8.jpg'}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eeg;
