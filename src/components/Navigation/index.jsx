import React from 'react'

import { Flex, Box } from '@components/Grid'
import { Logo } from '@components/Logo'

import Menu from './Menu'

const MenuBar = () => (
  <Flex
    sx={{
      width: '100%',
      py: 2,
      px: [3, 3, 1],
      bg: 'white',
      boxShadow: 'large',
    }}
  >
    <Flex
      sx={{
        margin: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        width: '800px',
        // bg: 'gray.400',
      }}
    >
      <Box width={['40px', '64px', '64px']}>
        <Logo />
      </Box>
      <Menu />
      <Box>back</Box>
    </Flex>
  </Flex>
)

export { MenuBar }
