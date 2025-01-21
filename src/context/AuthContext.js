import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // Създава контекст за автентикацията

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(''); // Създава състояние за потребителя

    const login = (email, password) => {
        setUser(email, password);
    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}