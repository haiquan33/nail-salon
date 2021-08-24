import { DollarOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { IFeatureProduct } from 'types';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/FeatureService.module.css';

export const FeatureService = (props: any) => {
    const products: IFeatureProduct[] = staticData.FEATURED_PRODUCTS;
    const product = products.map((prod, index) => {
        return <div key={ index + 1 } className="mb-4 sm:mb-6 lg:ml-10">
            <Badge.Ribbon text={ prod.type } color="black">
                <div className="flex gap-4">
                    {/* Thumbnail */ }
                    <div className="mr-sm-2 md:mr-0 lg:mr-2">
                        <div className={ styles.thumb }>
                            <img src={ prod.img } alt="..." className={ styles.img }/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        {/* Title */ }
                        <h3 className="mb-2 text-white font-bold lg:text-lg">{ prod.title }</h3>

                        {/* Price */ }
                        <div className="meta d-flex flex-wrap">
                            <div className="flex mr-3 mb-2 text-white">
                                <DollarOutlined className="mt-2 mr-1"/>
                                <span className="mt-1 mr-2">{ prod.price }</span>
                                {/*<Tag className="text-base bg-red border-0">{ prod.type }</Tag>*/}
                            </div>
                        </div>

                        {/* Description */ }
                        <div className="text-white italic font-thin">
                            { prod.description }
                        </div>
                    </div>
                </div>
            </Badge.Ribbon>
        </div>
    });

    return <section id="featured_products" className="py-5 sm:py-8 lg:py-10 bg-red">
        <div className="container">
            <h4 className="text-center text-white font-lobster section-head mb-6 sm:mb-6 lg:mb-10">
                Most Wanted Services
            </h4>

            <div className="grid lg:grid-cols-2 gap-4 lg:mx-24">
                { product }
            </div>
        </div>
    </section>
};
