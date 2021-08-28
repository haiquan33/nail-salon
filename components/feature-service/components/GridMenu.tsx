import { Badge, Tag } from 'antd';
import { IBaseProps, IFeatureProduct } from 'types';
import { DollarOutlined } from '@ant-design/icons';
import styles from 'styles/components/FeatureService.module.css';

interface IGridMenuProps extends IBaseProps {
    data: IFeatureProduct[];
}

export const GridMenu = ({ data, containerClassName }: IGridMenuProps) => {
    const element = data.map((item, index: number) => {
        return <div key={ index + 1 } className="mb-6 lg:ml-10">
            <Badge.Ribbon text={ item.type } color="black" className="hidden sm:block">
                <div className="flex gap-4">
                    {/* Thumbnail */ }
                    <div className="sm:mr-2 md:mr-0 lg:mr-2">
                        <div className={ styles.thumb }>
                            <img src={ item.img } alt={ item.title } className={ styles.img }/>
                        </div>
                    </div>

                    <div className="flex flex-col sm:justify-center">
                        {/* Title */ }
                        <h3 className="mb-2 text-white font-bold sm:mt-2 lg:text-lg">
                            { item.title }
                        </h3>

                        {/* Price */ }
                        <div className="flex flex-wrap-reverse mr-3 mb-2 text-white">
                            <DollarOutlined className="mt-1 mr-1 sm:mt-2"/>
                            <span className="sm:mt-1 mr-2">{ item.price }</span>
                            <Tag className="sm:hidden font-bold bg-red border-0">{ item.type }</Tag>
                        </div>

                        {/* Description */ }
                        <div className="text-white italic font-thin">
                            { item.description }
                        </div>
                    </div>
                </div>
            </Badge.Ribbon>
        </div>
    });

    return <div className={ `sm:grid lg:grid-cols-2 gap-4 ${ containerClassName }` }>
        { element }
    </div>
}
