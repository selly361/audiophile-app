import { Container, IntroSection, StyledMain } from "./homepage-styles"
import { YX1Earphones, ZX7Speaker, ZX9Speaker } from "components/templates/HomeTemplate"

import BottomSection from "components/shared/BestGearSection/BestGearSection"
import { Category } from "components/shared"
import IntroSlider from "components/Slider/IntroSlider"

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