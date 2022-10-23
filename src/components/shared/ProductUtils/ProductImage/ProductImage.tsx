import React from 'react'
import styled from 'styled-components'
import { useMatchMedia } from 'hooks/useMatchMedia'

interface PropTypes {
  width: string;
  height: string;
  mobile?: string;
  name: undefined | string;
  image: any | {
    desktop: string;
    tablet: string;
    mobile: string;
  }
}

interface ImageProps {
  width: string
  height: string
  mobile: string;
}

const Image = styled.img<ImageProps>`
  border-radius: 8px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: contain;

  @media (max-width: 1024px){
    width: ${props => props.mobile};
    height: ${props => props.mobile};
  }
`

const ProductImage = ({ width, height, image, name, mobile = ''}: PropTypes) => {
  const { isDesktopSize, isTabletSize, isMobileSize } = useMatchMedia()

  const source = image[isDesktopSize ? 'desktop' : isTabletSize ? 'tablet' : 'mobile']
  return (
    <Image
      mobile={mobile}
      width={width}
      height={height}
      alt={`An image of ${name}`}
      src={source}
    />
  )
}

export default ProductImage
