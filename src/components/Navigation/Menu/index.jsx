import React from 'react'
import { Flex, Box } from '@components/Grid'

const Wrapper = {
  flex: '1',
  display: 'flex',
  // bg: 'gray.200',
  pl: 4,
}

const Menu = () => (
  <Flex sx={Wrapper}>
    <Flex flexDirection="column">
      <Box
        mb={1}
        sx={{ color: 'gray.700', textTransform: 'uppercase', fontSize: 1 }}
      >
        Step 1
      </Box>
      <Box mb={2}>Informações Pessoais</Box>
    </Flex>
  </Flex>
)

export default Menu
