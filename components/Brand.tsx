import { Slick } from 'lib';
import { ISlickData } from 'types';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Brand.module.css';
import { Settings } from '@ant-design/react-slick';

export const Brand = (props: any) => {
    const brands: ISlickData[] = staticData.BRANDS;
    const logoStyle = 'mx-auto ' + styles['brand-logo'];
    const settings: Settings = {
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
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return <section id="brands" className="py-5 sm:py-8 lg:py-10 text-white bg-black">
        <div className="container">
            <h4 className="text-center text-red-600 font-lobster section-head mb-6 lg:mb-10">
                What We Use
            </h4>

            <Slick
                data={ brands }
                settings={ settings }
                elementStyle={ logoStyle }
            />
        </div>
    </section>
};
