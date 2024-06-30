import React, { FC } from "react";

import styles from "./_Link.module.scss";
import { ILinkProps } from "./_Link.props.ts";

export const Link: FC<ILinkProps> = ({ ...props }) => <a className={styles.link} {...props} />;
