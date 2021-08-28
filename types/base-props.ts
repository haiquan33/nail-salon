import { CSSProperties } from 'react';

export interface IBaseProps {
    style?: CSSProperties;
    className?: string;

    elementStyle?: CSSProperties;
    elementClassName?: string;

    containerStyle?: CSSProperties;
    containerClassName?: string;
}
