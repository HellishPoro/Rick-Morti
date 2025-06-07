import React from 'react';
import { Stack, TextField, Button } from '@mui/material';

type AuthFormProps = {
  user: string;
  setUser: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  passwordError?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({
  user,
  setUser,
  password,
  setPassword,
  passwordError,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
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
          helperText={passwordError}
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
  );
};

