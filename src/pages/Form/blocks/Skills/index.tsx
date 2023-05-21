import {FieldArrayRenderProps} from "formik";

import {HardSkills, SoftSkills} from "mocks/skills-list";
import {SkillTypes} from "models/skill.interface";
import {ClickableTag} from "components/ui/ClickableTag";

import styles from './index.module.sass';

interface Props {
    arrayName: SkillTypes;
    arrayHelpers: FieldArrayRenderProps;
}

export const Skills = ({arrayName, arrayHelpers}: Props) => {
    const {form} = arrayHelpers;

    const activeSkills: string[] = form.values[arrayName];

    const skillList = arrayName === SkillTypes.hard ? HardSkills : SoftSkills;

    return (
        <div className={styles.controls}>
            {
                skillList.map((skill, index) => {
                        const isActive = !!(activeSkills?.find(activeSkill => activeSkill === skill.title));
                        let skillIndex = -1;

                        if(isActive) {
                            skillIndex = activeSkills.findIndex(v => v === skill.title);
                        }

                        return (
                            <ClickableTag
                                key={index}
                                active={isActive}
                                onClick={() => {
                                    isActive ? arrayHelpers.remove(skillIndex) : arrayHelpers.push(skill.title)
                                }}
                            >
                                {skill.title}
                            </ClickableTag>
                        )
                    }
                )
            }
        </div>
    );
}