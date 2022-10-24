import { GalleryImageOne, GalleryImageThree, GalleryImageTwo, GalleryImages } from "./imageGallery-styles"

import React from 'react'
import { useMatchMedia } from "hooks/useMatchMedia";

interface Gallery {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface PropTypes {
  gallery: {
    first: Gallery;
    second: Gallery;
    third: Gallery;
  } | any
}

const ImageGallery = ({ gallery }: PropTypes) => {
  const { isDesktopSize, isTabletSize, isMobileSize  } = useMatchMedia()

  let device = isDesktopSize ? "desktop" : isTabletSize ? "tablet" : "mobile"
  
  return (
    <GalleryImages>
    <GalleryImageOne src={gallery.first[device]} />
    <GalleryImageThree src={gallery.third[device]} />
    <GalleryImageTwo src={gallery.second[device]} />
  </GalleryImages>
  )
}

export default ImageGallery