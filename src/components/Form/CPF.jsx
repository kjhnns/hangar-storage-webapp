/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { useField } from 'formik'
import { Input as RebassInput } from '@rebass/forms'

import { Text } from '@components/Typography'

const StyledInput = props => (
  <RebassInput
    {...props}
    innerRef={null}
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    ref={props.innerRef}
    type="text"
    sx={{
      borderRadius: 'default',
      boxShadow: 'primaryBase',
      minHeight: '50px',
      bg: 'rgba(255,255,255,0.6)',
    }}
  />
)

const MaskedStyledInput = props => (
  <MaskedInput
    mask={[
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ]}
    placeholder="___.___.___-__"
    render={(innerRef, innerProps) => (
      <StyledInput innerRef={innerRef} {...innerProps} />
    )}
    {...props}
  />
)

const CPF = ({ ...props }) => {
  const [field, meta] = useField(props)
  const { name } = props

  return (
    <>
      <MaskedStyledInput id={name} {...field} {...props} />
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
    </>
  )
}

CPF.propTypes = {
  /** Name specifies for which value within a form this input is */
  name: PropTypes.string.isRequired,
}

export { CPF }
