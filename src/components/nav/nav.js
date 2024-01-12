'use client'

import { useState } from 'react'
import style from './nav.module.css'
import ParentModal from '../modal/ParentModal'
import LoginModal from '../modal/LoginModal'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Nav() {
  const [showSession, setShowSesion] = useState(false)
  const { data: session } = useSession()

  const handleSession = () => {
    setShowSesion(!showSession)
  }

  return (
    <>
      <div className={style.container}>
        <Link href={'/'}>Logo</Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            {session?.user && (
              <>
                <li>{session?.user.name}</li>
                <li>
                  <img
                    className={style.profile}
                    src={session?.user.image}
                    alt='user'
                  />
                </li>
              </>
            )}
            <li>
              {!session?.user ? (
                <button onClick={handleSession} className={style.login}>
                  Login
                </button>
              ) : (
                <button onClick={() => signOut()} className={style.logout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {showSession && (
        <ParentModal close={handleSession}>
          <LoginModal />
        </ParentModal>
      )}
    </>
  )
}
