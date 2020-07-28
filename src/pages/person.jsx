import React from 'react'

import { Layout } from '@components/Layout'
import { MenuBar } from '@components/Navigation'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'
import { PersonalInformation } from '@components/PersonalInformation'

const PersonalInformationPage = () => {
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
        <MenuBar stepName="Informações Pessoais" stepNo={1} backLink="/" />
        <Box
          sx={{
            py: 4,
            maxWidth: '800px',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <PersonalInformation />
        </Box>
      </Box>
    </Layout>
  )
}

export default PersonalInformationPage
