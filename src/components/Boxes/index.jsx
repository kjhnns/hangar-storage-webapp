import React from 'react'
import { Link } from 'gatsby'

import { Button } from '@components/Button'
import { Flex, Box } from '@components/Grid'
import { Card } from './Card'
import { AddModal } from './AddModal'

const nextButtonStyle = {
  justifyContent: 'center',
  bg: 'white',
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  p: 1,
  boxShadow: 'large',
}

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
        description="gdfgfdgdf "
      />
      <Card
        serialNo="789351235"
        seal01={654312}
        seal02={123545}
        description="asdjflkdshjfdj fsdjfdsjlk fjdslkf jdslkjf lkdsjf"
      />
      <AddModal />
      <Flex sx={nextButtonStyle}>
        <Button as={Link} to="/confirmation">
          Avançar
        </Button>
      </Flex>
    </Box>
  )
}
export { Boxes }
