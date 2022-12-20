import React from 'react'
import dynamic from 'next/dynamic'
const Service = dynamic(() => import('./Service'), {
  ssr: false
})
import { services, servicesRow } from './Services.module.scss'

const Services = () => {
  return (
    <div className={services}>
      <div className={servicesRow}>
        <Service
          key={1}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img1_zgc7df.jpg`}
          title={'ORL'}
          text={
            'Uz specijalističke preglede možete obaviti pregled sluha tonalnom audiometrijom slušalicama u “tihoj sobi“. Ispituje se zračna i koštana provodljivost. Ispitivanje se provodi na nekoliko frekvencija, od niskih do visokih tonova. Dobivene točke se spajaju i tako se dobiva grafički prikaz praga sluha - audiogram.'
          }
          pathName={'otorinolaringologija'}
        />
        <Service
          key={2}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img4_mwjng3.jpg`}
          title={'KARDIOLOGIJA'}
          text={
            'Bolesti srca i krvnih žila u današnje vrijeme zahvaćaju sve veći broj ljudi.  Kardiovaskularne bolesti ne treba zanemariti već ih je potrebno na vrijeme dijagnosticirati, poraditi na prevenciji i njihovom liječenju jer to je jedini način koji će promijeniti tijek bolesti i omogućiti nastavak života.'
          }
          pathName={'kardioloski-pregled'}
        />
        <Service
          key={3}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img3_ufhalc.jpg`}
          title={'NEUROLOGIJA'}
          text={
            'U Vrgoracu u našoj Poliklinici napravite specijalistički neurološki pregledi, elektroencefalografija (EEG), te elektromioneurografija (EMNG) ruku i nogu. EMNG je dijagnostički postupak kojim se procjenjuje funkcija perifernog živčanog sustava, a uključuje aktivnosti mišića i živaca koji njima upravljaju.'
          }
          pathName={'neuroloski-pregled'}
        />
        <Service
          key={4}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img2_izzpmf.jpg`}
          title={'NEUROKIRURGIJA'}
          text={
            'Napravite privatni neurokirurški pregled za djecu i odrasle.'
          }
          pathName={'neurokirurgija'}
        />
        <Service
          key={5}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img1_zgc7df.jpg`}
          title={'DERMATOLOGIJA I VENEROLOGIJA'}
          text={
            'Dermatovenerologija je grana medicine koja se bavi istraživanjem, dijagnostikom i liječenjem svih stanja i bolesti kože, sluznica, vlasišta, noktiju i žlijezda, kao i prevencijom i liječenjem spolno prenosivih bolesti i infekcija.'
          }
          pathName={'dermatologija-i-venerologija'}
        />
        <Service
          key={6}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img2_izzpmf.jpg`}
          title={'PULMOLOGIJA'}
          text={
            'Pulmološki pregled obavlja internist sa subspecijalizacijom pulmologa. Služi za dijagnosticiranje i liječenje plućnih bolesti. Pregled počinje s prikupljanjem dosadašnjih podataka o bolesti (simptomi, trajanje), prikupljaju se podatci o postojanju bolesti u obitelji i tako se stvara šira slika o stanju.'
          }
          pathName={'pulmoloski-pregled'}
        />
        <Service
          key={7}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img1_zgc7df.jpg`}
          title={'UROLOGIJA'}
          text={
            'Urološke preglede u našoj poliklinici obavlja dr.sc. Alek Popović dr.med., specijalist urolog. Pregled se temelji na uzimanju anamneze, prikupljanju informacija o urološkim oboljenjima u obitelji, popisom dosadašnjih lijekova i prijašnjih oboljenja.'
          }
          pathName={'uroloski-pregled'}
        />
        <Service
          key={8}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img3_ufhalc.jpg`}
          title={'IMUNOLOGIJA I REUMATOLOGIJA'}
          text={
            'Imunološke preglede u našoj poliklinici obavlja dr. Vinka Vukosav. Reumatologija i imunologija su grane interne medicine koje se bave reumatskim bolestima, njihovim uzrocima, dijagnosticiranjem i liječenjem.'
          }
          pathName={'pregled-imunologa-reumatologa'}
        />
        <Service
          key={9}
          img={`https://res.cloudinary.com/dngwfc7lf/image/upload/v1638523700/img4_mwjng3.jpg`}
          title={'PSIHIJATRIJA'}
          text={
            'Psihijatrijski pregled se odvija kroz razgovor sa psihijatrom. Psihijatar postavlja pitanja kojima pokušava što bolje upoznati pacijentove poteškoće, okolnosti koje su do njih dovele, važne činjenice iz prošlosti povezane sa aktualnim poteškoćama, kao i sve druge činjenice koje su bitne za dijagnosticiranje stanja i primjenu odgovarajuće terapije.'
          }
          pathName={'pregled-psihijatra'}
        />
      </div>
    </div>
  )
}

export default Services
