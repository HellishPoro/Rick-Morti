import { useState } from "react"
import { PASSWORD_REGEX } from "../../constants/RegexConstants"
import { useAuth } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
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
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} width="350px" margin="0 auto">
        <TextField
            label="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
                style: {
                color: "#ffffff",    
                backgroundColor: "#1e1e1e",
                borderRadius: '4px',
                },
            }}
            InputLabelProps={{
                style: {
                color: "#cccccc",    
                },
            }}
        />


        <TextField
            label="Password"
            type="password"
            value={password}
            name="password"
            required
            error={!!passwordError}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
                style: {
                color: "#ffffff",        
                backgroundColor: "#1e1e1e", 
                borderRadius: '4px',
                },
            }}
            InputLabelProps={{
                style: {
                color: "#cccccc",     
                },
            }}
        />

          <Button variant="contained" color="success" type="submit">
            Sign in
          </Button>
        </Stack>
      </form>
    </div>
  )
}
