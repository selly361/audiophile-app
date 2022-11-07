import {
  BlackButton,
  headingTwoFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'

import { Link } from 'react-router-dom'
import React from 'react'
import { left_to_right_scroll_animation } from 'global/animation'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled(motion.div)`
  width: 100%;
  height: 600px;
  background: url('images/home/desktop/pattern-circles.svg') no-repeat;
  background-size: 800px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 8px;
  background-position: left;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 20%;
  overflow: hidden;
  padding: 0 1rem;

  @media (max-width: 780px){
    overflow: unset;
    display: grid;
    place-items: center;
    gap: 1rem;
    height: 800px;
      
  }
`

const Image = styled(motion.img)`
  height: 70%;
  position: relative;
  bottom: -10px;

  @media (max-width: 780px){
    height: 300px;
    bottom: unset;
  }
`

const ContentWrapper = styled(motion.article)`
  height: 80%;
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (max-width: 780px){
    text-align: center;
      

    a {
      margin: auto;
    }
  }
`

const Name = styled.h2`
  ${headingTwoFontStyle};
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  color: white;
`

const Content = styled.p`
  ${primaryFontStyle};
  color: white;
  opacity: 0.75;
`

const ButtonLink = styled(Link)`
  ${BlackButton};
`

const imageVariants = {
  hidden: { x: '-5vw', opacity: 0 },

  inView: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
}

const contentVariants = {
  hidden: { x: '5vw', opacity: 0 },

  inView: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1.2 },
  },
}

const ZX9Speaker = () => {
  return (
    <Container
      variants={left_to_right_scroll_animation}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true }}
    >
      <Image
        variants={imageVariants}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="inView"
        src="images/home/desktop/image-speaker-zx9.png"
      />
      <ContentWrapper
        variants={contentVariants}
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true }}
      >
        <Name>ZX9 SPEAKER</Name>
        <Content>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Content>
        <ButtonLink to="speakers/zx9-speaker">SEE PRODUCT</ButtonLink>
      </ContentWrapper>
    </Container>
  )
}

export default ZX9Speaker
