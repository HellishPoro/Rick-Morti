import { createContext, useContext, useState } from "react"

interface AuthContextType {
    user: string | null;
    password: string | null;
    signin: (user: string, password: string, callback: () => void) => void;
    signout: (callback: () => void) => void;
}
interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth= (): AuthContextType | null => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: AuthProviderProps) => {
const [user, setUser] = useState<string | null>(null)
const [password, setPassword] = useState<string | null>(null)

const signin = (newUser: string  , userPassword: string, callback: () => void)=>{
    setUser(newUser)
    setPassword(userPassword)
    callback()
}

const signout = (callback: () => void)=>{
    setUser(null)
    setPassword(null)
    callback()
}

    const value: AuthContextType = {
        user,
        password,
        signin,
        signout,
    }


    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}