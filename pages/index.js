import AboutUs from 'components/AboutUs'
import ContactUs from 'components/ContactUs'
import {
  homepageServicesTitle,
  reference,
  headline
} from 'pages/Global.module.scss'
import dynamic from 'next/dynamic'
const Services = dynamic(() => import('components/Services'))
const Head = dynamic(() => import('components/Head'))

const Home = () => {
  return (
    <div>
      <Head>
        <title>Poliklinika Petrović Vrgorac</title>
        <meta
          name="description"
          content="Poliklinika Petrović za psihijatriju, neurologiju, otorinolaringologiju, kardiologiju i pulmologiju je moderna ustanova koja u svom radu uz individualni pristup koristi najmodernije uređaje i najnovije metode rada s pacijentima."
        />
        <link
          rel="canonical"
          href="https://poliklinikapetrovic.hr"
        ></link>

        <meta
          property="og:title"
          content="Poliklinika Petrović Vrgorac"
        />
        <meta
          property="og:image"
          content="https://poliklinikapetrovic.hr/images/img4.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Poliklinika za neurologiju, otorinolaringologiju, kardiologiju i pulmologiju Petrović je moderna ustanova koja u svom radu uz individualni pristup koristi najmodernije uređaje i najnovije metode rada s pacijentima."
        />
        <meta
          property="og:url"
          content="https://poliklinikapetrovic.hr"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Poliklinika Petrović',
              address: {
                streetAddress: 'Ulica Tina Ujevića 15',
                addressLocality: 'Vrgorac',
                addressRegion: 'Vrgorac',
                postalCode: '10000',
                addressCountry: 'HR'
              },
              image: 'https://poliklinikapetrovic.hr/images/img1.jpg',
              email: 'vrgorac@poliklinikapetrovic.com',
              telephone: '+38513776996',
              url: 'https://poliklinikapetrovic.hr/',
              sameAs: [
                'https://www.facebook.com/PoliklinikaPetrovic'
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '45.810003',
                longitude: '15.953438'
              },
              openingHours: ['Po-Pe 10:00-22:00']
            })
          }}
        />
      </Head>
      <div id={'main-container'}>
        <div className={homepageServicesTitle}>
          <span className={reference}>Vrhunske reference</span>
          <b className={headline}>DJELATNOSTI</b>
        </div>
        <Services />
        <ContactUs />
        <AboutUs />
      </div>
    </div>
  )
}

export default Home
