import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

interface PrivedRoutProps {
    children: React.ReactNode;
}

export const PrivedRout = ({children}: PrivedRoutProps) => {
    const auth = useAuth()

    if(!auth || !auth.user) {
        return <Navigate to='/login'/>
    }

    return children
}