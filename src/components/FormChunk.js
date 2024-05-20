import React, { Fragment } from 'react'
import { Box, Heading, Text, FormLabel, Input } from '@chakra-ui/react'

export const FormChunk = ({ fields, inputs, setInputs }) => {
  return (
    <Fragment>
      {fields.map((item, index) => (
        <Box key={`${index}-${item.field}`} mb='16px'>
          <FormLabel mb='8px'>
            <Heading size='lg'>{item.name}</Heading>
          </FormLabel>
          <Text mb='8px'>{item.description}</Text>
          <Input
            mb='8px'
            value={inputs[item.name]}
            onChange={(e) =>
              setInputs({ ...inputs, [item.field]: e.target.value })
            }
          />
        </Box>
      ))}
    </Fragment>
  )
}
