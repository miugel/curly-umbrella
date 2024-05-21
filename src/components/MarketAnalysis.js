import React, { useState } from 'react'
import {
  Center,
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Text
} from '@chakra-ui/react'
import '../styles.css'

export const MarketAnalysis = () => {
  const [address, setAddress] = useState('')

  const searchAddress = () => {
    console.log('search')
  }

  return (
    <Center>
      <Box w='90%' maxW='768px'>
        <Heading mt='32px' mb='8px'>
          Create a CMA (competitive market analysis)
        </Heading>
        <Text fontSize='lg' fontWeight='500' mb='32px'>
          View similar homes sold based on a given address to come up with an
          estimated value.
        </Text>

        <FormControl>
          <FormLabel>Enter an address:</FormLabel>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='123 Main St'
          />
        </FormControl>
      </Box>
    </Center>
  )
}
