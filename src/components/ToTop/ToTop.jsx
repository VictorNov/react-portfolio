import React from 'react'
import './ToTop.scss'

const ToTop = () => {
  return (
    <button
      className="btn-top"
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="ri-arrow-up-line" />
    </button>
  )
}

export default ToTop