import React from 'react'
import styled from '@emotion/styled'
import { Card } from './Card'
import { Box } from '@components/Grid'

const AddButton = styled.button`
  position: absolute;
  top: 60px;
  left: calc(80% - 60px);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${props => props.theme.colors.primary[700]};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.white};
  font-size: 36px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 6px 9px rgba(0, 0, 0, 0.23);
  }

  &:focus {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.23);
  }
`

const Boxes = () => (
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
    <Card />
    <Card />
    <AddButton>+</AddButton>
  </Box>
)

export { Boxes }
