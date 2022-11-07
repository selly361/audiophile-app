import { Container, IntroSection, StyledMain } from "./homepage-styles"
import { YX1Earphones, ZX7Speaker, ZX9Speaker } from "components/templates/HomeTemplate"

import BottomSection from "components/shared/BestGearSection/BestGearSection"
import { Category } from "components/shared"
import HeroIntro from "components/templates/HomeTemplate/Slider/HeroIntro"

const HomePage = () => {
  return ( 
    <Container>
      <IntroSection>
        <HeroIntro />
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