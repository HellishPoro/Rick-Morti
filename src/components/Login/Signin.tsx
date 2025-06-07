import { useState } from "react"
import { PASSWORD_REGEX } from "../../constants/RegexConstants"
import { useAuth } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../ui/AuthForm"
import './Signin.css'

export const Signin = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const currentUser = formData.get('username')

    if (typeof currentUser === 'string') {
      if (!PASSWORD_REGEX.test(password)) {
        setPasswordError('Password must be 8-20 characters long, contain at least one uppercase letter, one number and one special character')
      } else {
        setPasswordError('')
      }

      if (PASSWORD_REGEX.test(password)) {
        auth?.signin(currentUser, password, () => {
          navigate('/')
        })
      }
    }
  }

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <AuthForm
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
        passwordError={passwordError}
        onSubmit={handleSubmit}
        />
    </div>
  )
}
