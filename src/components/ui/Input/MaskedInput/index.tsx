import {useEffect, useState} from "react";
import {useIMask} from "react-imask";
import cn from 'classnames';

import styles from '../index.module.sass';

interface Props {
    maskOptions: IMask.AnyMaskedOptions;
    onChange: (v: string) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: 'password' | 'text';
    className?: string;
}

export const MaskedInput = (props: Props) => {
    const {
        value,
        placeholder,
        className,
        disabled = false,
        maskOptions,
        onChange,
        type = 'text',
        ...rest
    } = props;

    const [opts, setOpts] = useState<IMask.AnyMaskedOptions>(maskOptions);
    const { ref: inputMaskRef, unmaskedValue } = useIMask(opts, {

    });

    useEffect(() => {
        setOpts(maskOptions);
    }, [maskOptions]);

    return (
        <label {...rest} className={cn(styles.container, disabled && styles.container_disabled, className)}>
            <input
                ref={inputMaskRef}
                type={type}
                disabled={disabled}
                onChange={v => onChange(unmaskedValue)}
                placeholder={placeholder}
                className={styles.control}
            />
        </label>
    );
}