import React from "react";

import { Link } from "../Link";
import styles from "./_Agreement.module.scss";

export const Agreement = () => (
  <div className={styles.container}>
    Нажимая, я даю согласие в соответствии с<Link href="#"> политикой конфиденциальности</Link>. И соглашаюсь с
    условиями
    <Link href="#"> пользовательского соглашения</Link>.
  </div>
);
