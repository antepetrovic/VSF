import {
  noMarginTop,
  map,
  info,
  title,
  block,
  day,
  time,
  contact,
  location,
  phone,
  mail,
  left,
  right
} from './Map.module.scss'
import Phone from 'components/UI/Icons/phone.js'
import Mail from 'components/UI/Icons/mail.js'
import Location from 'components/UI/Icons/location.js'

const Map = ({ hideMarginTop }) => {
  return (
    <div
      id={'map'}
      className={`${map} ${hideMarginTop && noMarginTop}`}
    >
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <div className={info}>
        <div className={left}>
          <h3 className={title}>KONTAKT</h3>
          <div className={contact}>
            <Mail />
            <a href="mailto:vrgorac@poliklinikapetrovic.com">
              vrgorac@poliklinikapetrovic.com
            </a>
          </div>

          <div className={contact}>
            <Phone />
            <a href="tel:+38521674135">021 674 135</a>
          </div>
          <div className={contact}>
            <Location />
            <a href="http://maps.google.com/?q=12 Ulica Tina Ujevića 15, Vrgorac, Croatia, 10000">
              Ulica Tina Ujevića 15, Vrgorac
            </a>
          </div>
        </div>
        <div className={right}>
          <h3 className={title}>RADNO VRIJEME</h3>
          <div className={block}>
            <span className={day}>Pon - Pet</span>
            <span className={time}>6:30 - 21h</span>
          </div>
          <div className={block}>
            <span className={day}>Sub</span>
            <span className={time}>6.30 - 21h</span>
          </div>
          <div className={block}>
            <span className={day}>Ned</span>
            <span className={time}>Ne radimo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
