import { GridGallery } from 'lib';
import staticData from 'static/assets/data.json';
import { IWorkPagination } from 'types';

export const Gallery = (props: any) => {
    const works: IWorkPagination[] = staticData.PREVIOUS_WORKS;

    return <section id="gallery" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <h4 className="text-center text-white font-lobster section-head mb-6 lg:mb-10">
                Check Out Our Previous Work
            </h4>

            <div className="mx-24 mb-8">
                <GridGallery data={ works }/>
            </div>

            <div className="flex justify-center">
                <a href="#"
                   className="hidden sm:block hover:text-white hover:underline text-lg underline font-light">
                    Show More
                </a>
            </div>
        </div>
    </section>
};
