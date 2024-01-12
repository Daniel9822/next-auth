import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { firebaseConfig } from '../../config/firebase.config'
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

export async function POST(request) {
  const { email, password } = await request.json()

  const auth = getAuth()
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return new Response(user, {
      status: 201
    })
  } catch (error) {
    return new Response(error.message, {
      status: error.code
    })
  }
}