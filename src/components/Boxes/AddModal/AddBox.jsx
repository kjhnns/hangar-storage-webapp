import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { withFormik } from 'formik'

import { Box, Flex } from '@components/Grid'
import { Button } from '@components/Button'
import { Heading, Text } from '@components/Typography'
import { Form, Input, TextArea } from '@components/Form'

// https://codesandbox.io/s/lyr3nq0vlm?file=/src/Scanner.js

const validationSchema = Yup.object().shape({
  serialNo: Yup.string().required('Required'),
  seal01: Yup.string().required('Required'),
  seal02: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
})

const PureAddBox = ({ errors, handleSubmit, closeModal }) => (
  <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
    <Box
      sx={{
        py: [1, 2, 4],
        px: 3,
        maxWidth: '450px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Heading textAlign="center" as="h1">
        Add Box
      </Heading>
      <Box my={2}>
        <Text>Etiqueta Caixa*</Text>
        <Input type="text" name="serialNo" />
      </Box>
      <Box my={2}>
        <Text>Lacre #1*</Text>
        <Input type="text" name="seal01" />
      </Box>
      <Box my={2}>
        <Text>Lacre #2*</Text>
        <Input type="text" name="seal02" />
      </Box>
      <Box my={2}>
        <Text>Descrição*</Text>
        <TextArea type="text" name="description" />
      </Box>
      {errors.response && (
        <Box
          my={2}
          sx={{
            p: 3,
            mb: 3,
            bg: 'red.200',
            color: 'red.900',
            borderRadius: 'default',
          }}
        >
          <Text>{errors.response}</Text>
        </Box>
      )}
      <Flex
        my={2}
        flexDirection={['column', 'row', 'row']}
        justifyContent="center"
      >
        <Button type="submit">Add</Button>
        <Button variant="clear" onClick={closeModal}>
          cancel
        </Button>
      </Flex>
    </Box>
  </Form>
)

const AddBox = withFormik({
  mapPropsToValues: () => ({
    serialNo: '',
    seal01: '',
    seal02: '',
    description: '',
  }),
  validationSchema,
  handleSubmit: async (
    values,
    { props: { closeModal, addCardHandler }, setErrors }
  ) => {
    await setErrors({ response: '' })
    // const result = await updateEmail(values)
    // if (!result.success) {
    //   setErrors({ response: result.description.message })
    // }
    // if (result.success) {
    //   await handleLogin({
    //     email: await getUser().email,
    //     password: values.password,
    //   })
    //   await navigate('/settings')
    // }
    await addCardHandler(values)
    await closeModal()
  },

  displayName: 'Add Box',
})(PureAddBox)

PureAddBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.any.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export { AddBox, PureAddBox }
