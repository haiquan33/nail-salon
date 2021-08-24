// @ts-ignore
import Gallery from 'react-grid-gallery';
import { IWorkPagination } from 'types';
import { CSSProperties } from 'react';
import { ImageOptions } from 'gallery';

export const GridGallery = ({ data }: { data: IWorkPagination[] }) => {
    const IMAGES = data.find(item => item.page === 1)?.works.map(item => (
        {
            src: item,
            thumbnail: item,
            thumbnailWidth: 270,
            thumbnailHeight: 270,
        }
    )) as unknown as ImageOptions[];

    const tileViewportStyle = () => ({
        width: '270px',
        height: '270px',
        margin: 'auto'
    } as CSSProperties);

    const thumbnailStyle = () => ({
        width: '250px',
        height: '250px',
    } as CSSProperties);

    return <Gallery
        images={ IMAGES }
        enableImageSelection={ false }
        thumbnailStyle={ thumbnailStyle }
        tileViewportStyle={ tileViewportStyle }
        backdropClosesModal={ true }
    />
}
