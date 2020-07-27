import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '@components/Layout'
import { MenuBar } from '@components/Navigation'
import { SEO } from '@components/SEO'
import { Flex, Box } from '@components/Grid'
import { Heading, Text } from '@components/Typography'
import { Button } from '@components/Button'

const stepBoxStyle = {
  bg: 'primary.100',
  my: 2,
  px: 4,
  py: 3,
  fontSize: [2, 3, 3],
  alignItems: 'center',
  display: 'flex',
  textAlign: 'left',
}

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
        <MenuBar />
        asd
      </Box>
    </Layout>
  )
}

export default PersonalInformationPage
