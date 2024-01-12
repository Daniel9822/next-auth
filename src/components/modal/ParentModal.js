import { createPortal } from 'react-dom'

export default function ParentModal({ children, close }) {
  return createPortal(
    <div
      onClick={close}
      style={{
        cursor: 'default',
        position: 'fixed',
        inset: 0,
        background: '#0009',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>,
    window.document.body
  )
}
