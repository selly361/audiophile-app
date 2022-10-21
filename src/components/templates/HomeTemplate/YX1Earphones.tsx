import { Button, Content, ProductName } from './sharedStyles'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`


const Image = styled.img`
    border-radius: 8px;
`

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.silver};
    padding-left: 95px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`

const YX1Earphones = () => {
  return <Container>
    <Image src="images/home/desktop/image-earphones-yx1.jpg" />
    <Wrapper>
        <Content>
            <ProductName>YX1 EARPHONES</ProductName>
            <Button to="earphones/yx1-earphones">SEE PRODUCT</Button>
        </Content>
    </Wrapper>
  </Container>
}

export default YX1Earphones
