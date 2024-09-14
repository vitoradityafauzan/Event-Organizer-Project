'use client';

import { useContextGlobal } from "@/context/Context";
import { useEffect } from "react";

export const History: React.FC = () => {
    const {categories} = useContextGlobal();

    useEffect(() => {
        
    })

    return (
        <div className="lg:basis-[65%] h-full border-2 border-blue-600">
            {categories.length < 1 ? (
                <div>
                    Kosong 
                </div>
            ) : (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia doloribus neque. Excepturi et ducimus libero asperiores facere, soluta odit placeat ab, ipsa nemo maxime laboriosam animi tenetur quia dolorum?
                </div>
            )}
            
        </div>
    )
}