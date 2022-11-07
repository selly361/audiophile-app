import React from 'react'
import { ProductImage } from 'components/shared'
import { Container, ButtonLink, Title, Name, Wrapper, ProductWrapper } from "./similarItems-styles"


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
