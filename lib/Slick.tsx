import Slider, { Settings } from '@ant-design/react-slick';
import { ISlickData } from 'types';

interface ISlickProps {
    data: ISlickData[];
    settings?: Settings;
    elementStyle?: string;
}

export const Slick = (
    { data, settings = {}, elementStyle = 'mx-auto ' }: ISlickProps
) => {
    const items: ISlickData[] = data;

    const defaultSettings: Settings = {
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
        ],
        arrows: false,
    };

    const sliderSettings: Settings = { ...defaultSettings, ...settings };

    const sliderItem = items.map((item, index) => {
        return <div key={ index + 1 } className="px-4">
            <div className="mx-auto p-0.5">
                <img src={ item.img } alt={ item.title } className={ elementStyle }/>
            </div>

            <h2 className="text-lg text-red-600 mt-2">{ item.title }</h2>
        </div>;
    });

    return <Slider { ...sliderSettings }>
        { sliderItem }
    </Slider>;
};
