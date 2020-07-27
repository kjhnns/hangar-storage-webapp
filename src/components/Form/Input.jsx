import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Input as RebassInput } from '@rebass/forms'

import { Text } from '@components/Typography'

const StyledInput = props => (
  <RebassInput
    {...props}
    sx={{
      borderRadius: 'default',
      boxShadow: 'primaryBase',
      minHeight: '50px',
      bg: 'rgba(255,255,255,0.6)',
    }}
  />
)

const Input = ({ type, ...props }) => {
  const [field, meta] = useField(props)
  const { name } = props

  return (
    <>
      <StyledInput type={type} id={name} {...field} {...props} />
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
    </>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  /** Name specifies for which value within a form this input is */
  name: PropTypes.string.isRequired,
  /** Type of input field */
  type: PropTypes.string,
}

export { Input }
