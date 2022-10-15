import IntroSlider from "components/Slider/IntroSlider"
import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  
`

const IntroSection = styled.section`
    width: 100vw;
  height: calc(100vh - 80px);
  background-color: #191919;
`
const HomePage = () => {
  return (
    <StyledMain>
      <IntroSection>
        <IntroSlider />
      </IntroSection>
    </StyledMain>
  )
}

export default HomePage