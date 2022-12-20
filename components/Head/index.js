import React from 'react'
import Head from 'next/head'

const HeadComponent = ({ children }) => {
  return (
    <Head>
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {children}
    </Head>
  )
}

export default HeadComponent
