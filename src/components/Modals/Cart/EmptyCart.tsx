import { CartsEmptyText, Icon, StyledEmptyCart } from "./emptyCart-styles";

import React from "react";
import { nav_drop_down } from "global/animation";

const EmptyCart = () => {
  return (
    <StyledEmptyCart
      variants={nav_drop_down}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CartsEmptyText>Your cart is empty</CartsEmptyText>
      <Icon
        initial={{ x: "-150px", scale: 3 }}
        animate={{ x: "150px" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
      />
    </StyledEmptyCart>
  );
};

export default EmptyCart;
