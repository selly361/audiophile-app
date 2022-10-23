import 'react-slideshow-image/dist/styles.css'

import {
  Container,
  NewProductTag,
  ProductDesc,
  ProductName,
  SlideWrapper,
  StyledArticle,
  StyledButton,
} from './introSlider-styles'

import { ProductImage } from 'components/shared'
import { Slide } from 'react-slideshow-image'
import productData from 'data/data.json'
import { useMatchMedia } from 'hooks/useMatchMedia'

const Slider = () => {
  const { isMobileSize, isDesktopSize, isTabletSize } = useMatchMedia()

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  }

  return (
    <Container>
      <Slide {...properties}>
        {productData.map((data) => (
          <SlideWrapper
            key={data.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.3 } }}
          >
            <StyledArticle>
            {data.new && <NewProductTag>NEW PRODUCT</NewProductTag>}
              <br />
              <ProductName>{data.name}</ProductName>
              <br />
              <ProductDesc>{data.description}</ProductDesc>
              <br />
              <StyledButton to={`/product_detail/${data.slug}`}>
                SEE PRODUCT
              </StyledButton>
              <br />
            </StyledArticle>
            <ProductImage
              height="360px"
              mobile="60vw"
              width="max-content"
              name={data.name}
              image={data.image}
            />
          </SlideWrapper>
        ))}
      </Slide>
    </Container>
  )
}

export default Slider
