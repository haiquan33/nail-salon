import { useState } from 'react';
import { IFeatureProduct, ISlickData } from 'types';
import { SubMenu } from 'components/menu/components';
import Slider, { Settings } from '@ant-design/react-slick';

interface ISlickProps {
    data: ISlickData[];
    settings?: Settings & { lightBox?: boolean };
    elementStyle?: string;
}

interface ISubData {
    title: string;
    subTitle?: string;
    content: Partial<IFeatureProduct[]>;
}

export const Slick = (
    { data, settings = {}, elementStyle = 'mx-auto ' }: ISlickProps
) => {
    const [visible, setVisible] = useState(false);

    const [subData, setSubData] = useState<ISubData>({
        title: '',
        subTitle: '',
        content: []
    });

    const callbackFunc = (visible: boolean) => setVisible(visible);

    const items: ISlickData[] = data;

    const defaultSettings: Settings & { lightBox?: boolean } = {
        className: 'mb-4',
        autoplay: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        arrows: false,
        lightBox: true
    };

    const sliderSettings: Settings & { lightBox?: boolean } = { ...defaultSettings, ...settings };

    const itemClick = (item: ISlickData) => {
        if (sliderSettings.lightBox) {
            setVisible(true);
            setSubData({
                title: item.title,
                subTitle: item.subTitle,
                content: item.submenu || []
            });
        }
    };

    const sliderItem = items.map((item, index) => {
        return <div key={ index + 1 } className="px-2 mb-3 sm:px-4">
            <div className="mx-auto p-0.5 border border-dotted" onClick={ () => itemClick(item) }>
                <img src={ item.img } alt={ item.title } className={ `${ elementStyle }` }/>
            </div>

            <h2 className="sm:text-lg text-red-600 mt-2">{ item.title }</h2>
        </div>;
    });

    return (
        <>
            <Slider { ...sliderSettings }>
                { sliderItem }
            </Slider>

            <SubMenu visible={ visible } data={ subData } setVisible={ callbackFunc }/>
        </>
    );
};
