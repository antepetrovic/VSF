import Head from 'components/Head'
import {
  subwrapper,
  content,
  wrapper,
  title,
  accordionWrapper
} from 'pages/Global.module.scss'
import SidePicker from 'components/UI/SidePicker'
import Accordion from 'components/UI/Accordion'
import { laboratorijskePretrage } from 'public/utils/laboratorij'

const Laboratorij = () => {
  return (
    <div>
      <Head>
        <title>
          Privatni mikrobiološki i medicinsko biokemijski laboratorij
        </title>
        <meta
          name="description"
          content="Napravite ultrazvuk, abdomena, dojki, srca, color doppler žila vrata i color doppler arterija i vena nogu i ruku."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr/laboratorij"
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
          content="https://poliklinikapetrovic.hr/laboratorij"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Service',
              serviceType: 'Laboratorij',
              url: 'https://poliklinikapetrovic.hr/laboratorij',
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
              name: 'Laboratorij',
              datePublished: '2022-11-11',
              url: 'https://poliklinikapetrovic.hr/pretrage/laboratorij'
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={wrapper}>
          {/* <SidePicker list1={pretrageList} /> */}
          <div className={subwrapper}>
            <div className={content}>
              <h1 className={title}>Laboratorij</h1>
              <div className={content}>
                <div className={accordionWrapper}>
                  {laboratorijskePretrage.map(({ title }, i) => (
                    <Accordion key={i} title={title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Laboratorij
