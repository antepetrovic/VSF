import React, { useState } from 'react'
import { accordion, panel } from './Accordion.module.scss'

const Accordion = ({ content, title }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <h2
        className={accordion}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
      </h2>
      {isActive && <div>{content}</div>}
      <div className={panel}>
        {/* <ul>
          <li>
            <b>INHALACIJSKI ALERGENI</b>
            <ul></ul>
          </li>
          <li>
            <b>NUTRITIVNI ALERGENI</b>
            <ul></ul>
          </li>
        </ul> */}
      </div>
    </>
  )
}

export default Accordion
