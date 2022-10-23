import React, { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import { AnimatePresence } from 'framer-motion'
import { Overlay } from 'components/shared'
import { closeModal } from 'features/modalSlice'
import { createRoot } from 'react-dom/client'

const Modals = () => {
  const { open, data, type } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  console.log(open, data, type)
  return (
    <Fragment>
      <AnimatePresence>{}</AnimatePresence>
      <Overlay open={open} handleReset={() => dispatch(closeModal())} />
    </Fragment>
  )
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;
const root = createRoot(modalRoot)
root.render(<Modals />)
