import React from 'react';
import Head from 'next/head';
import { Landing } from './landing';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Nails Kute & Spa of Fleming Island FL 32003 - Best Nail Salon Near Me</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Landing/>
        </div>
    );
}

export default Home
