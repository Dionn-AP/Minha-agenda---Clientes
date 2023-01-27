import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { Alert } from "react-native";
import { ISignin } from "../types";

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
    const [loading, setLoading] = useState(false);

    async function loadFromStorage() {
        try {
            const auth = await AsyncStorage.getItem('@AuthData');
            if (auth) {
                const _auth: ISignin = JSON.parse(auth);
                setAuthData(_auth);
                setLoading(false);
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            setLoading(true);
            const auth = await api.post('/login', {
                email,
                password
            });
            setLoading(false);
            setAuthData(auth.data);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth.data));
            return auth.data;
        } catch (error: any) {
            setLoading(false)
            if (error.response.status <= 422) {
                return Alert.alert('Algo deu errado', error.response.data.message);
            }
            return Alert.alert('Algo deu errado', 'Erro de conexão com o servidor');
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