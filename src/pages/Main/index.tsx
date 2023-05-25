import {ChangeEvent} from "react";
import {useNavigate} from "react-router";
import {useMutation} from "react-query";
import {createSearchParams} from "react-router-dom";

import {Button, ButtonSize} from "components/ui/Button";
import {downloadFromPDF} from "queries";

import styles from './index.module.sass';

export const Main = () => {
    const navigation = useNavigate();

    const uploadMutation = useMutation((file: File) => downloadFromPDF(file));

    const downloadPdf = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (!files) {
            return {};
        }
        const pdf = files[0];
        event.target.setAttribute('value', '');

        return uploadMutation.mutate(pdf, {
            onSuccess: data => {
                navigation({
                    pathname: '/result',
                    search: createSearchParams({
                        ...data
                    }).toString()
                });
            }
        });
    };

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Resume Analysis</h1>
            <section className={styles.controls}>
                <Button
                    onClick={() => navigation('/form')}
                    size={ButtonSize.l}
                >
                    start
                </Button>
                <label className={styles.controls__file}>
                    download from pdf
                    <input type="file" onChange={downloadPdf}/>
                </label>
            </section>
        </section>
    );
}