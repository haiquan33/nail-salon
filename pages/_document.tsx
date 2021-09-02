import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/css?family=Lobster&display=optional" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=optional" rel="stylesheet"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
