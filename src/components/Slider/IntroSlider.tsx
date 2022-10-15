import { AnimatePresence, motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import {
  OrangeButton,
  primaryFontStyle,
} from "utilities/defaultStyles";
import React, { useEffect, useRef, useState } from "react";
import { nextSlide, previousSlide } from "features/slideSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { nav_drop_down } from "global/animation";
import styled from "styled-components";
import { useMatchMedia } from "hooks/useMatchMedia";

const SlideWrapper = styled(motion.div)`
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #191919;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const NewProductTag = styled.h3`
  letter-spacing: 0.625rem;
  font-size: 0.9rem;
  height: 20px;
  color: ${({ theme }) => theme.colors.slate};
`;

const ProductName = styled.h3`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
`;

const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

const StyledArticle = styled.article`
  display: grid;
  flex-flow: column;
  width: 40%;
  height: 70%;
`;

const ProductImage = styled.img`
  width: 30%;
  height: 80%;
  object-fit: contain;
`;

const StyledButton = styled(Link)`
  ${OrangeButton};
  display: grid;
  place-items: center;
`;

const Slider = () => {
  const data = useAppSelector((state) => state.slide);
  const {
    new: newProduct,
    name,
    slug,
    description,
    category,
    image,
  } = data.currentSlide;
  const dispatch = useAppDispatch();

  useEffect(() => {
    let slideInterval = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);


  const { isMobileSize, isDesktopSize, isTabletSize } = useMatchMedia();

  return (
    <AnimatePresence>
        <SlideWrapper
          variants={nav_drop_down}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StyledArticle>
            <NewProductTag>{newProduct ? "NEW PRODUCT" : ""}</NewProductTag>
            <br />
            <ProductName>{name}</ProductName>
            <br />
            <ProductDesc>{description}</ProductDesc>
            <br />
              <StyledButton to={`/${category}/${slug}`}>SEE PRODUCT</StyledButton>
            <br />
          </StyledArticle>
          <ProductImage
            onClick={() => dispatch(nextSlide())}
            src={
              image[
                isDesktopSize ? "desktop" : isTabletSize ? "tablet" : "mobile"
              ]
            }
          />
        </SlideWrapper>
    </AnimatePresence>
  );
};

export default Slider;
