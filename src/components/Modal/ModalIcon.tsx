import { ElementType } from "react";
import { twMerge } from 'tailwind-merge'

type ModalIconProps = {
    icon: ElementType;
    className?: string;
}

export const ModalIcon = ({ icon: Icon, ...rest }: ModalIconProps) => {
    return (
        <Icon className={twMerge('w-8 h-8 rounded p-1 text-violet-600', rest.className)} />
    )
}