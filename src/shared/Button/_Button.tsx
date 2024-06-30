import React, { FC } from "react";

import cn from "classnames";

import styles from "./_Button.module.scss";
import { IButtonProps } from "./_Button.props.ts";

export const Button: FC<IButtonProps> = ({ variant = "primary", children, ...props }) => (
  <button
    {...props}
    className={cn({
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
    })}>
    {children}
  </button>
);
