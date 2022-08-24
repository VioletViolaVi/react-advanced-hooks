import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        // so it can behave like 'const [word, setWord] = useState();'
        <AuthContext.Provider value={{ user, setUser }}> 
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
