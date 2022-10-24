import { OrangeButton, headingFourFontStyle, headingThreeFontStyle } from 'utilities/defaultStyles'

import { Link } from 'react-router-dom'
import { ProductImage } from 'components/shared'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
`

const ButtonLink = styled(Link)`
  ${OrangeButton}
`

const Title = styled.h3`
  ${headingThreeFontStyle}
  text-align: center;
`

const Name = styled.h4`
  ${headingFourFontStyle}
  font-size: 23px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px){
    display: grid;
    width: 100%;
    justify-items: center;
  }
  
`

const ProductWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  justify-content: space-between;
`

interface ProductType {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface PropTypes {
  others: ProductType[] | any;
}

const SimilarItems = ({ others }: PropTypes) => {
  return (
    <Container>
      <Title>YOU MAY ALSO LIKE</Title>
      <Wrapper>
      {others.map((product: ProductType) => (
        <ProductWrapper>
          <ProductImage width="90%" height="100%" name={product.name} image={product.image} />
          <Name>{product.name}</Name>
          <ButtonLink to={`/product_detail/${product.slug}`}>SEE PRODUCT</ButtonLink>
        </ProductWrapper>
      ))}
      </Wrapper>
    </Container>
  )
}

export default SimilarItems
