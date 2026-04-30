import { Box } from '@mui/material'
import React from 'react'
import BoardMembers from './BoardMembers'
import EditorialBoardTable from './EditorialBoardTable'

const EditorialBoard = () => {
  return (
    <Box mx={2} my={2}>

      <BoardMembers/>

      <EditorialBoardTable/>
    </Box>
  )
}

export default EditorialBoard
