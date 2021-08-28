import { IBaseProps } from 'types';

interface IShowMoreProps extends IBaseProps {
    loadMore?: (...args: any[]) => any
}

export const ShowMore = ({ elementClassName, loadMore }: IShowMoreProps) => {
    return <div className="flex justify-center">
        <a className={ `block hover:text-white hover:underline sm:text-lg underline font-light ${ elementClassName }` }>
            Show More
        </a>
    </div>;
};
