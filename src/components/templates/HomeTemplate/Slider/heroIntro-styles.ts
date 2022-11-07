import { OrangeButton, primaryFontStyle } from "utilities/defaultStyles";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

export const NewProductTag = styled.h3`
  letter-spacing: 0.625rem;
  font-size: 1.1rem;
  height: 20px;
  color: ${({ theme }) => theme.colors.slate};
`;

export const ProductName = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

export const StyledArticle = styled.article`
  display: grid;
  flex-flow: column;
  position: absolute;
  width: 379px;
  height: 346px;
  left: 165px;
  top: 225px;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    position: absolute;
    width: 379px;
    height: 346px;
    left: 0;
    right: 0;
    margin: auto;
    top: 216px;

    a {
      margin: auto;
    }
  }

  @media (max-width: 375px) {
    width: 328px;
    height: 290px;
    top: 198px;
  }
`;

export const StyledButton = styled(Link)`
  ${OrangeButton};
`;

