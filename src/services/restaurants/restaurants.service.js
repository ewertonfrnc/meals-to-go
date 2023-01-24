import { mocks, mockImages } from './mock'
import camelize from 'camelize'

export const restaurantsRequest = (location) =>
  new Promise((resolve, reject) => {
    if (!mocks[location]) reject('not found')
    resolve(mocks[location])
  })

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      (photo) => mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
    )

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })

  return camelize(mappedResults)
}
