import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
        <Stack direction="column" spacing={2} width={'350px'} justifyContent={'center'} alignItems={'center'} margin={'0 auto'}>
            <Button variant="contained" color="success" onClick={onHandleSignout}>
                Sign out
            </Button>
        </Stack>
        </>
    )
}