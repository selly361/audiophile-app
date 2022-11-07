import { CartIcon } from 'assets/icons'
import { headingFourFontStyle } from 'utilities/defaultStyles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledEmptyCart = styled(motion.div)`
  display: flex;
  height: 188px;
  padding: 2rem;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  flex-direction: column;
`

export const CartsEmptyText = styled.h4`
  ${headingFourFontStyle}
  opacity: 0.5;
  font-size: 1.3rem;
  text-transform: unset;
  font-weight: bold;
`

export const Icon = styled(motion(CartIcon))`
  transform: scale(3);

  path {
    fill: black;
  }
`
