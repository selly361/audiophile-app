import { Category, ProductImage } from 'components/shared'
import {
  OrangeButton,
  headingThreeFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'
import { useNavigate, useParams } from 'react-router-dom'

import BestGearSection from 'components/shared/BestGearSection/BestGearSection'
import { ImageGallery } from 'components/templates/ProductDetailsTemplate'
import ProductsDetail from 'components/templates/ProductDetailsTemplate/ProductsDetail/ProductsDetail'
import React from 'react'
import SimilarItems from 'components/templates/ProductDetailsTemplate/SimilarItems/SimilarItems'
import data from 'data/data.json'
import styled from 'styled-components'

const Container = styled.main`
  width: 75vw;
  padding-top: 6rem;
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 160px;
`

const GoBackLink = styled.a`
  line-height: 25px;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  width: max-content;

  &:hover {
    text-decoration: underline;
  }
`

const Price = styled.p`
  ${primaryFontStyle}
  font-size: 18px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
`

const TopContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 46px;
`

const ProductContainer = styled.div`
  min-height: 560px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 400px;
  align-self: center;
  justify-self: end;
`

const ProductDesc = styled.p`
  ${primaryFontStyle}
  color: #000000;
  opacity: 0.5;
`

const ProductTitle = styled.h3`
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



const ProductsDetailPage = () => {
  const { productName } = useParams()
  const product = data.find((product) => product.slug === productName)

  const navigate = useNavigate()

  return (
    <Container>
      <TopContainer>
        <GoBackLink onClick={() => navigate(-1)}>Go Back</GoBackLink>
        <ProductContainer>
          <ProductImage
            image={product?.image}
            name={product?.name}
            height=""
            width="100%"
          />
          <StyledArticle>
            {product?.new && <NewProductTag>NEW PRODUCT</NewProductTag>}
            <ProductTitle>{product?.name}</ProductTitle>
            <ProductDesc>{product?.description}</ProductDesc>
            <Price>${product?.price.toLocaleString()}</Price>
          </StyledArticle>
        </ProductContainer>
      </TopContainer>
      <ProductsDetail
        features={product?.features}
        includes={product?.includes}
      />
      <ImageGallery gallery={product?.gallery} />
      <SimilarItems others={product?.others} />
      <Category />
      <BestGearSection />
    </Container>
  )
}

export default ProductsDetailPage
