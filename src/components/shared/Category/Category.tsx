import React from 'react'
import { categories } from 'data/categoryData'
import styled from 'styled-components'

const StyledCategory = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  gap: 1rem;
  align-items: center;
`
const CategoryTitle = styled.h2`
  
  
`

const CategoryItem = styled.div`
  
`

const CategoryImage = styled.img`
  height: 50px;
`





const Category = () => {
  return (
    <StyledCategory>
      {categories.map(categ => (
        <CategoryItem key={categ.category}>
          <CategoryImage src={categ.image} />
          <CategoryTitle>{categ.category}</CategoryTitle>
          
        </CategoryItem>
      ))}
    </StyledCategory>
  )
}

export default Category