import React, {ChangeEvent} from 'react';
import cn from 'classnames';

import styles from './index.module.sass';

interface Props {
    label?: string;
    placeholder?: string;
    name?: string;
    className?: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = (props: Props) => {
    const {
        label,
        onChange = () => {},
        placeholder,
        name = '',
        className = '',
        ...rest
    } = props;

    return (
        <div className={styles.container}>
            {
                label &&
                <p className={styles.label}>{label}</p>
            }
        <textarea
            {...rest}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(styles.textarea, className)}
            name={name}
            id='textarea'
            aria-labelledby='aria-label'
        />
        </div>
    );
}
