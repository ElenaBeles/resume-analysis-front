import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import styles from './index.module.sass';

interface Props {
    className: string;
}

export const Header = ({className, ...rest}: Partial<Props>) => {
    return (
        <header {...rest} className={cn(styles.container, className)}>
            <NavLink
                className={styles.link}
                to={`/support`}
            >
                Support
            </NavLink>
        </header>
    );
}