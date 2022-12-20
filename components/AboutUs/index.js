import React from 'react'
import { aboutUs } from './AboutUs.module.scss'

function AboutUs() {
  return (
    <div>
      <div className={aboutUs}>
        <span>Dr. Petrović</span>
        <b>O NAMA</b>
        <p>
          Poliklinika za neurologiju, otorinolaringologiju,
          kardiologiju i pulmologiju Petrović je moderna ustanova koja
          u svom radu uz individualni pristup koristi najmodernije
          uređaje i najnovije metode rada s pacijentima.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
