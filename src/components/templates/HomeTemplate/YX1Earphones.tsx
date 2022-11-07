import { Button, Content, ProductName } from './sharedStyles'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 85vw;
  height: 320px;
  display: flex;
  gap: 1rem;
  margin: auto;

  @media (max-width: 900px){
    height: max-content;
    flex-flow: column;

    div, img {
      width: 100%;
  }
}
`

const Image = styled.img`
  border-radius: 8px;
  width: 50%;
  object-fit: cover;

`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 50%;
  padding-left: 10%;
`

const YX1Earphones = () => {
  return (
    <Container>
      <Image src="images/home/desktop/image-earphones-yx1.jpg" />
      <Wrapper>
        <Content>
          <ProductName>YX1 EARPHONES</ProductName>
          <Button to="earphones/yx1-earphones">SEE PRODUCT</Button>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default YX1Earphones
