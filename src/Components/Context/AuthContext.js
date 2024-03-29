import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth () {
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
        const [currentUser, setCurrentUser] = useState()

        function createAccount(email, password) {
            auth.createUserWithEmailAndPassword(email, password)
        }

        useEffect (() => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
            })
            return unsubscribe
        }, [])


        auth.onAuthStateChanged = (user =>  {
            setCurrentUser(user)
        })
        const value = {
            currentUser,
            createAccount
        }

        return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}