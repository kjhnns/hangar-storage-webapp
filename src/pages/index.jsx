import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '@components/Layout'
import { Logo } from '@components/Logo'
import { SEO } from '@components/SEO'
import { Flex, Box } from '@components/Grid'
import { Heading, Text } from '@components/Typography'
import { Button } from '@components/Button'

const stepBoxStyle = {
  bg: 'primary.100',
  my: 2,
  px: 4,
  py: 3,
  alignItems: 'center',
  display: 'flex',
  textAlign: 'left',
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Box
        sx={{
          pb: '84px',
          minHeight: '100vh',
          bg: 'gray.100',
        }}
      >
        <Box
          sx={{
            py: 4,
            maxWidth: '800px',
            bg: 'white',
            margin: 'auto',
            boxShadow: 'large',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box mb={2} width={['64px', '128px', '128px']}>
            <Logo />
          </Box>
          <Heading as="h1" sx={{ textTransform: 'uppercase' }}>
            Hangar Storage
          </Heading>
          <Text my={3} color="gray.900">
            Steps to register your boxes:
          </Text>
          <Flex flexDirection="column">
            <Box sx={stepBoxStyle}>1. Informações Pessoais</Box>
            <Box sx={stepBoxStyle}>2. Cadastro de Caixas</Box>
            <Box sx={stepBoxStyle}>3. Solicitar Entrega/Coleta</Box>
          </Flex>
          <Box m={3}>
            <Button as={Link} to="/person">
              Avançar
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
