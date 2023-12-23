import React from 'react'

function Toast() {
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div className="toast  align-items-center text-white bg-primary">
        <div className="d-flex justify-content-between align-items-center">
          <buttont typ="button" className="btn-close btnwsite ms-3"></buttont>
          <div className="toast-body">محصول با موفقیت به سبد خرید اضافه شد</div>
        </div>
      </div>
    </div>
  )
}

export default Toast
