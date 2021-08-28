import { CSSProperties, HTMLProps } from 'react';

export interface IBaseProps extends HTMLProps<any> {
    elementStyle?: CSSProperties;
    elementClassName?: string;

    containerStyle?: CSSProperties;
    containerClassName?: string;
}
