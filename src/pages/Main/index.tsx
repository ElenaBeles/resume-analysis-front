import {Button, ButtonSize, ButtonThemes} from "components/ui/Button";

import styles from './index.module.sass';
import {useNavigate} from "react-router";

export const Main = () => {
    const navigation = useNavigate();

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>It’s just fun</h1>
            <Button
                onClick={() => navigation('/form')}
                size={ButtonSize.l}
            >
                start
            </Button>
        </section>
    );
}