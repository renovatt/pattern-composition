type ModalContentProps = {
    text: string;
}

export const ModalContent = ({ text }: ModalContentProps) => {
    return (
        <p className="font-bold">{text}</p>
    )
}