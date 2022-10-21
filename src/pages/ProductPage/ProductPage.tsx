import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from 'data/productData'
import styled from 'styled-components'
import { headingOneFontStyle, OrangeButton, primaryFontStyle } from 'utilities/defaultStyles'
import { Category } from 'components/shared'
import BestGearSection from 'components/shared/BestGearSection/BestGearSection'

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
  width: 75vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 160px;
  margin: auto;
  min-height: 100vh;
  padding-top: 160px;

`

const Button = styled.button`
  ${OrangeButton}
`

const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: ${({ theme }) => theme.colors.slate};
`;

const ProductName = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  height: max-content;
`;

const NewProductTag = styled.h3`
  letter-spacing: 0.625rem;
  font-size: 1.1rem;
  height: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

const ProductContainer = styled.div`
  height: 560px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`

const ProductImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`

const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 3rem;
`

const ProductPage = () => {
  const { productCategory } = useParams()

  const chosenProductData = productData.filter(
    (product) => product.category === productCategory,
  )
  return (
    <Container>
      <IntroHeader>
        <Title>{productCategory}</Title>
      </IntroHeader>
      <MainContainer>
        {chosenProductData.map((productData, index) => (
          <ProductContainer key={productData.slug}>
            {index % 2 === 0 && <ProductImage src={productData.image.desktop} alt={productData.name} />}
            <StyledArticle>
            <NewProductTag>{productData.new ? "NEW PRODUCT" : ""}</NewProductTag>
            <ProductName>{productData.name}</ProductName>
            <ProductDesc>{productData.description}</ProductDesc>
            <Button>SEE PRODUCT</Button>
            </StyledArticle>
            {index % 2 !== 0 && <ProductImage src={productData.image.desktop} alt={productData.name} />}
          </ProductContainer>
        ))}
              <Category />
      <BestGearSection />
      </MainContainer>
    </Container>
  )
}

export default ProductPage
