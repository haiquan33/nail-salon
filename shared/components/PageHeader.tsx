import { IPageHeaderProps } from 'types';

export const PageHeader = ({ style, className, text }: IPageHeaderProps) => {
    return <h1
        style={ style }
        className={ `text-center text-white mb-6 lg:mb-10 font-lobster section-head ${ className }` }
    >
        { text }
    </h1>;
};
