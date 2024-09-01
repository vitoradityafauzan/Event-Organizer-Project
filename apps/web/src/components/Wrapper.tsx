import { ReactNode } from "react";

interface IWrap {
    direction: string;
    gap: number
    children: ReactNode;
}

export const Wrapper: React.FC<IWrap> = ({ direction, gap, children }) => {
    return (
        <div className={`flex flex-wrap flex-${direction} mx-auto w-full h-full gap-${gap}`}>
            {children}
        </div>
    )
}