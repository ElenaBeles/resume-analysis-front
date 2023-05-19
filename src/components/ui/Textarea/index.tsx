import React, { FormEvent } from 'react';
import cn from 'classnames';

import styles from './index.module.sass';

interface Props {
    value: string;
    onChange: (e: string) => void;
    placeholder?: string;
    name?: string;
    className?: string;
}

export const Textarea = (props: Props) => {
    const {
        value,
        onChange = () => {},
        placeholder,
        name = '',
        className = '',
        ...rest
    } = props;

    return (
        <textarea
            {...rest}
            value={value}
            onChange={e => onChange(e.target.value)}
            aria-labelledby='aria-label'
            id='textarea'
            name={name}
            placeholder={placeholder}
            className={cn(styles.textarea, className)}
        />
    );
}
