'use client'
import React from 'react'
import style from './modal.module.css'
import { signIn } from 'next-auth/react'
import LoginWithFirebase from '../firebaseLogin/LoginWithFirebase'

export default function LoginModal() {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <form onClick={stopPropagation} className={style.form_container}>
        <div className={style.logo_container}></div>
        <div className={style.title_container}>
          <p className={style.title}>Login to your Account</p>
          <span className={style.subtitle}>
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />

        <LoginWithFirebase />

        <div className={style.separator}>
          <hr className={style.line} />
          <span>Or</span>
          <hr className={style.line} />
        </div>
        <button
          onClick={() => signIn()}
          title='Sign In'
          type='submit'
          className={style.sign_in_ggl}
        >
          <span>Sign In with Google</span>
        </button>
        <p className={style.note}>Terms of use &amp; Conditions</p>
      </form>
    </>
  )
}
