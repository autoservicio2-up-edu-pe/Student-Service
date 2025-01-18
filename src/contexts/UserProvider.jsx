import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    useEffect(() => {
        if (userData != null) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
        }
    }, [userData]);



    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}
