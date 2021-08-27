import { Slick } from 'lib';
import { ISlickData } from 'types';
import { PageHeader } from 'shared';
import { Settings } from '@ant-design/react-slick';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Brand.module.css';

export const Brand = (props: any) => {
    const title = 'What We Use';
    const brands: ISlickData[] = staticData.BRANDS;
    const logoStyle = 'mx-auto object-contain ' + styles['brand-logo'];
    const settings: Settings & { lightBox?: boolean } = {
        slidesToShow: 5,
        className: 'lg:mx-40 md:mx-28',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
        autoplay: false,
        lightBox: false
    };

    return <section id="brands" className="py-5 sm:py-8 lg:py-10 text-white bg-black">
        <div className="container">
            <PageHeader text={ title } className="text-red-600"/>

            <Slick data={ brands } settings={ settings } elementStyle={ logoStyle }/>
        </div>
    </section>
};
