import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { About, Banner, Menu, NavBar } from 'components';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
            </Head>

            {/*Nav bar section*/ }
            <NavBar/>

            {/*Banner section*/ }
            <Banner/>

            {/*About us section*/ }
            <About/>

            {/*Salon Menu section*/ }
            <Menu/>
        </div>
    );
}

export default Home
