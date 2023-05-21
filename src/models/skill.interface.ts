export enum SkillTypes {
    soft= 'soft_skills',
    hard = 'hard_skills'
}

export interface ISkill {
    title: string;
    type: SkillTypes;
}