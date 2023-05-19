import React, {ReactNode, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames';

import {getUserInfo} from "../../services/profileAPI";
import {setCurrentUser} from "reducers/userSlice";
import {Header} from '../Header';

import styles from './index.module.sass';
import {LoaderSpinner} from "../ui/LoaderSpinner";

interface Props {
    children: ReactNode;
    className: string;
}
export const Layout = ({children, className, ...rest}: Partial<Props>) => {
    const currentUserId = localStorage.getItem('id');
    const storedUser = useSelector((state: any) => state.userSlice);

    const isAuth = currentUserId && storedUser.id;

    const dispatch = useDispatch();
    const location = useLocation();

    const { data, isLoading } = useQuery(['user', currentUserId], getUserInfo, {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!location.pathname && !!currentUserId
    });

    useEffect(() => {
        if (data) {
            dispatch(setCurrentUser(data));
        }
    }, [data]);

    return (
        <div {...rest} className={cn(styles.container)}>
            <Header className={styles.header}/>
            <section className={styles.content}>
                {
                    isLoading ?
                        <LoaderSpinner className={styles.loader} />
                        :
                        ((isAuth || !currentUserId) && children)
                }
            </section>
        </div>
    );
}