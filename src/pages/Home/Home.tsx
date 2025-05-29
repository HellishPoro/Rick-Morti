import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import './Home.css'

export const Home = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const onHandleSignout = ()=>{
        if(!auth || !auth.signout) return;

        auth.signout(()=>{
            navigate('/')
        })
    }

    if(!auth || !auth.user) {
        return <h1 className="title">Welcome to the Rick and Morty universe</h1>
    }
    return (    
        <>
            <h1 className="title">Welcome to the Rick and Morty universe: {auth.user}</h1>
            <button className='btn' onClick={onHandleSignout}>Signout</button>
        </>
    )
}