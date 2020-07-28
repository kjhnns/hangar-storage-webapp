import React from 'react'
import PropTypes from 'prop-types'

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

const Card = ({ serialNo, seal01, seal02, description }) => (
  <Box
    sx={{
      bg: 'white',
      borderRadius: [0, 3, 3],
      p: 3,
      boxShadow: 'base',
      m: [0, 3, 3],
      mb: 3,
      display: 'grid',
      gridTemplateColumns: '1fr .1fr',
      width: '100%',
      maxWidth: '600px',
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
      <Box sx={valueTableStyle}>{serialNo}</Box>
      <Box sx={labelTableStyle}>Lacre #1</Box>
      <Box sx={valueTableStyle}>{seal01}</Box>
      <Box sx={labelTableStyle}>Lacre #2</Box>
      <Box sx={valueTableStyle}>{seal02}</Box>
      <Box sx={labelTableStyle}>Descrição</Box>
      <Box sx={valueTableStyle}>{description}</Box>
    </Box>
    <Box>
      <img src={DeleteIcon} alt="remover" sx={{ fill: 'red.500' }} />
    </Box>
  </Box>
)

Card.propTypes = {
  serialNo: PropTypes.string.isRequired,
  seal01: PropTypes.number.isRequired,
  seal02: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export { Card }
