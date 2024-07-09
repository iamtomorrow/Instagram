
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useState } from "react";

const STORAGE_KEY = 'accountContext';

export interface ChildrenProps {
    children: ReactNode;
}

interface AccountProps {
    name: string | null;
    username: string | null;
    email: string | null;
    profileUrl: string | null;
    token: string | null;
}

interface AccountContextProps {
    account: AccountProps | null;
    token: string | null;
    updateToken: ( tkn: string ) => void;
    exitAccount: ( ) => void;
    hasAccount: ( ) => Promise<boolean>;
}

export const AccountContext = createContext<AccountContextProps | null>(null);

export const AccountContextProvider = ({ children }: ChildrenProps ) => {
    const [ account, setAccount ] = useState<AccountProps | null>(null);
    const [ token, setToken ] = useState<string | null>(null);
    
    const hasAccount = async ( ) => {
        let account = await AsyncStorage.getItem(STORAGE_KEY);
        setAccount({
            name: "Visitor",
            email: "",
            profileUrl: "",
            username: "@visitor",
            token: token
        })
        if ( account === undefined || account === null ) return false;
        return true;
    }

    const updateToken =  async( tkn: string ) => {
        await AsyncStorage.setItem("token", tkn);
        setToken( tkn );
    }

    const exitAccount = async ( ) => {
        await AsyncStorage.removeItem('accountContext');
    }
    return (
        <AccountContext.Provider value={{ account, token, updateToken, exitAccount, hasAccount }}>
            { children }
        </AccountContext.Provider>
    )
}