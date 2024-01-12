const Path = '/api/firebase'

export const createUser = async ({ email, password }) => {
  try {
    const create = await fetch(`${Path}/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    return create
  } catch (error) {
    console.log(error.message)
    return {
      error: true,
      message: error.message
    }
  }
}

export const loginWithFirebase = async ({ email, password }) => {
  try {
    const data = await fetch(`${Path}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    console.log(data)
    return data
  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
}
