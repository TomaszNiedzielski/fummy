import React, { useState, useEffect } from 'react';
import styles from './PrimaryInput.module.css';

export interface Props {
    type?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    maxLength?: number;
    min?: number;
    clickToCopy?: boolean;
    errorMessage?: string;
    onBlur?: () => void;
    style?: object;
    inputMode?: 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal';
    autoCapitalize?: string;
}

const PrimaryInput: React.FC<Props> = ({ type, label, placeholder, value, onChange, maxLength, min, clickToCopy, errorMessage, onBlur, style, inputMode, autoCapitalize }) => {
    const BEFORE_COPY__BUBBLE_TEXT = 'Kliknij, by skopiować';
    const AFTER_COPY__BUBBLE_TEXT = 'Skopiowano';

    const [isCopyBubbleVisible, setIsCopyBubbleVisible] = useState<boolean>(false);
    const [attributes, setAttributes] = useState<object>();
    const [copyBubbleText, setCopyBubbleText] = useState<string>(BEFORE_COPY__BUBBLE_TEXT);

    const copyValue = () => {
        navigator.clipboard.writeText(value);
        setCopyBubbleText(AFTER_COPY__BUBBLE_TEXT);
    }

    useEffect(() => {
        if (clickToCopy) {
            setAttributes({
                onMouseOver: () => setIsCopyBubbleVisible(true),
                onMouseOut: () => {setIsCopyBubbleVisible(false); setCopyBubbleText(BEFORE_COPY__BUBBLE_TEXT)},
                onClick: () => copyValue(),
            });
        }
    }, [clickToCopy]);

    return (
        <div className={styles.container}>
            {isCopyBubbleVisible && <div className={styles.copyBubble}>{copyBubbleText}</div>}
            {label ? <label className={styles.label}>{label}</label> : null}
            <input
                type={type ? type : 'text'}
                className={styles.input}
                placeholder={placeholder}
                value={value ? value : ''}
                onChange={onChange ? e => onChange(e.target.value) : () => {}}
                maxLength={maxLength}
                min={min}
                {...attributes}
                onBlur={onBlur}
                style={style}
                inputMode={inputMode}
                readOnly={clickToCopy}
                autoCapitalize={autoCapitalize}
            />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
    );
}
export default PrimaryInput;