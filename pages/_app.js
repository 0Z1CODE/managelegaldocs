import '../public/css/bootstrap.min.css';
import '../public/css/animate.css';
import '../public/css/icofont.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/style.css';

// Default Color
import '../public/color/color-default.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Legal Docs  - You Best App</title>
                </Head>

                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}