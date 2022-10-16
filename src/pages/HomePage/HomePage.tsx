import BottomSection from "components/shared/BestGearSection/BestGearSection"
import { Category } from "components/shared"
import IntroSlider from "components/Slider/IntroSlider"
import React from 'react'
import YX1Earphones from "components/templates/HomeTemplate/YX1Earphones"
import ZX7Speaker from "components/templates/HomeTemplate/ZX7Speaker"
import ZX9Speaker from "components/templates/HomeTemplate/ZX9Speaker"
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  
`

const IntroSection = styled.section`
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #191919;
`

const StyledMain  = styled.main`
  min-height: 100vh;
  width: 85vw;
  display: flex;
  flex-flow: column;
  gap: 6rem;
  align-items: center;
  margin: auto;
  padding-top: 6rem;
`



const HomePage = () => {
  return (
    <Container>
      <IntroSection>
        <IntroSlider />
      </IntroSection>
      <StyledMain>
          <Category />
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
          <BottomSection />
      </StyledMain>
    </Container>
  )
}

export default HomePage