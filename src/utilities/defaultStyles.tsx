import { css } from "styled-components";

// Typography

export const primaryFontStyle = css`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
`;

const buttonFontStyle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

// default h1 - h6 styles

const commonHeadingFontStyle = css`
  font-style: normal;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
`;

export const headingOneFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
`;

export const headingTwoFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.42857px;
`;

export const headingThreeFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
`;

export const headingFourFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
`;

export const headingFiveFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 1.71429px;
`;

export const headingSixFontStyle = css`
  ${commonHeadingFontStyle}
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
`;

// Buttons

const commonButtonStyle = css`
  border: none;
  width: 160px;
  height: 48px;
`;

export const OrangeButton = css`
  ${commonButtonStyle}
  ${buttonFontStyle}
  background-color: #D87D4A;
  color: #ffffff;
  transition: 0.5s background-color ease;

  &:hover {
    background-color: #fbaf85;
  }
`;

export const WhiteButton = css`
  background-color: #ffffff;
  color: #000000;
  transition: 0.5s ease border, 0.5s ease background-color, 0.5s ease color;
  
  &:hover {
    border: 1px solid #000000;
    color: #ffffff;
    background-color: #000000;
  }
`;


// Form Elements

const commonInputStyle = css`
    width: 309px;
    height: 56px;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    border-radius: 8px;
    color: #000000;
    transition: .5s ease border;
    padding: 1rem;
    
    &:focus, &:active {
        border: 1px solid #D87D4A;
    }
`

export const TextField = css`
    ${commonInputStyle}

    &.error {
        border: 2px solid #CD2C2C;
    }
`

export const RadioInput = css`
    ${commonInputStyle}

    &:hover {
        border: 1px solid #D87D4A;
    }
    
`