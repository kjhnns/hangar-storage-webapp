import '@reach/dialog/styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'
import { Dialog } from '@reach/dialog'
import { Flex, Box } from '@components/Grid'
import { Button } from '@components/Button'
import { Heading, Text } from '@components/Typography'
import { Scanner } from './Scanner'
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

const AddModal = ({ addCardHandler }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [serialNo, setSerialNo] = useState('')
  const open = () => setShowDialog(true)
  const close = async () => {
    await setSerialNo('')
    return setShowDialog(false)
  }

  if (scanning) {
    return (
      <Box>
        <AddButton onClick={open} />
        <ResponsiveDialog aria-label="Add Box" isOpen={showDialog}>
          <Flex flexDirection="column" alignItems="center">
            <Heading textAlign="center" as="h1">
              Escanear Etiqueta
            </Heading>
            <Text m={2} textAlign="center">
              Aponte a câmera do seu celular para o código de barras
            </Text>
            <Scanner
              onDetected={barCode => {
                setSerialNo(barCode)
                setScanning(false)
              }}
            />
            <Box mt={2}>
              <Button onClick={() => setScanning(false)}>Voltar</Button>
            </Box>
          </Flex>
        </ResponsiveDialog>
      </Box>
    )
  }

  return (
    <Box>
      <AddButton onClick={open} />
      <ResponsiveDialog aria-label="Add Box" isOpen={showDialog}>
        <AddBox
          addCardHandler={addCardHandler}
          startScanner={() => setScanning(true)}
          serialNo={serialNo}
          closeModal={close}
        />
      </ResponsiveDialog>
    </Box>
  )
}

AddModal.propTypes = {
  addCardHandler: PropTypes.func.isRequired,
}

export { AddModal }
