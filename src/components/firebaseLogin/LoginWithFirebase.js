'use client'
import { useState } from 'react'
import style from './firebase.module.css'
import { createUser, loginWithFirebase } from '@/services/user'

export default function LoginWithFirebase() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateUser = async ({ email, password }) => {
    try {
      const response = await createUser({ email, password });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al crear usuario', error);
    }
  };

  const handleLogin = async ({email, password}) => {
    try {
      const response = await loginWithFirebase({email, password})
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className={style.input_container}>
        <label className={style.input_label} for='email_field'>
          Email
        </label>

        <input
          placeholder='name@mail.com'
          title='Inpit title'
          name='email'
          type='email'
          className={style.input_field}
          id={style.email_field}
          onChange={handleCredentials}
        />
      </div>
      <div className={style.input_container}>
        <label className={style.input_label} for='password_field'>
          Password
        </label>

        <input
          placeholder='Password'
          title='Inpit title'
          name='password'
          type='password'
          className={style.input_field}
          id={style.password_field}
          onChange={handleCredentials}
        />
      </div>
      <button
        title='register'
        type='submit'
        className={style.sign_in_btn}
        onClick={() =>
          handleCreateUser({
            email: credentials.email,
            password: credentials.password
          })
        }
      >
        <span>Register</span>
      </button>
      <button
        title='Sign In'
        type='submit'
        className={style.sign_in_btn}
        onClick={() =>
          handleLogin({
            email: credentials.email,
            password: credentials.password
          })
        }
      >
        <span>Sign In</span>
      </button>
    </>
  )
}
