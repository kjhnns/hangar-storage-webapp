import React from 'react'

import { Box } from '@components/Grid'
import DeleteIcon from './DeleteIcon.svg'

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
      display: 'grid',
      gridTemplateAreas: '"main delete"',
    }}
  >
    <Box sx={{ gridArea: 'delete' }}>
      <img src={DeleteIcon} alt="remover" sx={{ fill: 'red.500' }} />
    </Box>
    <Box
      sx={{
        gridArea: 'main',
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
  </Box>
)

export { Card }
