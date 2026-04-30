import { Box } from '@mui/material'
import React from 'react'
import IjorMenu from '../LeftBar/IjorMenu'
import Downloads from '../LeftBar/Downloads'
import LatestNews from '../LeftBar/LatestNews'

const LeftBar = ({style}) => {
  return (
    <Box sx={[style, {display: 'grid', rowGap: 3}]} p={1}>
      <IjorMenu/>
      <Downloads/>
      <LatestNews/>
    </Box>
  )
}

export default LeftBar
