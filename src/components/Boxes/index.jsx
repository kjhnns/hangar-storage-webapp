import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'
import { Box } from '@components/Grid'
import { Card } from './Card'

const AddButton = styled.button`
  position: fixed;
  right: calc(50% - 450px);
  top: 55px;
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

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    top: inherit;
    bottom: 23px;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    right: 23px;
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
