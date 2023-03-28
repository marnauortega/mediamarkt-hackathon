import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CarrierX · Mediamarkt</title>
        <meta name="description" content="CarrierX - Mediamarkt" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
