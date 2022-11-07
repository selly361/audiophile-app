import { motion } from "framer-motion";
import {
  TextField,
  headingTwoFontStyle,
  primaryFontStyle,
  RadioInput,
} from "utilities/defaultStyles";

import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  min-height: 1126px;
  padding: 56px 48px;
  display: flex;
  flex-flow: column;
  gap: 56px;

  &,
  form {
    display: flex;
    flex-flow: column;
    gap: 56px;
  }
`;

export const StyledForm = styled.form`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  ${headingTwoFontStyle}
`;

export const BillingDetails = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: none;

  @media (max-width: 732px) {
    grid-template-columns: 1fr;
  }
`;

export const ShippingInfo = styled(BillingDetails)``;

export const PaymentDetails = styled(BillingDetails)``;

export const Label = styled.label`
  ${primaryFontStyle}

  &.error {
    color: #cd2c2c;
  }
`;

export const ErrorMessage = styled.p`
  ${primaryFontStyle}
  color: #cd2c2c;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  ${TextField}
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const FieldsetTitle = styled.p`
  ${primaryFontStyle}
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
  justify-self: start;
  grid-column: 1/-1;
`;

export const AddressInputContainer = styled(InputContainer)`
  grid-column: 1/-1;
  grid-row: 2;
`;

export const PaymentFieldset = styled(motion(BillingDetails))`
  width: 100%;
  grid-column: 1/-1;
  height: max-content;
`;

export const CashOnDelivery = styled(motion.div)`
  width: 100%;
  grid-column: 1/-1;
  height: max-content;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  align-items: center;

  svg {
  }
`;

export const Desc = styled.p`
  ${primaryFontStyle}
  opacity: 0.5;
  width: 100%;
`;


// radio button styles

export const RadioWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
`

export const StyledRadioButton = styled.button`
  ${RadioInput}
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
`

export const Circle = styled.div`
  border: 1px solid #cfcfcf;
  background-color: transparent;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

export const FilledCircle = styled.div`
  background: #d87d4a;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  transform: scale(0);
  transition: 1s ease transform;

  &.fill {
    transform: scale(1);
  }

  &.unfill {
    transform: scale(0);
  }
`

export const Text = styled.h5`
  ${primaryFontStyle}
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`