import { IPageHeaderProps } from 'types';

export const PageHeader = (props: IPageHeaderProps) => {
    return <h1 style={ props.style }
               className={ `text-center text-white mb-6 lg:mb-10 font-lobster section-head ${ props.className }` }
    >
        { props.text }
    </h1>;
};
