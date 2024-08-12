import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAtIcon } from '@mui/icons-material'
import { VisuallyHidenInput } from '../components/styles/StyledComponents';
const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const togleLogin = () => setLogin(prev => !prev);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
        {isLogin ? (
          <>
            <Typography variant='h5'>
              Login
            </Typography>
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
                label="Password"
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
          </>) : (<>
            <Typography variant='h5'>
              Sign Up
            </Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem"
            }}>
              <Stack
                position={"relative"}
                width={"10rem"}
                margin={"auto"}
              >
                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} />
                <IconButton
                sx={{
                  position:"absolute",
                  bottom:0,
                  right:0,
                  color:"white",
                  bgcolor:"rgba(0,0,0,0.5)",
                  ":hover":{
                    bgcolor:"rgba(0,0,0,0.7)"
                  },
                }}
                component="label"
                >
                  <>
                    <CameraAtIcon />
                    <VisuallyHidenInput type='file'/>
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant='outlined'
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant='outlined'
              />
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
                label="Password"
                type='password'
                margin="normal"
                variant='outlined'
              />
              <Button sx={{ marginTop: '1rem' }} type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
              <Button
                fullWidth
                variant='text'
                onClick={togleLogin}
              >Login Instead</Button>
            </form>
          </>
        )
        }
      </Paper>
    </Container>
  )
}

export default Login