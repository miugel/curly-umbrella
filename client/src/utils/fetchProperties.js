import MockProperties from '../assets/MockProperties.json'

const getAPIURL = (address) =>
  `http://localhost:5000/scrape?location=${address}&listing_type=for_sale&past_days=30`

export const fetchProperties = async (address) => {
  // TODO: Flask app was not cooperating, returning mock data for now
  // const response = await fetch(getAPIURL(address))
  // const data = await response.json()
  // return data

  return MockProperties
}
