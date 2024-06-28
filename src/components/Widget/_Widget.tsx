import {FC, useState} from "react";

import {Button} from "../../shared";
import {RegistrationForm} from "../RegistrationForm";

import styles from "./_Widget.module.scss";

export const Widget: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className={styles.widgetContainer}>
            <RegistrationForm onClose={handleCloseModal} isOpen={isModalOpen}/>
            <Button variant="secondary" onClick={handleOpenModal}>
                Р
            </Button>
        </div>
    );
};
