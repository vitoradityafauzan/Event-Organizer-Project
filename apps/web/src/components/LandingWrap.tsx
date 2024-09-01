import { ReactNode } from "react";

interface ILandingWrapProps {
    children: ReactNode 
    direction: string;
    gap: number;
    width: string;
    height: string;
}

export const LandingWrap: React.FC<ILandingWrapProps> = ({children, direction, gap}) => {
    return (
        <div className={`flex flex-${direction} gap-${gap}`}>
            {children}
        </div>
    )
}