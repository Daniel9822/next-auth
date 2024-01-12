import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

import { firebaseConfig } from '../../config/firebase.config'
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

export async function POST(request) {
  const { email, password } = await request.json()

  const auth = getAuth()

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return new Response(user, {
      status: 200
    })
  } catch (error) {
    return new Response(error.message, {
      status: error.statusCode
    })
  }
}
