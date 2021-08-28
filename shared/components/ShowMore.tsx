import { IBaseProps } from 'types';

interface IShowMoreProps extends IBaseProps {
    loadMore: (...args: any[]) => any;
    last?: boolean;
}

export const ShowMore = ({ elementClassName, loadMore, last }: IShowMoreProps) => {
    return <div className="flex justify-center">
        <a
            className={ `block hover:text-white hover:underline sm:text-lg underline font-light ${ elementClassName }` }
            onClick={ () => loadMore(last) }
        >
            { last ? 'Show Less' : 'Show More' }
        </a>
    </div>;
};
