import {
  FaceBookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from 'assets/icons'

import { Link } from 'react-router-dom'
import { NavItems } from 'components/shared'
import React from 'react'
import { primaryFontStyle } from 'utilities/defaultStyles'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  min-height: 400px;
  width: 100vw;
  background-color: #191919;
  margin-top: 6rem;

  padding: 0 165px;
  position: relative;
  align-self: end;

  @media (max-width: 900px) {
    padding: 0 60px;
  padding-bottom: 46px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  padding-bottom: 46px;
  }

  @media (max-width: 568px) {
    height: 654px;
  }

  @media (max-width: 368px){
    height: 800px;
  }
`

const Line = styled.div`
  position: absolute;
  width: 101px;
  height: 4px;
  top: 0px;
  background: #d87d4a;

  @media (max-width: 568px) {
    margin: auto;
    left: 0;
    right: 0;
  }
`

const FooterContent = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 75px;
`
const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: start;
  }

  @media (max-width: 568px) {
    align-items: center;
  }


`

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 202px;
  position: relative;

  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding-bottom: 40px;
    p, div {
      justify-self: center;
      text-align: center;
    }
  }
`

const AudiophileDescription = styled.p`
  align-self: start;
  justify-self: start;
  max-width: 540px;
  ${primaryFontStyle}
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  font-size: 15px;
`

const CopyrightText = styled(AudiophileDescription)`
  font-weight: 700;
  align-self: end;
`

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: max-content;
  width: max-content;
  position: absolute;
  top: calc(202px / 2);
  justify-self: end;

  svg path {
    transition: 1s ease fill;
  }
  
  svg:hover path {
    fill: ${({theme}) => theme.colors.orange};
  }

  @media (max-width: 568px) {
    position: static;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Line />
        <NavContainer>
          <Link to="/">
            <LogoIcon />
          </Link>
          <NavItems className="footer-nav" />
        </NavContainer>
        <Wrapper>
          <AudiophileDescription>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </AudiophileDescription>
          <CopyrightText>Copyright 2021. All Rights Reserved</CopyrightText>
          <SocialMediaIcons>
            <FaceBookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </SocialMediaIcons>
        </Wrapper>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer
