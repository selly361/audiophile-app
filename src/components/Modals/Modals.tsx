import { useAppDispatch, useAppSelector } from 'app/hooks'

import { AnimatePresence } from 'framer-motion'
import Cart from './Cart/Cart'
import { Overlay } from 'components/shared'
import React from 'react'
import { closeModal } from 'features/modalSlice'

const Modals = () => {
  const { open, data, type } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  
  React.useEffect(() => {
    if(open){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <React.Fragment>
      <AnimatePresence>
        {type === "cart" && <Cart />}
        </AnimatePresence>
      <Overlay zIndex="100" open={open} handleReset={() => dispatch(closeModal())} />
    </React.Fragment>
  )
}

export default Modals;


