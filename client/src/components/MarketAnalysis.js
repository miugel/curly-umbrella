import React, { Fragment, useState } from 'react'
import {
  Center,
  Button,
  Box,
  Heading,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link
} from '@chakra-ui/react'
import { fetchProperties } from '../utils/fetchProperties'
import '../styles.css'
import { square } from 'pdf-lib'

export const MarketAnalysis = () => {
  const [address, setAddress] = useState('')
  const [properties, setProperties] = useState([])

  const searchAddress = async () => {
    const data = await fetchProperties(address)
    setProperties(data)
  }

  return (
    <Center>
      <Box w='90%' maxW='1024px'>
        <Heading mt='32px' mb='8px'>
          Create a CMA (competitive market analysis)
        </Heading>
        <Text fontSize='lg' fontWeight='500' mb='32px'>
          View similar homes sold based on a given address to come up with an
          estimated value.
        </Text>

        <FormControl mb='32px'>
          <FormLabel>Enter an address:</FormLabel>
          <Flex justifyContent='space-between'>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='123 Main St'
              mr='8px'
            />
            <Button colorScheme='purple' onClick={() => searchAddress()}>
              Submit
            </Button>
          </Flex>
        </FormControl>

        {properties.length > 0 && (
          <Fragment>
            <TableContainer>
              <Table variant='striped'>
                <TableCaption>Looking at data for: {address}</TableCaption>
                <Thead>
                  <Tr>
                    <Th isNumeric>ID</Th>
                    <Th>Address</Th>
                    <Th isNumeric>Price</Th>
                    <Th>Rooms</Th>
                    <Th isNumeric>Square Feet</Th>
                    <Th>Photo</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {properties.map((property) => {
                    const {
                      propertyId,
                      address,
                      price,
                      bedrooms,
                      bathrooms,
                      squareFeet,
                      imageURL
                    } = property

                    return (
                      <Tr key={propertyId}>
                        <Td isNumeric>{propertyId}</Td>
                        <Td>{address}</Td>
                        <Td isNumeric>${price}</Td>
                        <Td>
                          {bedrooms} bed {bathrooms} bath
                        </Td>
                        <Td isNumeric>{squareFeet} sqft</Td>
                        <Td>
                          <Link href={imageURL} isExternal>
                            See photo
                          </Link>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Fragment>
        )}
      </Box>
    </Center>
  )
}
