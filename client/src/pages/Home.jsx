import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Container, Button, Typography, Stack} from '@mui/material'
export const Home = () => {
  const navigate = useNavigate();
  const handleDifficulty = (e) => {
    const level = e.target.value
    navigate(`/game/${level}`)
  } 
  return(
    <Container sx={{textAlign: 'center', mt:10}}>
      <Typography variant='h2' sx={{fontFamily:'Bangers, Poppins', color: '#00c6ff' }}>Flip the tiles</Typography>
      <Typography variant='h6' sx={{m:4 }}>Select the Difficulty</Typography>
      <Stack sx={{alignItems: 'center'}} spacing={2}>
        <Button variant='outlined' value={'easy'} onClick={handleDifficulty}>Easy</Button>
        <Button variant='outlined' value={'medium'} onClick={handleDifficulty}>Medium</Button>
        <Button variant='outlined' value={'hard'} onClick={handleDifficulty}>Difficult</Button>

      </Stack>
    </Container>
    )
}