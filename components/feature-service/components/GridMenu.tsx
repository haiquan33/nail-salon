import { Badge, Popover, Tag } from 'antd';
import { IBaseProps, IFeatureProduct } from 'types';
import { DollarOutlined } from '@ant-design/icons';
import styles from 'styles/components/FeatureService.module.css';

interface IGridMenuProps extends IBaseProps {
    data: IFeatureProduct[];
}

export const GridMenu = ({ data, containerClassName }: IGridMenuProps) => {
    const element = data.map((item, index: number) => {
        const ele = <div key={ index + 1 } className="mb-6 lg:ml-10">
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
        </div>;

        const popTitle = (item: IFeatureProduct) =>
            <div className="flex justify-between text-2xl text-red-600">
                <div className="flex gap-4 font-lobster">
                    <div className="w-6 h-6 mt-1 bg-red-600 border rounded-full"/>
                    { item?.title }
                </div>
                <span className="font-lobster">${ item?.price }</span>
            </div>;

        const popContent = (item: IFeatureProduct) => {
            return <div className="text-sm text-white font-thin">
                {
                    item.title === 'Luxury Pedicure' || item.title==='Luxury Manicure'
                        ? <>
                            <span className="font-bold italic">
                            [Scent options: Japanese Cherry Blossom, Hawaii Citrus, Peony Orchid, Melon Mango, Magnolia
                            Lychee Raspberry, French Lavender, Jasmine, Mother Of Pearl, Vervain].
                        </span> { item.popContent }
                        </>
                        : item.popContent
                }
            </div>;
        }

        return item?.popContent
            ? <Popover
                key={ index + 1 }
                placement="bottom"
                overlayInnerStyle={ { background: '#383838', borderRadius: '10px' } }
                overlayStyle={ { maxWidth: '450px' } }
                title={ () => popTitle(item) }
                content={ () => popContent(item) }
                trigger="click"
            >
                { ele }
            </Popover>
            : ele
    });

    return <div className={ `sm:grid lg:grid-cols-2 gap-4 ${ containerClassName }` }>
        { element }
    </div>
}
