
import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
    children: ReactNode,
}

interface NavigationContextProps {
    currentRoute: string,
    updateRoute: ( route: string ) => void,
}

export const NavigationContext = createContext<NavigationContextProps | null>({ currentRoute: "", updateRoute: () => {}});

export const NavigationContextProvider = ({ children }: ChildrenProps ) => {
    const [ currentRoute, setCurrentRoute ] = useState<string>("Login");
    
    const updateRoute = ( route: string ) => {
        setCurrentRoute( route );
    }

    return (
        <NavigationContext.Provider value={{ currentRoute, updateRoute }}>
            { children }
        </NavigationContext.Provider>
    )
}