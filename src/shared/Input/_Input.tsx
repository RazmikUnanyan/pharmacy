import {FC} from "react";

import {IInputProps} from "./_input.props";

import styles from "./_input.module.scss";

export const Input: FC<IInputProps> = ({label, ...props}) => (
    <div className={styles.inputWrapper}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} {...props} />
    </div>
);
