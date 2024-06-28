import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface IModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
