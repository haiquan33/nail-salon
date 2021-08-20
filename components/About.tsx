import React from 'react';
import styles from 'styles/components/About.module.css';

export const About = (props: any) => {
    const aboutUs = `
        Nails Kute & Spa memorable spa time in Fleming Island, Florida. Our peaceful and
        welcoming setting makes sure that you can enjoy relaxing moments while getting your
        favorite nail services done. Our highly-qualified nail technicians will ensure that
        all the services are done in the most perfect and caring manner so that you are
        completely satisfied with the experience. From pedicures to manicures and nail
        extensions, we do all the services according to your specifications and
        requirements. Customer satisfaction is our ultimate priority as we promise to never
        let anyone down. Come and experience high-quality nail services with Nails
        Kute & Spa. Hurry up! Make your appointment now.
    `;

    return <section id="about" className="py-5 py-sm-8 py-lg-10 bg-red-700">
        <div className="container">
            <h1 className="text-center text-white mb-6 mb-lg-10 font-lobster section-head">
                A Salon with a Touch of Luxury
            </h1>

            <div className="flex items-center justify-center">
                <div className={ styles['flex-item-60'] }>
                    <img
                        src="https://vnailweb.com/wp-content/uploads/2020/11/kute.jpg"
                        alt="..."
                    />
                </div>

                <div className={ styles['flex-item-60'] }>
                    <h3 className={ `
                        text-white
                        text-center
                        mb-3
                        mb-sm-6 
                        mx-auto 
                        d-none 
                        d-md-block 
                        font-lobster 
                        ${ styles['fs-xxl'] }
                    ` }
                    >
                        About Us
                    </h3>

                    <div className="intro_desc lh-16 text-white content-text mb-2">
                        <p>{ aboutUs }</p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
