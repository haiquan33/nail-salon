// @ts-ignore
import Gallery from 'react-grid-gallery';
import { IWorkPagination } from 'types';
import { CSSProperties } from 'react';
import { ImageOptions } from 'typings';
import { matchScreen, MIN_WIDTH_640 } from 'utils';

interface IGridGalleryProps {
    data: IWorkPagination[];
    page: number;
}

export const GridGallery = ({ data, page }: IGridGalleryProps) => {
    const IMAGES = data.find(item => item.page === page)?.works.map(item => (
        {
            src: item,
            thumbnail: item,
            thumbnailWidth: 270,
            thumbnailHeight: 270,
        }
    )) as unknown as ImageOptions[];

    const tileViewportStyle = () => {
        if (matchScreen(MIN_WIDTH_640)) {
            return {
                width: '270px',
                height: '270px',
                margin: 'auto'
            } as CSSProperties;
        }

        return {
            width: '110px',
            height: '110px',
            margin: 'auto'
        } as CSSProperties
    };

    const thumbnailStyle = () => {
        if (matchScreen(MIN_WIDTH_640)) {
            return {
                width: '250px',
                height: '250px',
            } as CSSProperties;
        }

        return {
            width: '110px',
            height: '110px',
            margin: 'auto'
        } as CSSProperties
    };

    return <Gallery
        images={ IMAGES }
        enableImageSelection={ false }
        thumbnailStyle={ thumbnailStyle }
        tileViewportStyle={ tileViewportStyle }
        backdropClosesModal={ true }
    />
}
