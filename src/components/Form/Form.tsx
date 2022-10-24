import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import {
  TextField,
  headingTwoFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'

import { CashDelivIcon } from 'assets/icons'
import RadioButton from './RadioButton'
import { defaultValues } from './defaultValues'
import { slide_animation } from 'global/animation'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const Wrapper = styled.div`
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
`

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
`

const Title = styled.h2`
  ${headingTwoFontStyle}
`

const BillingDetails = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: none;

  @media (max-width: 732px) {
    grid-template-columns: 1fr;
  }
`

const ShippingInfo = styled(BillingDetails)``

const PaymentDetails = styled(BillingDetails)``

const Label = styled.label`
  ${primaryFontStyle}

  &.error {
    color: #cd2c2c;
  }
`

const ErrorMessage = styled.p`
  ${primaryFontStyle}
  color: #cd2c2c;
`

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  ${TextField}
  width: 100%;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
`

const FieldsetTitle = styled.p`
  ${primaryFontStyle}
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
  justify-self: start;
  grid-column: 1/-1;
`

const AddressInputContainer = styled(InputContainer)`
  grid-column: 1/-1;
  grid-row: 2;
`

const PaymentFieldset = styled(motion(BillingDetails))`
  width: 100%;
  grid-column: 1/-1;
  height: max-content;
`

const CashOnDelivery = styled(motion.div)`
  width: 100%;
  grid-column: 1/-1;
  height: max-content;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  align-items: center;

  svg {
  }
`

const Desc = styled.p`
  ${primaryFontStyle}
  opacity: 0.5;
  width: 100%;
`

const Form = () => {
  const [radio, setRadio] = useState('e-money')
  const useFormDetails = useForm({ mode: 'onChange', defaultValues })
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useFormDetails

  return (
    <Wrapper>
      <Title>CHECKOUT</Title>
      <StyledForm id="form">
        <BillingDetails>
          <FieldsetTitle>BILLING DETAILS</FieldsetTitle>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.name && 'error'}>Name</Label>
              {errors.name && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.name && 'error'}
              {...register('name', { required: true })}
            />
          </InputContainer>

          <InputContainer>
            <LabelWrapper>
              <Label className={errors.email && 'error'}>Email Address</Label>
              {errors.email && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.email && 'error'}
              {...register('email', { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.number && 'error'}>Phone Number</Label>
              {errors.number && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.number && 'error'}
              {...register('number', { required: true })}
            />
          </InputContainer>
        </BillingDetails>
        <ShippingInfo>
          <FieldsetTitle>SHIPPING INFO</FieldsetTitle>
          <AddressInputContainer>
            <LabelWrapper>
              <Label className={errors.address && 'error'}>Your Address</Label>
              {errors.address && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.address && 'error'}
              {...register('address', { required: true })}
            />
          </AddressInputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label>ZIP Code</Label>
            </LabelWrapper>
            <Input />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.zip_code && 'error'}>City</Label>
              {errors.zip_code && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.zip_code && 'error'}
              {...register('zip_code', { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.country && 'error'}>Country</Label>
              {errors.country && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.country && 'error'}
              {...register('country', { required: true })}
            />
          </InputContainer>
        </ShippingInfo>
        <PaymentDetails>
          <FieldsetTitle>PAYMENT DETAILS</FieldsetTitle>
          <Label>Payment Method</Label>
          <RadioButton value={radio} setValue={setRadio} />
          <AnimatePresence>
            {radio === 'e-money' ? (
              <PaymentFieldset
                variants={slide_animation}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <InputContainer>
                  <LabelWrapper>
                    <Label className={errors.e_money_number && 'error'}>
                      e-Money Number
                    </Label>
                    {errors.e_money_number&& (
                      <ErrorMessage>Field cannot be empty</ErrorMessage>
                    )}
                  </LabelWrapper>
                  <Input
                    className={errors.e_money_number && 'error'}
                    {...register('e_money_number', { required: true })}
                  />
                </InputContainer>

                <InputContainer>
                  <LabelWrapper>
                    <Label className={errors.e_money_pin && 'error'}>
                      e-Money PIN
                    </Label>
                    {errors.e_money_pin && (
                      <ErrorMessage>Field cannot be empty</ErrorMessage>
                    )}
                  </LabelWrapper>
                  <Input
                    className={errors.e_money_pin && 'error'}
                    {...register('e_money_pin', { required: true })}
                  />
                </InputContainer>
              </PaymentFieldset>
            ) : (
              <CashOnDelivery
                variants={slide_animation}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <CashDelivIcon />
                <Desc>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Desc>
              </CashOnDelivery>
            )}
          </AnimatePresence>
        </PaymentDetails>
      </StyledForm>
    </Wrapper>
  )
}

export default Form
