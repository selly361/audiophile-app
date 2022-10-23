import { OrangeButton, primaryFontStyle } from "utilities/defaultStyles";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import styled from "styled-components";

export const SlideWrapper = styled(motion.div)`
  width: 90%;
  min-height: calc(100vh - 80px);
  display: flex;
  gap: .5rem;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-flow: column;
  }
`;

export const NewProductTag = styled.h3`
  letter-spacing: 0.625rem;
  font-size: 1.1rem;
  height: 20px;
  color: ${({ theme }) => theme.colors.slate};
`;

export const ProductName = styled.h3`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  height: max-content;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

export const StyledArticle = styled.article`
  display: grid;
  flex-flow: column;
  width: 70%;
  height: 90%;
  gap: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    gap: .5rem;
    height: max-content;
    
   & >* {
    text-align: center;
    margin: auto;
   }

   p {
    display: none;
   }
  }
`;



export const StyledButton = styled(Link)`
  ${OrangeButton};
`;

export const Container = styled.div`
  width: 80vw;
  margin: auto;
  cursor: grab;
`;