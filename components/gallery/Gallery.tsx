import { GridGallery } from 'lib';
import { IWorkPagination } from 'types';
import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';

export const Gallery = (props: any) => {
    const title = 'Check Out Our Previous Work';
    const works: IWorkPagination[] = staticData.PREVIOUS_WORKS;

    return <section id="gallery" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:mx-12 sm:mx-24 mb-4">
                <GridGallery data={ works }/>
            </div>

            <div className="flex justify-center">
                <a className="block hover:text-white hover:underline sm:text-lg underline font-light">
                    Show More
                </a>
            </div>
        </div>
    </section>
};
