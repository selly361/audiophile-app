import Form from 'components/Form/Form'
import React from 'react'
import SummaryDetails from './SummaryDetails'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 30px;
    margin: auto;

    @media (max-width: 1070px){
        grid-template-columns: 1fr;
        width: max-content;
        width: 100%;
}
`

const CheckoutTemplate = () => {
  return (
    <Wrapper>
        <Form />
        <SummaryDetails />
    </Wrapper>
  )
}

export default CheckoutTemplate