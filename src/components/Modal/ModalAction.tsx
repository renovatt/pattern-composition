import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, ComponentProps, ElementType } from "react"

// interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     icon: ElementType;
// }

// type ModalActionProps = {
//     icon: ElementType;
// } & ComponentProps<'button'>

type ModalActionProps = {
    icon: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ModalAction = ({ icon: Icon, ...rest }: ModalActionProps) => {
    return (
        <button
            {...rest}
            className={twMerge("w-8 h-8 rounded flex items-center justify-center", rest.className)}>
            <Icon className='w-5 h-5 text-zinc-50' />
        </button>
    )
}