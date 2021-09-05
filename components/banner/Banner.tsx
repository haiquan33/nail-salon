import React from 'react';

export const Banner = (props: any) => {
    return <section id="home">
        <picture>
            <source
                media="(min-width: 769px)"
                srcSet={ '/images/banner-pc.webp' }/>

            <img
                src="/images/banner-mb.webp"
                alt="Vendor Banner"
                data-aos="zoom-in"
                className="w-full"
            />
        </picture>
    </section>
};
