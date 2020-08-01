import React, { useState } from 'react'
import { Link } from 'gatsby'

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
    await setCardList(newList)
    return { success: true }
  }

  if (CardList.length <= 0) {
    return (
      <Box>
        <Text color="gray.900" py={4} textAlign="center">
          Preciso seus caixas
        </Text>
        <AddModal addCardHandler={addCardHandler} />
        <Flex sx={nextButtonStyle}>
          <Button variant="disabled">Avançar</Button>
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
      {CardList.map(({ serialNo, seal01, seal02, description }) => (
        <Card
          key={serialNo}
          serialNo={serialNo}
          seal01={seal01}
          seal02={seal02}
          description={description}
          deleteCardHandler={async () => {
            const newList = await CardController.delete(CardList, serialNo)
            await setCardList(newList)
          }}
        />
      ))}
      <AddModal addCardHandler={addCardHandler} />
      <Flex sx={nextButtonStyle}>
        <Button as={Link} to="/confirmation">
          Avançar
        </Button>
      </Flex>
    </Box>
  )
}
export { Boxes }
