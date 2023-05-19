import cn from 'classnames';
import styles from './index.module.sass';

export interface InputProps {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (v: string) => void;
    type?: 'password' | 'text';
    className?: string;
}

export const Input = (props: InputProps) => {
    const {
        value,
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
            <input
                defaultValue={value}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                onChange={v => {
                    onChange(v.target.value ?? '')
                    return v;
                }}
                className={styles.control}
            />
        </label>
    );
}