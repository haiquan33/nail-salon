import Slider, { Settings } from '@ant-design/react-slick';

interface ISalonMenu {
    title: string;
    img: string;
}

export const Slick = ({ data }: { data: ISalonMenu[] }) => {
    const items: ISalonMenu[] = data;
    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
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
    const sliderItem = items.map((item, index) => {
        return <div key={ index + 1 } className="p-2">
            <img src={ item.img } alt={ item.title }/>
            <h2 className="text-red-600 mt-2">{ item.title }</h2>
        </div>;
    });

    return <Slider { ...settings }>
        { sliderItem }
    </Slider>;
};
