import {FC, useState} from "react";
import cn from 'classnames';
import {Button} from "../../shared";

import styles from './_Widget.module.scss';

export const Widget:FC = () => {
    const [isOpenWidget, setIsOpenWidget] = useState<boolean>(false)

    const handleWidgetClick = () => setIsOpenWidget(prev => !prev)

    return (
        <div className={styles.widgetContainer}>
            <div className={cn(styles.widget, {
                [styles.openWidget]: isOpenWidget
            })}>
                  <h3>How can we help?</h3>
            </div>
            <Button variant="secondary" onClick={handleWidgetClick}>
                <i>{isOpenWidget ? ">" : "?"}</i>
            </Button>
        </div>
    );
};