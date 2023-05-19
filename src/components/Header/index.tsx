import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import styles from './index.module.sass';

interface Props {
    className: string;
}

export const Header = ({className, ...rest}: Partial<Props>) => {
    const user = useSelector((state: any) => state.userSlice);

    return (
        <header {...rest} className={cn(styles.container, className)}>
            {
                !user?.userId &&
                <>
                    <NavLink
                        className={styles.link}
                        to='/login'
                    >
                        Войти
                    </NavLink>
                    <NavLink
                        className={styles.link}
                        to='/registration'
                    >
                        Зарегистрироваться
                    </NavLink>
                </>
            }
            {
                user?.userId &&
                <>
                    <NavLink
                        className={styles.link}
                        to={`/profile?id=${user.userId}`}
                    >
                        Профиль
                    </NavLink>
                    <NavLink
                        className={styles.link}
                        to='/posts'
                    >
                        Посты
                    </NavLink>
                    <NavLink
                        className={styles.link}
                        to='/search'
                    >
                        Пользователи
                    </NavLink>
                </>
            }
        </header>
    );
}