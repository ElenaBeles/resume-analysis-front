import styles from './index.module.sass';
import {MouseEvent, ReactNode} from 'react';
import cn from 'classnames';

export enum ButtonThemes {
    primary,
    clear,
}

export enum ButtonSize {
    s,
    m,
    l
}

interface Props {
    children: ReactNode;
    type: 'submit' | 'button';
    theme: ButtonThemes;
    size: ButtonSize;
    onClick: (e?: MouseEvent) => void;
    disabled: boolean;
    className: string;
}

export const Button = (props: Partial<Props>) => {
    const {
        size = ButtonSize.m,
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
                [styles.btn_clear]: theme === ButtonThemes.clear,
                [styles.btn_disabled]: disabled,
                [styles.btn_s]: size === ButtonSize.s,
                [styles.btn_m]: size === ButtonSize.m,
                [styles.btn_l]: size === ButtonSize.l,
            })}
            onClick={e => onClick(e)}
        >
            {children}
        </button>
    );
}