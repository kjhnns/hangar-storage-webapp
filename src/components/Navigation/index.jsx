import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@components/Link'

import { Flex, Box } from '@components/Grid'
import { Logo } from '@components/Logo'

import Menu from './Menu'

const MenuBar = ({ backLink, stepNo, stepName }) => (
  <Flex
    sx={{
      width: '100%',
      py: 2,
      px: 3,
      bg: 'white',
      boxShadow: 'medium',
    }}
  >
    <Flex
      sx={{
        margin: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        width: '800px',
      }}
    >
      {backLink ? (
        <Box mx={2} mr={3}>
          <Link
            to={backLink}
            sx={{
              textDecoration: 'none',
              fontSize: [4, 4, 5],
              fontWeight: 500,
              color: 'gray.600',
            }}
          >
            ←
          </Link>
        </Box>
      ) : (
        ''
      )}
      <Box mx={2} width={['40px', '64px', '64px']}>
        <Logo />
      </Box>
      <Menu stepNo={stepNo} stepName={stepName} />
    </Flex>
  </Flex>
)

MenuBar.propTypes = {
  stepName: PropTypes.string.isRequired,
  stepNo: PropTypes.number.isRequired,
  backLink: PropTypes.string,
}

export { MenuBar }
