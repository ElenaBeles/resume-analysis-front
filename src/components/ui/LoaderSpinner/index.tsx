import classNames from 'classnames/bind';
import styles from './index.module.sass';

const cn = classNames.bind(styles);

export const LoaderSpinner = ({className} : {className?: string}) =>
    (<div className={cn(styles.loader, className)}/>)
