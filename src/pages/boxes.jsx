import React from 'react'

import { Layout } from '@components/Layout'
import { MenuBar } from '@components/Navigation'
import { Boxes } from '@components/Boxes'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'

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
        <MenuBar stepName="Cadastro de Caixas" stepNo={2} backLink="/person" />
        <Boxes />
      </Box>
    </Layout>
  )
}

export default BoxesPage
