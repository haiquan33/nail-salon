import React, { useEffect } from 'react';
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
import Aos from 'aos';

const Landing = (props: any) => {
    useEffect(() => {
        setTimeout(() =>
            Aos.init({
                disable: window.innerWidth < 640,
            })
        )
    });

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

export default Landing;
