import React from 'react'
import { Icon, CartsEmptyText, StyledEmptyCart } from "./emptyCart-styles.ts"



const EmptyCart = () => {
  return (
    <StyledEmptyCart>
      <CartsEmptyText>Your cart is empty</CartsEmptyText>
      <Icon
        initial={{ x: '-150px', scale: 3 }}
        animate={{ x: '150px' }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
        }}
      />
    </StyledEmptyCart>
  )
}

export default EmptyCart
