import {FieldArrayRenderProps} from "formik";

import {IEducation} from 'models/education.interfaces';
import {Input} from "components/ui/Input";
import {Button, ButtonSize, ButtonThemes} from "components/ui/Button";

import styles from './index.module.sass';

interface Props {
    arrayHelpers: FieldArrayRenderProps;
}

export const Education = ({arrayHelpers}: Props) => {
    const {form} = arrayHelpers;
    const {values} = form;

    const emptyBlock: IEducation = {
        title: '',
        degree: '',
        years: '',
        description: ''
    };

    return (
        <>
            {values?.educations.map((education: IEducation, index: number) => {
                    const name = `educations[${index}].`;
                    return (
                        <article
                            className={styles.controls}
                            key={index}
                        >
                            <div className={styles.row}>
                                <Input
                                    label='University'
                                    name={name + 'title'}
                                    value={education.title}
                                    onChange={form.handleChange}
                                />
                                <Button
                                    type='button'
                                    onClick={() => arrayHelpers.remove(Math.random())}
                                    theme={ButtonThemes.clear}
                                    size={ButtonSize.s}
                                >
                                    -
                                </Button>
                            </div>
                            <Input
                                label='Degree'
                                name={name + 'degree'}
                                value={education.degree}
                                onChange={form.handleChange}
                            />
                            <Input
                                label='Years'
                                name={name + 'years'}
                                value={education.years}
                                onChange={form.handleChange}
                            />
                            <div className={styles.delimiter}/>
                        </article>
                    )
                }
            )}

            <Button
                type='button'
                theme={ButtonThemes.clear}
                size={ButtonSize.s}
                onClick={() => arrayHelpers.push(emptyBlock)}
            >
                +
            </Button>
        </>
    );
}