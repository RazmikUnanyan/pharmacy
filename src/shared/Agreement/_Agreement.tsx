import React from 'react';

import styles from './_Agreement.module.scss';
import {Link} from "../Link";
export const Agreement = () => (
        <div className={styles.container}>
            Нажимая, я даю согласие в соответствии с
            <Link href="#"> политикой конфиденциальности</Link>.
            И соглашаюсь с условиями
            <Link href="#"> пользовательского соглашения</Link>.
        </div>
    );
