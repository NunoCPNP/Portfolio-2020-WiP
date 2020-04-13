import axios from 'axios'

export const adminLogin = async (email: string, password: string) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3333/auth/login',
      data: {
        email: email,
        password: password,
      },
    })

    return response
  } catch (error) {
    if (error.response) {
      //? Request made and server responded
      console.log('DATA: ', error.response.data)
      console.log('RESPONSE: ', error.response.status)
      console.log('HEADERS: ', error.response.headers)
    } else if (error.request) {
      //? The request was made but no response was received
      console.log('REQUEST: ', error.request)
    } else {
      //? Something happened in setting up the request that triggered an Error
      console.log('Error: ', error.message)
    }
  }
}
