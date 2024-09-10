import { ReactNode } from "react";

interface ILandingWrapProps {
    children: ReactNode 
    additional?: string;
}

export const LandingWrap: React.FC<ILandingWrapProps> = ({children, additional}) => {
    return (
        <div className={`flex flex-col border-4 border-red-600 ${additional}`}>
            {children}
        </div>
    )
}