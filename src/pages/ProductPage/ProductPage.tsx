import { Category, ProductImage } from 'components/shared'
import { Link, useParams } from 'react-router-dom'
import {
  OrangeButton,
  headingOneFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'

import BestGearSection from 'components/shared/BestGearSection/BestGearSection'
import React from 'react'
import { productData } from 'data/productData'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`

const IntroHeader = styled.section`
  width: 100vw;
  height: 239px;
  background-color: #191919;
  display: grid;
  place-items: center;
`

const Title = styled.h1`
  color: white;
  ${headingOneFontStyle}
  color: white;
  font-size: 40px;
`

const MainContainer = styled.main`
  width: 85vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 160px;
  margin: auto;
  min-height: 100vh;
  padding-top: 160px;
`

const LinkButton = styled(Link)`
  ${OrangeButton}
`

const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: #000000;
  opacity: 0.5;
`

const ProductName = styled.h3`
  font-size: 40px;
  font-weight: bold;
  height: max-content;
`

const NewProductTag = styled.h3`
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
`

const ProductContainer = styled.div`
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`

const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 400px;
`

const ProductPage = () => {
  const { category } = useParams()

  const chosenProductData = productData.filter(
    (product) => product.category === category,
  )

  return (
    <Container>
      <IntroHeader>
        <Title>{category}</Title>
      </IntroHeader>
      <MainContainer>
        {chosenProductData.map((productData, index) => (
          <ProductContainer key={productData.slug}>
            {index % 2 === 0 && (
              <ProductImage
              image={productData.image}
              name={productData.name}
              width="50%"
              height="100%"
            />
            )}
            <StyledArticle>
              <NewProductTag>
                {productData.new ? 'NEW PRODUCT' : ''}
              </NewProductTag>
              <ProductName>{productData.name}</ProductName>
              <ProductDesc>{productData.description}</ProductDesc>
              <LinkButton to={`/product_detail/${productData.slug}`}>
                SEE PRODUCT
              </LinkButton>
            </StyledArticle>
            {index % 2 !== 0 && (
              <ProductImage
                image={productData.image}
                name={productData.name}
                width="50%"
                height="100%"
              />
            )}
          </ProductContainer>
        ))}
        <Category />
        <BestGearSection />
      </MainContainer>
    </Container>
  )
}

export default ProductPage
