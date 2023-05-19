import styles from './index.module.sass';
import {MouseEvent, ReactNode} from 'react';
import cn from 'classnames';

export enum ButtonThemes {
    primary,
    secondary,
    error
}

interface Props {
    children: ReactNode;
    type: 'submit' | 'button';
    theme: ButtonThemes;
    onClick: (e?: MouseEvent) => void;
    disabled: boolean;
    className: string;
}
export const Button = (props: Partial<Props>) => {
    const {
        theme = ButtonThemes.primary,
        type = 'submit',
        onClick = e => {},
        disabled = false,
        children,
        className,
        ...rest
    } = props;

    return (
        <button
            {...rest}
            disabled={disabled}
            className={cn(styles.btn, className, {
                [styles.btn_primary]: theme === ButtonThemes.primary,
                [styles.btn_secondary]: theme === ButtonThemes.secondary,
                [styles.btn_error]: theme === ButtonThemes.error,
            })}
            onClick={e => onClick(e)}
        >
            {children}
        </button>
    );
}