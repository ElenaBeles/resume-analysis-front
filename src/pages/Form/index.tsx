import {useState} from "react";
import {useNavigate} from "react-router";
import {FieldArray, Formik} from "formik";

import {SkillTypes} from "models/skill.interface";
import {Button, ButtonSize, ButtonThemes} from "components/ui/Button";
import {Input} from "components/ui/Input";
import {Textarea} from "components/ui/Textarea";

import {Education} from "./blocks/Education";
import {Skills} from "./blocks/Skills";
import {ProfessionalActivity} from "./blocks/ProfessionalActivity";

import styles from './index.module.sass';
import {MaskedInput} from "../../components/ui/Input/MaskedInput";
import {useMutation} from "react-query";
import {downloadFromForm, downloadFromPDF} from "../../queries";
import {createSearchParams} from "react-router-dom";

enum Steps {
    basic_information,
    contacts,
    professional_activity,
    education,
    skills,
}

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(Steps.basic_information);
    const navigation = useNavigate();

    const handlePrevStep = () => setCurrentStep(prev => prev - 1);
    const handleNextStep = () => setCurrentStep(prev => prev + 1);

    const submitMutation = useMutation((data: { resume: string }) => downloadFromForm(data));

    return (
        <section className={styles.container}>
            <header>
                <h1>Your resume</h1>
                <section className={styles.progress}>
                    <p>{currentStep + 1}/5</p>
                    <div className={styles.controls}>
                        <Button
                            disabled={currentStep === 0}
                            onClick={handlePrevStep}
                            theme={ButtonThemes.clear}
                            size={ButtonSize.s}
                        >
                            ←
                        </Button>
                        <Button
                            disabled={currentStep === 4}
                            onClick={handleNextStep}
                            size={ButtonSize.s}
                        >
                            →
                        </Button>
                    </div>
                </section>
                <Formik
                    initialValues={{
                        full_name: '',
                        field_activity: '',
                        about_me: '',

                        email: '',
                        phone: '',
                        telegram: '',

                        educations: [],
                        professional_activity: [],

                        hard_skills: [],
                        soft_skills: [],
                }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    { ({values, setFieldValue}) =>
                        <form className={styles.form}>
                            {
                                currentStep === Steps.basic_information &&
                                <>
                                    <h2 className={styles.subtitle}>Basic information</h2>
                                    <section className={styles.form__controls}>
                                        <Input
                                            label='Full Name'
                                            value={values.full_name}
                                            onChange={v => setFieldValue('full_name', v.target.value)}
                                        />
                                        <Input
                                            label='Field of activity'
                                            value={values.field_activity}
                                            onChange={v => setFieldValue('field_activity', v.target.value)}
                                        />
                                        <Textarea
                                            label='About Me(*)'
                                            onChange={v => setFieldValue('about_me', v.target.value)}
                                        />
                                    </section>
                                </>
                            }
                            {
                                currentStep === Steps.contacts &&
                                <>
                                    <h2 className={styles.subtitle}>Contacts (Optional)</h2>
                                    <section className={styles.form__controls}>
                                        <Input
                                            label='Email'
                                            value={values.email}
                                            onChange={v => setFieldValue('email', v.target.value)}
                                        />
                                        <MaskedInput
                                            maskOptions={{
                                                mask: '+{7} (000) 000 - 00 - 00'
                                            }}
                                            label='Phone'
                                            value={values.phone}
                                            onChange={v => setFieldValue('phone', v)}
                                        />
                                        <Input
                                            label='Telegram'
                                            value={values.telegram}
                                            onChange={v => setFieldValue('telegram', v.target.value)}
                                        />
                                    </section>
                                </>
                            }
                            {
                                currentStep === Steps.professional_activity &&
                                <>
                                    <h2 className={styles.subtitle}>Employment History</h2>
                                    <FieldArray name="professional_activity">
                                        {
                                            helpers =>
                                                <ProfessionalActivity arrayHelpers={helpers} />
                                        }
                                    </FieldArray>
                                </>
                            }
                            {
                                currentStep === Steps.education &&
                                <>
                                    <h2 className={styles.subtitle}>Education</h2>
                                    <FieldArray name="educations">
                                        {
                                            helpers =>
                                                <Education arrayHelpers={helpers} />
                                        }
                                    </FieldArray>
                                </>
                            }
                            {
                                currentStep === Steps.skills &&
                                <>
                                    <h2 className={styles.subtitle}>Skills</h2>
                                    <h3>Hard Skills</h3>
                                    <FieldArray name="hard_skills">
                                        {
                                            helpers =>
                                                <Skills
                                                    arrayName={SkillTypes.hard}
                                                    arrayHelpers={helpers}
                                                />
                                        }
                                    </FieldArray>
                                    <h3>Soft Skills</h3>
                                    <FieldArray name="soft_skills">
                                        {
                                            helpers =>
                                                <Skills
                                                    arrayName={SkillTypes.soft}
                                                    arrayHelpers={helpers}
                                                />
                                        }
                                    </FieldArray>
                                    <section className={styles.form__controls}>
                                        <Button
                                            type='button'
                                            size={ButtonSize.s}
                                            className={styles.submit}
                                            onClick={() => {
                                                const validateForm = Object.fromEntries(Object.entries(values).filter(([_, v]) => v != ''));

                                                const resume = Object.entries(validateForm).map(([key, value]) => `${key.replace('_', '-')} - ${value}`).join('. ');

                                                const data = {
                                                    resume
                                                };

                                                return submitMutation.mutate(data, {
                                                    onSuccess: data => {
                                                        navigation({
                                                            pathname: '/result',
                                                            search: createSearchParams({
                                                                ...data
                                                            }).toString()
                                                        });
                                                    }
                                                });
                                            }}
                                        >
                                            Send
                                        </Button>
                                    </section>
                                </>
                            }
                        </form>
                    }
                </Formik>
            </header>
        </section>
    );
}