import { Slick } from 'lib';
import { ISlickData } from 'types';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Brand.module.css';

export const Brand = (props: any) => {
    const brands: ISlickData[] = staticData.BRANDS;
    const logoStyle = 'mx-auto ' + styles['brand-logo'];

    return <section id="brands" className="py-5 sm:py-8 lg:py-10 text-white bg-black">
        <div className="container">
            <h4 className="text-center text-red-600 font-lobster section-head mb-6 lg:mb-10">
                What We Use
            </h4>

            <div className="w-9/12 mx-auto">
                <Slick data={ brands } settings={ { slidesToShow: 5 } } elementStyle={ logoStyle }/>
            </div>
        </div>
    </section>
};
