import React from 'react'
import { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}

export default MyApp
