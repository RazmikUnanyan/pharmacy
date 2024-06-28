import {FC} from 'react';
import {ILinkProps} from "./_Link.props.ts";
import styles from './_Link.module.scss';

export const Link:FC<ILinkProps> = ({...props}) => <a className={styles.link} {...props}/>;
