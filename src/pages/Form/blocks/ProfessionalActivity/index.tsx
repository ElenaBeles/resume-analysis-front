import {FieldArrayRenderProps} from "formik";

import {IEducation} from 'models/education.interfaces';
import {ICompany} from "models/company.interfaces";
import {Input} from "components/ui/Input";
import {Textarea} from "components/ui/Textarea";
import {Button, ButtonSize, ButtonThemes} from "components/ui/Button";

import styles from '../Education/index.module.sass';

interface Props {
    arrayHelpers: FieldArrayRenderProps;
}

export const ProfessionalActivity = ({arrayHelpers}: Props) => {
    const {form} = arrayHelpers;
    const {values} = form;

    const emptyBlock: ICompany = {
        title: '',
        years: '',
        description: ''
    };

    return (
        <>
            {values?.professional_activity.map((education: IEducation, index: number) => {
                    const name = `professional_activity[${index}].`;
                    return (
                        <article
                            className={styles.controls}
                            key={index}
                        >

                            <div className={styles.row}>
                                <Input
                                    label='Company name'
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
                                label='Years'
                                name={name + 'years'}
                                value={education.years}
                                onChange={form.handleChange}
                            />
                            <Textarea
                                label='Description'
                                name={name + 'description'}
                                onChange={form.handleChange}
                            />
                            <div className={styles.delimiter}/>
                        </article>
                    )
                }
            )}
            <Button
                type='button'
                onClick={() => arrayHelpers.push(emptyBlock)}
                theme={ButtonThemes.primary}
                size={ButtonSize.s}
            >
                add
            </Button>
        </>
    );
}