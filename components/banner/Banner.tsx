import React from 'react';

export const Banner = (props: any) => {
    return <section id="home">
        <picture>
            <source
                media="(min-width: 769px)"
                srcSet={ 'https://vnailweb.com/wp-content/uploads/2020/12/Banner-PC-NAILS-KUTE-SPA.jpg.webp' }/>

            <img
                src="https://vnailweb.com/wp-content/uploads/2020/12/Banner-MB-NAILS-KUTE-SPA.jpg.webp"
                alt="Vendor Banner"
                className="w-full"
                loading="lazy"
            />
        </picture>
    </section>
};
