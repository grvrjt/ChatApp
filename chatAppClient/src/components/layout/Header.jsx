import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon } from '@mui/icons-material'


const Header = () => {

  const handleMove = () => {
    console.log("Handle move clicked !")
  }
  const openSearchDialog = () => {
    console.log("open Search Dialog clicked !")
  }
  
  const openNewGroup = () => {
    console.log("open Search Dialog clicked !")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{
          bgcolor: orange
        }}>
          <Toolbar>
            <Typography variant="h6"
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" }
              }}

            >
              <IconButton color="inherit" onClick={handleMove}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{
              flexGrow: 1
            }} />
            <Box>
              <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header