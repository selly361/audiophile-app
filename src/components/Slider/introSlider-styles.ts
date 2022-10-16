import { OrangeButton, primaryFontStyle } from "utilities/defaultStyles";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import styled from "styled-components";

export const SlideWrapper = styled(motion.div)`
  width: 80vw;
  height: calc(100vh - 80px);
  background-color: #191919;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: auto;
  justify-content: center;
`;

export const NewProductTag = styled.h3`
  letter-spacing: 0.625rem;
  font-size: 0.9rem;
  height: 20px;
  color: ${({ theme }) => theme.colors.slate};
`;

export const ProductName = styled.h3`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
`;

export const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

export const StyledArticle = styled.article`
  display: grid;
  flex-flow: column;
  width: 40%;
  height: 70%;
`;

export const ProductImage = styled.img`
  width: 30%;
  height: 80%;
  object-fit: contain;
`;

export const StyledButton = styled(Link)`
  ${OrangeButton};
`;

export const Container = styled.div`
  width: 80vw;
  margin: auto;
  cursor: grab;
`;