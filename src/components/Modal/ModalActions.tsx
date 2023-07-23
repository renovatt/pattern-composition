import { ReactNode } from "react";

type ModalActionsProps = {
    children: ReactNode;
}

export const ModalActions = ({ children }: ModalActionsProps) => {
    return (
        <div className="flex gap-2 self-center">
            {children}
        </div>
    )
}