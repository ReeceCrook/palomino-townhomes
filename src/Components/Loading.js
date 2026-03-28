import React from 'react'
import '../css/Loading.css'

function Loading() {
  return (
    <div className="loadingWrapper">
      <div className="loadingSpinner" aria-label="Loading" role="status" />
    </div>
  )
}

export default Loading
