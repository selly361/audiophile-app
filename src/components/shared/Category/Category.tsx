import { ArrowRightIcon } from 'assets/icons'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { categories } from 'data/categoryData'
import { headingSixFontStyle } from 'utilities/defaultStyles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledCategory = styled(motion.div)`
  width: 85vw;
  height: max-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: grid;
    width: 90vw;
    gap: 6rem;
  }
`
const CategoryTitle = styled.h6`
  ${headingSixFontStyle};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const CategoryItem = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.silver};
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 2rem;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  width: calc(100% / 3);
  cursor: pointer;
  border: 2px dashed transparent;
  transition: 1s border;
  &:hover,
  &.active {
    & {
      border: 2px dashed ${({ theme }) => theme.colors.orange};
    }

    button {
      gap: 2rem;

      h4 {
        color: ${({ theme }) => theme.colors.orange};
      }
    }

    img {
      top: -75px;
    }
  }

  @media (max-width: 768px) {
    width: 70vw;
  }
`

const CategoryImage = styled.img`
  height: 130px;
  position: absolute;
  top: -50px;
  transform: transition(0, -50%);
  transition: 0.3s top ease;

  @media (max-width: 900px) {
    height: 100px;
  }
`

const ShopButton = styled.button`
  height: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: 0.3s gap ease;
  border: none;

  h4 {
    color: ${({ theme }) => theme.colors.slate};
    transition: 0.7s color;
  }
`

const Category = ({ animate = true }: { animate?: boolean }) => {
  return (
    <StyledCategory
      viewport={{ once: true }}
      initial={ { x: -300, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.3 },
      }}
    >
      {categories.map((categ, index) => (
        <CategoryItem
          to={`/${categ.category}`}
          key={categ.category}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <CategoryImage src={categ.image} />
          <CategoryTitle>{categ.category}</CategoryTitle>
          <ShopButton>
            <h4>SHOP</h4>
            <ArrowRightIcon />
          </ShopButton>
        </CategoryItem>
      ))}
    </StyledCategory>
  )
}

export default Category
