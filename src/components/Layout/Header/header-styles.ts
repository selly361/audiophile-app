import { motion } from 'framer-motion'
import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100vw;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  position: relative;
  z-index: 50;

  svg {
    cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;


export const LogoWrapper = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CategoryWrapper = styled(motion.div)`
  width: 100vw;
  height: max-content;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 20;
  padding: 2rem;
  padding-top: 6rem;
`

export const IconWrapper = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
`

export const Notification = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({theme}) => theme.colors.orange};
  color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  top: -10px;
  right: -10px;
  display: grid;
  place-items: center;
  font-size: 15px;
`