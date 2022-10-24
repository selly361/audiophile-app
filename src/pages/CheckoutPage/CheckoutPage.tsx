import { Link, useNavigate } from 'react-router-dom'

import CheckoutTemplate from 'components/templates/CheckoutTemplate/CheckoutTemplate'
import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  min-height: 100vh;
  width: 100vw;
  flex-flow: column;
  gap: 2rem;
  align-items: center;
  padding-top: 6rem;
  padding: 56px 48px;
  background: #f2f2f2;
  place-items: center;
`

const BackButton = styled.button`
  line-height: 25px;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  width: max-content;
  margin-bottom: 56px;
  background-color: unset;
  border: none;
  margin-left: 48px;
  &:hover {
    text-decoration: underline;
  }
`

const CheckoutPage = () => {
  const navigate = useNavigate()
  return (
      <Container>
        <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
        <CheckoutTemplate />
      </Container>
  )
}

export default CheckoutPage
