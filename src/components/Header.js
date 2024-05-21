import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Center, Box, Flex, Heading } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Center bg='#fd5c63' h='64px' mb='16px'>
      <Box w='90%' maxW='768px'>
        <Flex justifyContent='space-between'>
          <Heading color='white' onClick={() => navigate('/')} cursor='pointer'>
            Modern Realtor
          </Heading>
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </Center>
  )
}
