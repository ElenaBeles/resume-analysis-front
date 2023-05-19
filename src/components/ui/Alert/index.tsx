import styles from './index.module.sass';

interface Props {
    text: string;
    className: string;
}

export const Alert = ({text, className}: Partial<Props>) => {
    return (
        <div className={styles.container}>
            {text ?? 'В разработке'}
        </div>
    );
}