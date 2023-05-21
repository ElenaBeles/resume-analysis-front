import {ReactNode} from "react";
import cn from "classnames";

import styles from './index.module.sass';

interface Props {
    onClick?: () => void;
    active?: boolean;
    children: ReactNode;
}

export const ClickableTag = ({ onClick, active = false, children }: Props) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={cn(styles.container, active && styles.active)}
        >
            {children}
        </button>
    );
}