import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '@components/Layout'
import { Button } from '@components/Button'
import { MenuBar } from '@components/Navigation'
import { Boxes } from '@components/Boxes'
import { SEO } from '@components/SEO'
import { Flex, Box } from '@components/Grid'

const BoxesPage = () => {
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
        <MenuBar stepName="Cadastro de Caixas" stepNo="2" backLink="/person" />
        <Boxes />

        <Flex my={2} justifyContent="center">
          <Button as={Link} to="/confirmation">
            Avançar
          </Button>
        </Flex>
      </Box>
    </Layout>
  )
}

export default BoxesPage
