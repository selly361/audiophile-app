import {
  FaceBookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from "assets/icons";

import { Link } from "react-router-dom";
import { NavItems } from "components/shared";
import React from "react";
import {
  StyledFooter,
  Line,
  FooterContent,
  NavContainer,
  Wrapper,
  AudiophileDescription,
  CopyrightText,
  SocialMediaIcons,
} from "./footer-styles.ts";

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
  );
};

export default Footer;
