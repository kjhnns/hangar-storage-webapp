import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from 'gatsby'
import { Button } from '@components/Button'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Typography'
import { Card } from './Card'
import { AddModal } from './AddModal'

const CardController = {
  isDuplicate: async (list, serialNo) => {
    const duplicates = list.filter(
      ({ serialNo: itemSerialNo }) => itemSerialNo === serialNo
    )
    return duplicates.length > 0
  },
  add: async (list, { serialNo, seal01, seal02, description }) => [
    { serialNo, seal01, seal02, description },
    ...list,
  ],
  delete: async (list, serialNo) =>
    list.filter(val => val.serialNo !== serialNo),
}

const nextButtonStyle = {
  justifyContent: 'center',
  bg: 'white',
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  p: 1,
  boxShadow: 'large',
}

const Boxes = () => {
  const [CardList, setCardList] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const loadLocalStorage = async () => {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        if (sessionStorage.getItem('boxes')) {
          setCardList(JSON.parse(sessionStorage.getItem('boxes')))
        }
      }
    }
    loadLocalStorage()
  }, [])

  const SubmitForm = async () => {
    setSubmitting(true)
    setErrorMessage(null)
    if (
      typeof window !== 'undefined' &&
      window.sessionStorage &&
      window.localStorage
    ) {
      const boxes = JSON.parse(sessionStorage.getItem('boxes'))
      const personalInformation = JSON.parse(
        localStorage.getItem('personalInformation')
      )
      if (
        !personalInformation ||
        !personalInformation.name ||
        !personalInformation.cpf ||
        !personalInformation.email
      ) {
        await navigate('/person')
      }

      try {
        const response = await axios.post(
          `${process.env.GATSBY_LAMBDA_URL}/save`,
          {
            boxes,
            personalInformation,
          }
        )

        if (response.status === 200) {
          await navigate('/confirmation')
        } else {
          setErrorMessage('Unexpected error')
        }
      } catch (err) {
        setErrorMessage(err.message)
        setSubmitting(false)
      }
    }
  }

  const deleteCardHandler = async serialNo => {
    const newList = await CardController.delete(CardList, serialNo)
    if (typeof window !== 'undefined' && window.sessionStorage) {
      await sessionStorage.setItem('boxes', JSON.stringify(newList))
    }
    await setCardList(newList)
  }

  const addCardHandler = async ({ serialNo, seal01, seal02, description }) => {
    if (await CardController.isDuplicate(CardList, serialNo)) {
      return { success: false }
    }
    const newList = await CardController.add(CardList, {
      serialNo,
      seal01,
      seal02,
      description,
    })
    if (typeof window !== 'undefined' && window.sessionStorage) {
      await sessionStorage.setItem('boxes', JSON.stringify(newList))
    }
    await setCardList(newList)
    return { success: true }
  }

  if (CardList.length <= 0) {
    return (
      <Box>
        <Text color="gray.900" py={4} textAlign="center">
          Clique no + para adicionar caixas
        </Text>
        <AddModal addCardHandler={addCardHandler} />
        <Flex sx={nextButtonStyle}>
          <Button variant="disabled">Submeter Inventário</Button>
        </Flex>
      </Box>
    )
  }

  return (
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
      {errorMessage !== null ? (
        <Text sx={{ color: 'red.800' }}>{errorMessage}</Text>
      ) : (
        ''
      )}
      {CardList.map(({ serialNo, seal01, seal02, description }) => (
        <Card
          key={serialNo}
          serialNo={serialNo}
          seal01={seal01}
          seal02={seal02}
          description={description}
          deleteCardHandler={() => deleteCardHandler(serialNo)}
        />
      ))}
      <AddModal addCardHandler={addCardHandler} />
      <Flex sx={nextButtonStyle}>
        <Button onClick={SubmitForm}>
          {submitting ? 'Submeter Inventário ...' : 'Submeter Inventário'}
        </Button>
      </Flex>
    </Box>
  )
}
export { Boxes }
