import React, { useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { Button } from '@components/Button'
import { Heading, Text } from '@components/Typography'
import { Box, Flex } from '@components/Grid'

import DeleteIcon from './DeleteIcon.svg'

const ResponsiveDialog = styled(Dialog)`
  width: 100vw;

  @media (min-width: 750px) {
    width: 50vw;
  }
`

const DeleteDialog = ({ deleteHandler }) => {
  const [showDialog, setshowDialog] = useState(false)
  const open = () => setshowDialog(true)
  const close = () => setshowDialog(false)
  return (
    <Box>
      <Box onClick={open}>
        <img src={DeleteIcon} alt="remover" sx={{ fill: 'red.500' }} />
      </Box>
      <ResponsiveDialog
        aria-label="Warning about next steps"
        isOpen={showDialog}
        onDismiss={close}
      >
        <Flex flexDirection="column">
          <Heading py={3}>Eliminar caixa?</Heading>
          <Text py={3}>
            Isto não pode ser desfeita e irá eliminar esta caixa.
          </Text>
          <Flex
            py={3}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              onClick={async () => {
                await deleteHandler()
                await close()
              }}
            >
              Eliminar
            </Button>
            <Button variant="clear" onClick={close}>
              Cancelar
            </Button>
          </Flex>
        </Flex>
      </ResponsiveDialog>
    </Box>
  )
}

DeleteDialog.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
}

export { DeleteDialog }
