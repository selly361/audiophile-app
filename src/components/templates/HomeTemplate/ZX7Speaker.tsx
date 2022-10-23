import { Button, Content, ProductName } from './sharedStyles'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 320px;
  background: url('images/home/desktop/image-speaker-zx7.jpg');
  background-size: cover;
  border-radius: 8px;
  padding-left: 95px;
  display: flex;
  align-items: center;
  background-position: center;
`

const ZX7Speaker = () => {
  return (
    <Container>
      <Content>
        <ProductName>ZX7 SPEAKER</ProductName>
        <Button to="product_detail/zx7-speaker">SEE PRODUCT</Button>
      </Content>
    </Container>
  )
}

export default ZX7Speaker
