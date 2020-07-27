import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { navigate } from 'gatsby'
import { withFormik } from 'formik'

import { Box, Flex } from '@components/Grid'
import { Button } from '@components/Button'
import { Heading, Text } from '@components/Typography'
import { Form, Input } from '@components/Form'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  cpf: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
})

const PurePersonalInformation = ({ errors, handleSubmit, isSubmitting }) => (
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
        Informações Pessoais
      </Heading>
      <Box my={2}>
        <Text>Nome*</Text>
        <Input type="text" name="name" />
      </Box>
      <Box my={2}>
        <Text>CPF*</Text>
        <Input type="text" name="cpf" />
      </Box>
      <Box my={2}>
        <Text>Celular*</Text>
        <Input type="text" name="phone" />
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
      <Flex my={2} justifyContent="center">
        <Button type="submit">Avançar</Button>
      </Flex>
    </Box>
  </Form>
)

const PersonalInformation = withFormik({
  mapPropsToValues: () => ({
    nome: '',
    cpf: '',
    phone: '',
  }),
  validationSchema,
  handleSubmit: async (values, { setSubmitting, setErrors }) => {
    setErrors({ response: '' })
    setSubmitting(true)
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
    await navigate('/boxes')
    setSubmitting(false)
  },
  displayName: 'Personal Information',
})(PurePersonalInformation)

PurePersonalInformation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.any.isRequired,
}

export { PersonalInformation, PurePersonalInformation }
