import React, { Fragment } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Header, WriteOffer, MarketAnalysis } from './components'
import { Box, Button, ButtonGroup, Center, Heading } from '@chakra-ui/react'

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/offer' element={<WriteOffer />} />
        <Route path='/analysis' element={<MarketAnalysis />} />
      </Routes>
    </Fragment>
  )
}

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Center mt='32px'>
      <Box w='90%' maxW='768px'>
        <Heading size='lg' mb='32px'>
          Directory
        </Heading>
        <ButtonGroup variant='solid' spacing='6'>
          <Button colorScheme='pink' onClick={() => navigate('/offer')}>
            Write Offer
          </Button>
          <Button colorScheme='purple' onClick={() => navigate('/analysis')}>
            CMA
          </Button>
          {/* <Button colorScheme='teal'>Price Visualizer</Button> */}
        </ButtonGroup>
      </Box>
    </Center>
  )
}
