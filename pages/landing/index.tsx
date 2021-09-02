import React from 'react';
import {
    About,
    Banner,
    Booking,
    Brand,
    FAQ,
    FeatureService,
    Footer,
    Gallery,
    GiftCard,
    Menu,
    Message,
    NavBar,
    Policy,
    Review,
    Reward
} from 'components';

export const Landing = (props: any) => {
    return <>
        {/* Nav bar section */ }
        <NavBar/>

        {/* Banner section */ }
        <Banner/>

        {/* About us section */ }
        <About/>

        {/* Reward */ }
        <Reward/>

        {/* Salon Menu section */ }
        <Menu/>

        {/* Feature products section */ }
        <FeatureService/>

        {/* Brand */ }
        <Brand/>

        {/* Gallery */ }
        <Gallery/>

        {/* GiftCard */ }
        <GiftCard/>

        {/* FAQ */ }
        <FAQ/>

        {/* Message */ }
        <Message/>

        {/* Review */ }
        <Review/>

        {/* Policy */ }
        <Policy/>

        {/* Footer */ }
        <Footer/>

        {/* Booking */ }
        <Booking/>
    </>
}
