import React, { useContext } from 'react'
import productsContexts from '../../Contexts/ProductsContexts'
function Toast() {
  const contextData = useContext(productsContexts)
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={`${
          contextData.isShowToast ? 'show' : ''
        }  toast  align-items-center text-white bg-primary`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <buttont
            typ="button"
            className="btn-close btnwsite ms-3"
            onClick={() => {
              contextData.setIsShowToast(false)
            }}
          ></buttont>
          <div className="toast-body">محصول با موفقیت به سبد خرید اضافه شد</div>
        </div>
      </div>
    </div>
  )
}

export default Toast
