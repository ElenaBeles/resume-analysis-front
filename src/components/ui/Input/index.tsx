import cn from 'classnames';
import styles from './index.module.sass';
import {ChangeEvent} from "react";

export interface InputProps {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: 'password' | 'text';
    className?: string;
    name?: string;
}

export const Input = (props: InputProps) => {
    const {
        name,
        value,
        label,
        placeholder,
        className,
        disabled = false,
        onChange,
        type = 'text',
        ...rest
    } = props;

    return (
        <label
            {...rest}
            className={cn(styles.container, disabled && styles.container_disabled, className)}
        >
            {
                label &&
                <p className={styles.label}>{label}</p>
            }
            <input
                defaultValue={value}
                type={type}
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.control}
            />
        </label>
    );
}