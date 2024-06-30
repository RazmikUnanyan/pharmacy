import React, { FC } from "react";

import styles from "./_input.module.scss";
import { IInputProps } from "./_input.props";

export const Input: FC<IInputProps> = ({ label, ...props }) => (
  <div className={styles.inputWrapper}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} {...props} />
  </div>
);
