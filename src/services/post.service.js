import { storeInstance } from '../utils/axios.instance'

export const getAllPosts = async () => {
  try {
    const response = await storeInstance({
      url: '/posts',
      method: 'GET',
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
