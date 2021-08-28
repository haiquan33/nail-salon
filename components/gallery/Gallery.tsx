import { GridGallery } from 'lib';
import { IWorkPagination } from 'types';
import { PageHeader, ShowMore } from 'shared';
import staticData from 'static/assets/data.json';

export const Gallery = (props: any) => {
    const title = 'Check Out Our Previous Work';
    const data: IWorkPagination[] = staticData.PREVIOUS_WORKS;

    const loadMore = () => console.log('Load more!');

    return <section id="gallery" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:mx-12 sm:mx-24 mb-4">
                <GridGallery data={ data } page={ 2 }/>
            </div>

            <ShowMore loadMore={ loadMore }/>
        </div>
    </section>
};
