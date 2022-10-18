import { OrangeButton, primaryFontStyle } from "utilities/defaultStyles";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import styled from "styled-components";

export const SlideWrapper = styled(motion.div)`
  width: 80vw;
  height: calc(100vh - 80px);
  display: flex;
  gap: .5rem;
  align-items: center;
  margin: auto;
  justify-content: center;
  align-items: center;
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
`;

export const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

export const StyledArticle = styled.article`
  display: grid;
  flex-flow: column;
  width: 50%;
  height: 70%;
  gap: 1rem;
`;

export const ProductImage = styled.img`
  width: 30%;
  height: 400px;
  object-fit: contain;
  opacity: 0.8;
  border-radius: 10px;
`;

export const StyledButton = styled(Link)`
  ${OrangeButton};
`;

export const Container = styled.div`
  width: 80vw;
  margin: auto;
  cursor: grab;
`;