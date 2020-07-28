import React from 'react'

import { Box } from '@components/Grid'
import { Card } from './Card'
import { AddModal } from './AddModal'

const Boxes = () => {
  return (
    <Box
      sx={{
        py: 4,
        maxWidth: '800px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Card
        serialNo="789351235"
        seal01={654312}
        seal02={123545}
        description="asdjflkdshjfdj fsdjfdsjlk fjdslkf jdslkjf lkdsjf"
      />
      <Card
        serialNo="789351235"
        seal01={654312}
        seal02={123545}
        description="asdjflkdshjfdj fsdjfdsjlk fjdslkf jdslkjf lkdsjf"
      />
      <AddModal />
    </Box>
  )
}
export { Boxes }
