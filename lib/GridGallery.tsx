// @ts-ignore
import Gallery from 'react-grid-gallery';
import { IPagination } from 'types';
import { CSSProperties } from 'react';
import { ImageOptions } from 'typings';
import { matchScreen, MIN_WIDTH_640 } from 'utils';

interface IGridGalleryProps {
    data: IPagination[];
    pages: number[];
}

export const GridGallery = ({ data, pages }: IGridGalleryProps) => {
    const IMAGES = data
        .filter(({ page }) => pages.includes(page)) // Filter only on showing pages
        .flatMap(({ data }) => // Map images to show in gallery
            data.map(work => (
                {
                    src: work,
                    thumbnail: work,
                    thumbnailWidth: 270,
                    thumbnailHeight: 270,
                }
            ))
        ) as unknown as ImageOptions[];

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
