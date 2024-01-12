import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const createAccount = async ({ email, password }) => {
  const auth = getAuth()
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    return {
      errorCode: error.code,
      message: error.message
    }
  }
}

export const singIn = async ({ email, password }) => {
  const auth = getAuth()
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log(user);
    return user
  } catch (error) {
    return {
      errorCode: error.code,
      message: error.message
    }
  }
}

export const signOutUser = async () => {
  const auth = getAuth()
  try {
    await signOut(auth)
    return true
  } catch (error) {
    return {
      errorCode: error.code,
      message: error.message
    }
  }
}
