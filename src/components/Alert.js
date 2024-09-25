import React from 'react'

export default function Alert(props) {
  return (
    <div className="alert bg-danger float-start w-100 position-relative alert-warning alert-dismissible fade show "  role="alert" >
  <strong>Alert!</strong>

  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}
