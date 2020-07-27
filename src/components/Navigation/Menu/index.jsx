import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@components/Grid'

const Wrapper = {
  flex: '1',
  display: 'flex',
  mx: 2,
}

const Menu = ({ stepNo, stepName }) => (
  <Flex sx={Wrapper}>
    <Flex flexDirection="column">
      <Box
        mb={1}
        sx={{ color: 'gray.700', textTransform: 'uppercase', fontSize: 1 }}
      >
        Step {stepNo}
      </Box>
      <Box mb={2}>{stepName}</Box>
    </Flex>
  </Flex>
)

Menu.propTypes = {
  stepName: PropTypes.string.isRequired,
  stepNo: PropTypes.number.isRequired,
}

export default Menu
