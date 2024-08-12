import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material'

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const togleLogin = () => setLogin(false);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
      }}>
      <Paper
        elevation={3}
        sx={
          {
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }
      >
        {isLogin ? (<><Typography variant='h5'>Login</Typography>
          <form style={{
            width: "100%",
            marginTop: "1rem"
          }}>
            <TextField
              required
              fullWidth
              label="userName"
              margin="normal"
              variant='outlined'
            />
            <TextField
              required
              fullWidth
              label="password"
              type='password'
              margin="normal"
              variant='outlined'
            />
            <Button sx={{ marginTop: '1rem' }} type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >Login</Button>
            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
            <Button
              fullWidth
              variant='text'
              onClick={togleLogin}
            >Sign up Instead</Button>
          </form>
        </>) : (<span>Register</span>)}
      </Paper>
    </Container>
  )
}

export default Login