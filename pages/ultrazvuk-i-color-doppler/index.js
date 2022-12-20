import Head from 'components/Head'
import {
  subwrapper,
  content,
  text,
  title,
  wrapper,
  ul,
  subtitle
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import { pretrageList } from 'public/utils/ultrazvukColorDoppler'

const Radiologija = () => {
  return (
    <div>
      <Head>
        <title>Ultrazvuk i color doppler Vrgorac</title>
        <meta
          name="description"
          content="Napravite ultrazvuk, abdomena, dojki, srca, color doppler žila vrata i color doppler arterija i vena nogu i ruku."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/ultrazvuk-i-color-doppler"
        ></link>

        <meta name="keywords" content="ultrazvuk, color doppler" />
        <meta property="og:title" content="Ultrazvuk" />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Napravite ultrazvuk, abdomena, dojki, srca, color doppler žila vrata i color doppler arterija i vena nogu i ruku."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr/ultrazvuk-i-color-doppler"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Ultrazvuk i color doppler',
              url: 'https://poliklinikapetrovic.hr/ultrazvuk-i-color-doppler',
              description:
                'Napravite ultrazvuk, abdomena, dojki, srca, color doppler žila vrata i color doppler arterija i vena nogu i ruku.',
              provider: {
                '@type': 'MedicalBusiness',
                name: 'Poliklinika Petrović',
                image:
                  'https://poliklinikapetrovic.hr/images/img1.jpg',
                priceRange: 'By Appointment',
                telephone: '+38513776996',
                hasMap: 'https://goo.gl/maps/syAWnYFwxPS3qnq67',
                address: {
                  streetAddress: 'Ulica Tina Ujevića 15',
                  addressLocality: 'Vrgorac',
                  addressRegion: 'Vrgorac',
                  postalCode: '10000',
                  addressCountry: 'HR'
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebPage',
              name: 'Ultrazvuk i color doppler',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/pretrage/ultrazvuk-i-color-doppler'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          <SidePicker list1={pretrageList} title="ULTRAZVUK" />
          <div className={subwrapper}>
            <div className={content}>
              <div className={content}>
                <h1 className={title}>ULTRAZVUK I COLOR DOPPLER</h1>
                <p className={text}>
                  U Poliklinici Petrović možete napraviti veliki
                  spektar ultrazvučnih pretraga. U dijagnostici se
                  koristimo najnovijim ultrazvučnim uređajima.
                </p>
                <p className={text}>
                  U dijagnostici koristimo i <b>Doppler</b> tehniku
                  koja se izvodi uz pomoć ultrazvuka. Dopplerom se
                  mjeri protok krvi kroz krvne žile arterije i vene
                  ruku, nogu, abdomena i vrata. Pregled dopplerom je
                  bezbolan i može se ponavljati. Pregled traje 30
                  minuta nakon kojeg pacijent dobije nalaz i očitanje.
                </p>
              </div>
              <div className={content}>
                <h2 className={subtitle}>ULTRAZVUČNE USLUGE</h2>
                <ul className={ul}>
                  <li>Ultrazvuk srca</li>
                  <li>Ultrazvuk štitnjače</li>
                  <li>Ultrazvuk abdomena</li>
                  <li>Ultrazvuk dojki</li>
                  <li>Ultrazvuk štitnjače</li>
                  <li>Ultrazvuk vrata</li>
                  <li>Ultrazvuk prostate</li>
                  <li>Ultrazvuk bubrega</li>
                  <li>Ultrazvuk urotrakta</li>
                  <li>Ultrazvuk limfnih čvorova</li>
                </ul>
              </div>
              <div className={content}>
                <h2 className={subtitle}>COLOR DOPPLER USLUGE</h2>
                <ul className={ul}>
                  <li>Color doppler vena i arterija ruku i nogu</li>
                  <li>Color doppler žila vrata</li>
                  <li>Color dopler Testisa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radiologija
