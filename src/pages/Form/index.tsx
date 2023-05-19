import {useState} from "react";

import {Button, ButtonSize, ButtonThemes} from "components/ui/Button";
import {Input} from "components/ui/Input";

import styles from './index.module.sass';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";

enum Steps {
    basic_information,
    professional_activity,
    education,
    skills,
}

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(Steps.basic_information);
    const navigation = useNavigate();

    const handlePrevStep = () => setCurrentStep(prev => prev - 1);
    const handleNextStep = () => setCurrentStep(prev => prev + 1);

    const {
        getValues,
        setValue,
        formState: {errors, isValid}
    } = useForm({
        defaultValues: {
            full_name: '',
            field_activity: '',
            professional_activity: '',
            company_name: ''
        }
    });

    return (
        <section className={styles.container}>
            <header>
                <h1>Your resume</h1>
                <section className={styles.progress}>
                    <p>{currentStep + 1}/4</p>
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
                            disabled={currentStep === 3}
                            onClick={handleNextStep}
                            size={ButtonSize.s}
                        >
                            →
                        </Button>
                    </div>
                </section>
                <form className={styles.form}>
                    {
                        currentStep === Steps.basic_information &&
                        <>
                            <h2>Basic information</h2>
                            <section className={styles.form__controls}>
                                <Input
                                    label='FullName'
                                    value={getValues('full_name')}
                                    onChange={v => setValue('full_name', v)}
                                />
                                <Input
                                    label='Field of activity'
                                    value={getValues('field_activity')}
                                    onChange={v => setValue('field_activity', v)}
                                />
                                <Input
                                    label='Professional activity'
                                    value={getValues('professional_activity')}
                                    onChange={v => setValue('professional_activity', v)}
                                />
                            </section>
                        </>
                    }
                    {
                        currentStep === Steps.professional_activity &&
                        <>
                            <h2>Professional activity</h2>
                            <section className={styles.form__controls}>
                            </section>
                        </>
                    }
                    {
                        currentStep === Steps.education &&
                        <>
                            <h2>Education</h2>
                            <section className={styles.form__controls}>
                            </section>
                        </>
                    }
                    {
                        currentStep === Steps.skills &&
                        <>
                            <h2>Skills</h2>
                            <section className={styles.form__controls}>
                                <Button
                                    onClick={() => navigation('/result')}
                                >
                                    Send
                                </Button>
                            </section>
                        </>
                    }
                </form>
            </header>
        </section>
    );
}