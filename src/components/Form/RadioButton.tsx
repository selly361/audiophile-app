import { RadioInput, primaryFontStyle } from 'utilities/defaultStyles'

import React from 'react'
import styled from 'styled-components'

interface PropTypes {
  setValue: Function
  value: string
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
`

const StyledRadioButton = styled.button`
  ${RadioInput}
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
`

const Circle = styled.div`
  border: 1px solid #cfcfcf;
  background-color: transparent;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const FilledCircle = styled.div`
  background: #d87d4a;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  transform: scale(0);
  transition: 1s ease transform;

  &.fill {
    transform: scale(1);
  }

  &.unfill {
    transform: scale(0);
  }
`

const Text = styled.h5`
  ${primaryFontStyle}
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`

const RadioButton = ({ setValue, value }: PropTypes) => {
  return (
    <Wrapper>
      <StyledRadioButton type="button" onClick={() => setValue('e-money')}>
        <Circle>
          <FilledCircle className={value === 'e-money' ? 'fill' : 'unfill'} />
        </Circle>
        <Text>e-Money</Text>
      </StyledRadioButton>
      <StyledRadioButton type="button" onClick={() => setValue('cash on delivery')}>
        <Circle>
          <FilledCircle
            className={value === 'cash on delivery' ? 'fill' : 'unfill'}
          />
        </Circle>
        <Text>Cash on Delivery</Text>
      </StyledRadioButton>
    </Wrapper>
  )
}

export default RadioButton
