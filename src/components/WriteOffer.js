import React, { useState } from 'react'
import TypeForm from 'react-typeform'
import { Center, Box, Heading, FormControl } from '@chakra-ui/react'
import CAPurchaseAgreement from '../assets/CAPurchaseAgreement.json'
import { FormChunk } from './FormChunk'
import '../styles.css'

export const WriteOffer = () => {
  const [inputs, setInputs] = useState({
    buyer: '',
    listingAgent: '',
    streetAddress: '',
    city: '',
    county: '',
    zipCode: '',
    parcelNumber: '',
    purchasePrice: '',
    escrowClose: '',
    downPayment: ''
  })

  const reviewOffer = () => console.log(inputs)

  return (
    <Center>
      <Box w='90%' maxW='768px'>
        <Heading mt='32px' mb='32px'>
          We will guide you through filling out the necessary fields. This will
          be very simple and easy!
        </Heading>

        <FormControl>
          <TypeForm
            onSubmit={reviewOffer}
            submitBtnClass='chunkButton'
            nextBtnClass='chunkButton'
            backBtnClass='chunkButton'
            submitBtnText='Review Offer'
          >
            {CAPurchaseAgreement.chunks.map((chunk, index) => (
              <FormChunk
                key={index}
                fields={chunk}
                inputs={inputs}
                setInputs={setInputs}
              />
            ))}
          </TypeForm>
        </FormControl>
      </Box>
    </Center>
  )
}
