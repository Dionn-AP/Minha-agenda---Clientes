import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { Alert } from "react-native";
import { ISignin, ISignup } from "../types";
import { getHeaders } from "../utils/services";

interface Props {
    children: React.ReactNode;
}

interface AuthContextData {
    authData?: ISignin;
    signIn: (email: string, password: string) => Promise<ISignin>;
    signOut: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [authData, setAuthData] = useState<ISignin>();
    const [loading, setLoading] = useState(true);

    async function loadFromStorage() {
        try {
            const auth = await AsyncStorage.getItem('@AuthData');
            if (auth) {
                const _auth: ISignin = JSON.parse(auth);
                setAuthData(_auth);
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            const auth = await api.post('/login', {
                email,
                password
            });
            setAuthData(auth.data);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth.data));
            return auth.data;
        } catch (error) {
            Alert.alert('Tente novamente')
        }
    }

    async function signOut(): Promise<void> {
        setAuthData(undefined);
        AsyncStorage.removeItem('@AuthData');
        return;
    }

    useEffect(() => {
        loadFromStorage();
    }, []);

    return <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}