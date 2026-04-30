import { CircularProgress, Typography } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='fixed bg-white w-screen h-screen z-10 grid place-content-center justify-center'>
      <CircularProgress className='m-auto' sx={{mb: 3}} color='secondary'/>
      <Typography>Please Wait...</Typography>
    </div>
  )
}

export default Loader
