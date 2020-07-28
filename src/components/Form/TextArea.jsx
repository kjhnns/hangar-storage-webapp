/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Textarea as RebassTextArea } from '@rebass/forms'

import { Text } from '@components/Typography'

const StyledTextArea = props => (
  <RebassTextArea
    {...props}
    sx={{
      borderRadius: 'default',
      boxShadow: 'primaryBase',
      minHeight: '100px',
      bg: 'rgba(255,255,255,0.6)',
      fontFamily: 'body',
    }}
  />
)

const TextArea = ({ type, ...props }) => {
  const [field, meta] = useField(props)
  const { name } = props

  return (
    <>
      <StyledTextArea type={type} id={name} {...field} {...props} />
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
    </>
  )
}

TextArea.defaultProps = {
  type: 'text',
}

TextArea.propTypes = {
  /** Name specifies for which value within a form this TextArea is */
  name: PropTypes.string.isRequired,
  /** Type of TextArea field */
  type: PropTypes.string,
}

export { TextArea }
