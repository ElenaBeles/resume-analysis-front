import {useSearchParams} from "react-router-dom";

import styles from './index.module.sass';
import {Button, ButtonThemes} from "../../components/ui/Button";
import {useNavigate} from "react-router";

export const Result = () => {
    const [searchParams] = useSearchParams();

    const res = {
        answer: searchParams.get('answer'),
        suggestion: searchParams.get('suggestion'),
    };

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Your result:</h2>
            <div className={styles.result}>
                {
                    res.answer === '1' ?
                        <h1 className={styles.result__good}>Congratulations! Do you have a good resume</h1>
                        :
                        <h1 className={styles.result__bad}>Oops, looks like something needs to be fixed.</h1>
                }
            </div>

            <div className={styles.tip}>
                <h3 className={styles.tip__title}>It might help you</h3>
                <span>{res.suggestion}</span>
            </div>

            <Button
                onClick={() => navigate('/')}
                theme={ButtonThemes.clear}
                    className={styles.btn}
            >
                Back to menu
            </Button>
        </section>
    );
}