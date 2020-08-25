import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'
import PlusIcon from './PlusIcon.svg'

const Button = styled.button`
  position: absolute;
  right: calc(50% - 450px);
  top: 55px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: ${props => props.theme.colors.primary[700]};
  border: none;
  text-align: center;
  line-height: 0;
  letter-spacing: 0;
  outline: none;
  color: ${props => props.theme.colors.white};
  font-size: 36px;
  box-shadow: 2px 2px 3px #999;
  transition: 0.3s;
  padding: 0;

  &:hover {
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 6px 9px rgba(0, 0, 0, 0.23);
  }

  &:focus {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    position: fixed;
    top: inherit;
    bottom: 83px;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    right: 23px;
  }
`

const AddButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <img src={PlusIcon} alt="add" width="25%" />
  </Button>
)

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export { AddButton }
