import { Badge, Tag } from 'antd';
import { PageHeader } from 'shared';
import { IFeatureProduct } from 'types';
import { DollarOutlined } from '@ant-design/icons';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/FeatureService.module.css';

export const FeatureService = (props: any) => {
    const title = 'Most Wanted Services';
    const products: IFeatureProduct[] = staticData.FEATURED_PRODUCTS;
    const product = products.map((prod, index) => {
        return <div key={ index + 1 } className="mb-4 sm:mb-6 lg:ml-10">
            <Badge.Ribbon text={ prod.type } color="black" className="hidden sm:block">
                <div className="flex gap-4">
                    {/* Thumbnail */ }
                    <div className="sm:mr-2 md:mr-0 lg:mr-2">
                        <div className={ styles.thumb }>
                            <img src={ prod.img } alt={ prod.title } className={ styles.img }/>
                        </div>
                    </div>

                    <div className="flex flex-col sm:justify-center">
                        {/* Title */ }
                        <h3 className="mb-2 text-white font-bold lg:text-lg">{ prod.title }</h3>

                        {/* Price */ }
                        <div className="meta d-flex flex-wrap">
                            <div className="flex mr-3 mb-2 text-white">
                                <DollarOutlined className="mt-1 mr-1 sm:mt-2"/>
                                <span className="sm:mt-1 mr-2">{ prod.price }</span>
                                <Tag className="sm:hidden font-bold bg-red border-0">{ prod.type }</Tag>
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
            <PageHeader text={ title }/>

            <div className="sm:grid lg:grid-cols-2 gap-4 lg:mx-24">
                { product }
            </div>
        </div>
    </section>
};
