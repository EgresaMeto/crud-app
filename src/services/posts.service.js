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

export const deleteRow = async (id) => {
  try {
    const response = await storeInstance({
      url: `/posts/${id}`,
      method: 'DELETE',
    });

    return response;
  } catch (error) {
    console.log(error)
  }
}


export const updateRow = async (id, title, body) => {
  try {
    const response = await storeInstance({
      url: `/posts/${id}`,
      method: 'PUT',
      data:{
        id: id,
        title: title,
        body: body,
        userId: 1,
      }
    });

    return response;
  } catch (error) {
    console.log(error)
  }
}

export const createRow = async (title, body) => {
  try {
    const response = await storeInstance({
      url: `/posts`,
      method: 'POST',
      data:{
        title: title,
        body: body,
        userId: 1,
      }
    });

    return response;
  } catch (error) {
    console.log(error)
  }
}