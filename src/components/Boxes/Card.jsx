import React from 'react'

import { Button } from '@components/Button'
import { Flex, Box } from '@components/Grid'

const labelTableStyle = {
  color: 'primary.800',
  p: 2,
  textAlign: ['inherit', 'right', 'right'],
}

const valueTableStyle = {
  p: 2,
}

const Card = () => (
  <Box
    sx={{
      bg: 'white',
      borderRadius: [0, 3, 3],
      p: 3,
      boxShadow: 'base',
      m: [0, 3, 3],
      mb: 3,
    }}
  >
    <Box
      sx={{
        gridTemplateColumns: ['1fr', '0.5fr 1fr', '0.5fr 1fr'],
        display: 'grid',
        maxWidth: '600px',
      }}
    >
      <Box sx={labelTableStyle}>Etiqueta Caixa</Box>
      <Box sx={valueTableStyle}>789351235</Box>
      <Box sx={labelTableStyle}>Lacre #1</Box>
      <Box sx={valueTableStyle}>12343</Box>
      <Box sx={labelTableStyle}>Lacre #2</Box>
      <Box sx={valueTableStyle}>654312</Box>
      <Box sx={labelTableStyle}>Descrição</Box>
      <Box sx={valueTableStyle}>
        Snowboats, T-Shirts, Ski cloth, hat, bottles, Snowboats, T-Shirts, Ski
        cloth, hat, bottles, Snowboats, T-Shirts, Ski cloth, hat, bottles,
        Snowboats, T-Shirts, Ski cloth, hat, bottles,
      </Box>
    </Box>
    <Flex my={2} justifyContent="center">
      <Button variant="remove">remover</Button>
    </Flex>
  </Box>
)

export { Card }
