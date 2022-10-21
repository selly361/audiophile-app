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
  height: 300px;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 20;
  padding: 2rem;
`