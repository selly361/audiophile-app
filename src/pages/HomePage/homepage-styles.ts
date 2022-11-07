import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const IntroSection = styled.section`
  width: 100vw;
  height: 625px;
  background-color: #191919;
  padding-bottom: 3rem;
  background-image: url("images/home/desktop/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (max-width: 100px) {
    background-image: url("images/home/tablet/image-hero.jpg");
    background-position: center;
  }

  @media (max-width: 768px) {
    background-image: url("images/home/mobile/image-hero.jpg");
    background-position: center;

  }
`;

export const StyledMain = styled.main`
  min-height: 100vh;
  width: 85vw;
  display: flex;
  flex-flow: column;
  gap: 6rem;
  align-items: center;
  margin: auto;
  padding-top: 6rem;
`;
