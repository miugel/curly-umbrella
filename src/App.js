import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf='flex-end' />
      <h1>Hello world</h1>
    </ChakraProvider>
  )
}
