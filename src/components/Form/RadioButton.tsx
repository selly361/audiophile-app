import { RadioInput, primaryFontStyle } from 'utilities/defaultStyles'

import React from 'react'
import styled from 'styled-components'

interface PropTypes {
  setValue: Function
  value: string
}

import { RadioWrapper, StyledRadioButton, Circle, FilledCircle, Text } from "./form-styles.ts"



const RadioButton = ({ setValue, value }: PropTypes) => {
  return (
    <RadioWrapper>
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
    </RadioWrapper>
  )
}

export default RadioButton
