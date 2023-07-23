import { ReactNode } from "react"

type ModalRootProps = {
    children: ReactNode;
    isOpen: boolean;
}

export const ModalRoot = ({ children, isOpen }: ModalRootProps) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-25 text-gray-700">
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="absolute z-50 mx-auto my-0 flex items-center justify-around min-h-[8rem] w-[480px] overflow-hidden rounded-xl bg-white shadow-2xl animate-zoom">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}