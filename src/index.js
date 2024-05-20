import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { App } from './App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <Router>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
)
