import {ChangeEvent, FC, FormEvent, useState} from "react";

import {IRegistrationForm} from "../../interfaces";
import {Agreement, Button, Input, Modal} from "../../shared";
import {IRegistrationProps} from "./_RegistrationForm.props.ts";

import styles from "./_RegistrationForm.module.scss";

export const RegistrationForm: FC<IRegistrationProps> = ({isOpen, onClose}) => {
    const [formData, setFormData] = useState<IRegistrationForm>({
        name: "",
        phone: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className={styles.registrationForm} onSubmit={handleSubmit}>
                <header className={styles.registrationHeader}>
                    <h2>Регистрация</h2>
                </header>
                <main className={styles.inputWrapper}>
                    <Input
                        id="name"
                        name="name"
                        label="Имя"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Введите имя"
                    />
                    <Input
                        id="phone"
                        name="phone"
                        maxLength={12}
                        onChange={handleChange}
                        value={formData.phone}
                        label="Мобильный телефон"
                        placeholder="+7"
                        type="number"
                    />
                </main>
                <footer className={styles.registrationFooter}>
                    <Button type="submit" variant="secondary">
                        регистрация
                    </Button>
                    <Agreement/>
                </footer>
            </form>
        </Modal>
    );
};
