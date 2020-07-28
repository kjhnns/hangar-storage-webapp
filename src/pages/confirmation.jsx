import React from 'react'

import { Layout } from '@components/Layout'
import { Logo } from '@components/Logo'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'
import { Heading, Text } from '@components/Typography'

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
          <Text my={3} color="primary.700">
            Pronto!
          </Text>
          <Text color="gray.900" px={[4, 4, 6]} py={2} textAlign="center">
            O seu inventário foi enviado e está registrado nos nossos
            servidores.
          </Text>
          <Text color="gray.900" px={[4, 4, 6]} py={2} textAlign="center">
            Você também irá receber uma mensagem no seu WhatsApp com os números
            das etiquetas de suas caixas. Caso deseje receber o relatório
            completo, com número de lacres e descrição de conteúdo, solicite
            através de nossos canais de atendimento.
          </Text>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
