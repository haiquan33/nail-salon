import React from 'react';
import { Slick } from 'lib';
import staticData from 'static/assets/data.json';

export const Menu = (props: any) => {
    const items = staticData.SALON_MENU_IMAGES;

    return <section id="services" className="py-5 sm:py-8 lg:py-10 text-white text-center bg-black">
        <div className="container">
            <h4 className="text-center text-red-600 font-lobster section-head mb-6 lg:mb-10">
                Salon Menu
            </h4>

            <Slick data={ items }/>
        </div>
    </section>;
};
