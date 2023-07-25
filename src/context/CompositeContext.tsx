import React, { createContext, useState } from 'react';

export const CompositeContext = createContext<CompositeContextType >({
    composites: [],
    setComposites: null
});

interface ICompositeContext {
    children: React.ReactNode;
}

interface CompositeContextType {
    composites: TComposites[];
    setComposites: any;
}

export type TComposites = {
    compositeId: number;
    compositeCode: string;
    compositeName: string;
}

export default function _CompositeContext({ children }: ICompositeContext) {

    const [composites, setComposites] = useState<TComposites[]>([])

    return (
    <CompositeContext.Provider value={{ composites, setComposites }}>
        {children}
    </CompositeContext.Provider>
    );
}
