import '@reach/dialog/styles.css'
import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'
import { Dialog } from '@reach/dialog'

import { Box } from '@components/Grid'
import { AddButton } from './AddButton'
import { AddBox } from './AddBox'

const ResponsiveDialog = styled(Dialog)`
  width: 100vw;
  min-height: 100vw;
  padding: 10vh 0;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 80vw;
    border-radius: ${props => `'${props.theme.radii.default}px'`};
    padding: 2rem;
    margin: 10vh auto;
    min-height: inherit;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 50vw;
    border-radius: ${props => `'${props.theme.radii.default}px'`};
  }
`

const AddModal = () => {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <Box>
      <AddButton onClick={open}>+</AddButton>
      <ResponsiveDialog
        aria-label="Add Box"
        isOpen={showDialog}
        onDismiss={close}
      >
        <AddBox closeModal={close} />
      </ResponsiveDialog>
    </Box>
  )
}
export { AddModal }
