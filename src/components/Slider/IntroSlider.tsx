import 'react-slideshow-image/dist/styles.css'

import { OrangeButton, primaryFontStyle } from "utilities/defaultStyles";

import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { slideData } from 'data/slideData';
import styled from "styled-components";
import { useMatchMedia } from "hooks/useMatchMedia";

const SlideWrapper = styled.div`
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


  const { isMobileSize, isDesktopSize, isTabletSize } = useMatchMedia();

  const properties = {
    duration: 3000,
    transitionDuration: 2000,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
  };
  
  return (
    <Slide {...properties}>
      {slideData.map(
        ({ new: newProduct, name, slug, description, category, image }) => (
          <SlideWrapper>
            <StyledArticle>
              <NewProductTag>{newProduct ? "NEW PRODUCT" : ""}</NewProductTag>
              <br />
              <ProductName>{name}</ProductName>
              <br />
              <ProductDesc>{description}</ProductDesc>
              <br />
              <StyledButton to={`/${category}/${slug}`}>
                SEE PRODUCT
              </StyledButton>
              <br />
            </StyledArticle>
            <ProductImage
              src={
                image[
                  isDesktopSize ? "desktop" : isTabletSize ? "tablet" : "mobile"
                ]
              }
            />
          </SlideWrapper>
        )
      )}
    </Slide>
  );
};

export default Slider;
