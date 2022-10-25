import { useAppDispatch, useAppSelector } from 'app/hooks'

import { AnimatePresence } from 'framer-motion'
import Cart from './Cart/Cart'
import OrderConfirmed from './OrderConfirmedModal/OrderConfirmed'
import { Overlay } from 'components/shared'
import React from 'react'
import { closeModal } from 'features/modalSlice'
import { removeAll } from 'features/cartSlice'

const Modals = () => {
  const { open, data, type } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleFormOverlayClick = () => {}

  return (
    <React.Fragment>
      <AnimatePresence>
        {type === 'cart' && <Cart />}
        {type === 'form' && (
          <Overlay
            type="form"
            zIndex="150"
            open={open}
            handleReset={handleFormOverlayClick}
          >
            <OrderConfirmed />
          </Overlay>
        )}
      </AnimatePresence>
      {type === 'cart' && (
        <Overlay
          zIndex="100"
          open={open}
          handleReset={() => dispatch(closeModal())}
        />
      )}
    </React.Fragment>
  )
}

export default Modals
