import React, { useState } from 'react'
import TypeForm from 'react-typeform'
import { Center, Box, Heading, FormControl } from '@chakra-ui/react'
import CAPurchaseAgreement from '../assets/CAPurchaseAgreement.json'
import { FormChunk } from './FormChunk'
import '../styles.css'
import { compileOffer } from '../utils/compileOffer'

const emptyOffer = {
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
}

export const WriteOffer = () => {
  const [inputs, setInputs] = useState(emptyOffer)

  const reviewOffer = async () => {
    await compileOffer(inputs)
  }

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
            showReviewView={false}
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
