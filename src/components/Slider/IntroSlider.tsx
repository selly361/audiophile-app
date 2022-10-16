import "react-slideshow-image/dist/styles.css";

import {
  Container,
  NewProductTag,
  ProductDesc,
  ProductImage,
  ProductName,
  SlideWrapper,
  StyledArticle,
  StyledButton,
} from "./introSlider-styles";

import { Slide } from "react-slideshow-image";
import { slideData } from "data/slideData";
import { useMatchMedia } from "hooks/useMatchMedia";

const Slider = () => {
  const { isMobileSize, isDesktopSize, isTabletSize } = useMatchMedia();

  const properties = {
    duration: 1000,
    transitionDuration: 2000,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
  };

  

  return (
    <Container>
      <Slide {...properties}>
        {slideData.map(
          ({ new: newProduct, name, slug, description, category, image }) => (
            <SlideWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.3 } }}
            >
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
              <ProductImage src={image.desktop} />
            </SlideWrapper>
          )
        )}
      </Slide>
    </Container>
  );
};

export default Slider;
