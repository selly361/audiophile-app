import styled from "styled-components"

export const GalleryImages = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas: 
  "a b" 
  "c b";
`

export const GalleryImageOne = styled.img`
  grid-area: "a";
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  border-radius: 8px;
  height: 100%;
  
`

export const GalleryImageTwo = styled.img`
  grid-area: "c";
  width: 100%;
  grid-row: 2;
  grid-column: 1;
  border-radius: 8px;
  align-self: end;
  height: 100%;

`

export const GalleryImageThree = styled.img`
  grid-area: "b";
  width: 100%;
  grid-column: 2;
  grid-row: 1/-1;
  border-radius: 8px;
  height: 100%;
`