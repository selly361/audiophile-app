import { headingTwoFontStyle, primaryFontStyle } from 'utilities/defaultStyles'

import React from 'react'
import styled from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'

const Container = styled.section`
  height: 588px;
  width: 85vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;

  @media (max-width: 1140px) {
    height: max-content;
    flex-flow: column-reverse;
    gap: 2rem;

    article {
      width: 100%;
      text-align: center;
    }
  }
`

const Heading = styled.h2`
  ${headingTwoFontStyle}

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`

const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  align-self: center;
  width: 400px;
`

const Description = styled.p`
    ${primaryFontStyle}
    color: ${({ theme }) => theme.colors.slate};
`

const Image = styled.img`
  border-radius: 8px;

  @media (max-width: 1140px) {
    width: 100%;
    object-fit: contain;
  }
`



const BestGearSection = () => {
  const { isDesktopSize, isTabletSize } = useMatchMedia()

  let device = isDesktopSize ? "desktop" : isTabletSize ? "tablet" : "mobile"
  return (
    <Container>
      <StyledArticle>
        <Heading>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </Heading>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Description>
      </StyledArticle>
      <Image src={`images/shared/${device}/image-best-gear.jpg`} />
    </Container>
  )
}

export default BestGearSection
