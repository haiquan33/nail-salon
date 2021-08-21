import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { About, Banner, Brand, FeatureService, Menu, NavBar } from 'components';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Nails Kute & Spa of Fleming Island FL 32003 - Best Nail Salon Near Me</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
            </Head>

            {/* Nav bar section*/ }
            <NavBar/>

            {/* Banner section*/ }
            <Banner/>

            {/* About us section*/ }
            <About/>

            {/* Salon Menu section*/ }
            <Menu/>

            {/* Feature products section*/ }
            <FeatureService/>

            {/* Feature products section*/ }
            <Brand/>
        </div>
    );
}

export default Home
