import React from 'react'
import { ProductImage } from 'components/shared'
import { Container, Button, Title, Name, Wrapper, ProductWrapper } from "./similarItems-styles"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
  return (
    <Container>
      <Title>YOU MAY ALSO LIKE</Title>
      <Wrapper>
      {others.map((product: ProductType) => (
        <ProductWrapper>
          <ProductImage width="90%" height="100%" name={product.name} image={product.image} />
          <Name>{product.name}</Name>
          <Button onClick={() => {
            navigate(-1) 
            navigate(`/${product.slug}`)
          }}>SEE PRODUCT</Button>
        </ProductWrapper>
      ))}
      </Wrapper>
    </Container>
  )
}

export default SimilarItems
