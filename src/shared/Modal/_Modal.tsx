import {FC} from "react";

import {Button} from "../Button";
import {IModalProps} from "./_Modal.props.ts";
import closeIcon from "./closeIcon.svg";

import styles from "./_Modal.module.scss";

export const Modal: FC<IModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeButton}>
                    <Button onClick={onClose}>
                        <img src={closeIcon} alt="close"/>
                    </Button>
                </div>
                {children}
            </div>
        </div>
    );
};
