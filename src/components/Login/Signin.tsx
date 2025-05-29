import { useState } from "react"
import { PASSWORD_REGEX } from "../../constants/RegexConstants"
import { TextInput } from "../../ui/TextInput"
import { useAuth } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom"
import './Signin.css'

export const Signin = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()

    const auth = useAuth()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formDate = new FormData(e.target as HTMLFormElement)
        const currentUser = formDate.get('username')

        if (typeof currentUser === 'string') {
            if (!PASSWORD_REGEX.test(password)) {
                setPasswordError('Password must be 8-20 characters long, contain at least one uppercase letter, one number and one special character');
            } else {
                setPasswordError('');
            }
    
            if (PASSWORD_REGEX.test(password)) {
                auth?.signin(currentUser, password, () => {
                    navigate('/');
                });
            }
        }
    }
    return (
        <div className="signin">
            <h1>Sign In</h1>
            <form
            onSubmit={handleSubmit}
            >
                <div>
                    <TextInput
                    id="text"
                    label="Name"
                    type="text"
                    name="username"
                    value={user}
                    required={true}
                    onChange={(e)=> setUser(e.target.value)}
                    className="input-text"
                    />
                </div>
                <div>
                    <TextInput
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    required={true}
                    onChange={(e)=> setPassword(e.target.value)}
                    error={passwordError}
                    className="input-text"
                    />
                </div>
                <button className="button" type="submit">Sign in</button>
            </form>
        </div>
    )
}