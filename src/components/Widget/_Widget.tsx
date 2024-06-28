import {FC, useState} from "react";
import cn from 'classnames';
import {Button} from "../../shared";

import styles from './_Widget.module.scss';

export const Widget:FC = () => {

    return (
        <div className={styles.widgetContainer}>
            <div className={styles.widget}>
                  <h3>How can we help?</h3>
            </div>
            <Button variant="secondary">
                <i>{"?"}</i>
            </Button>
        </div>
    );
};