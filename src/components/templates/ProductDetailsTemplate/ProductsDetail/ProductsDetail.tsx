import {
  headingThreeFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'

import React from 'react'
import styled from 'styled-components'

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`

const ListContainer = styled.ul`
  display: grid;
  gap: 0.4rem;
  list-style: none;
  height: max-content;
`

const ListItem = styled.li`
  ${primaryFontStyle}
  color: #000000;
  opacity: 0.5;
  height: max-content;
`

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ItemQuantity = styled.p`
  ${primaryFontStyle}
  color: #d87d4a;
  font-weight: bold;
  font-size: 15px;
`

const FeaturesDescription = styled.p`
  ${primaryFontStyle}
  color: #000000;
  opacity: 0.5;
`

const FeaturesContainer = styled.div`
  width: 70%;
  display: grid;
  gap: 2rem;
`
const HeadingThree = styled.h3`
  ${headingThreeFontStyle}
`

interface ItemProp {
    quantity: number
    item: string
} 

interface PropTypes {
  features: string | any
  includes: ItemProp[] | any;
}

function ProductsDetail({ features, includes }: PropTypes) {
  return (
    <ProductDetailsContainer>
      <FeaturesContainer>
        <HeadingThree>Features</HeadingThree>
        <FeaturesDescription>{features}</FeaturesDescription>
      </FeaturesContainer>
      <ListContainer>
        <HeadingThree>IN THE BOX</HeadingThree>
        {includes.map((list: ItemProp) => (
          <ListItemWrapper key={list.item + list.quantity}>
            <ItemQuantity>{list.quantity}x</ItemQuantity>
            <ListItem>{list.item}</ListItem>
          </ListItemWrapper>
        ))}
      </ListContainer>
    </ProductDetailsContainer>
  )
}

export default ProductsDetail
