import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import { CashDelivIcon } from "assets/icons";
import RadioButton from "./RadioButton";
import { defaultValues } from "./defaultValues";
import { openModal } from "features/modalSlice";
import { slide_animation } from "global/animation";
import { useAppDispatch } from "app/hooks";
import { useForm } from "react-hook-form";
import {
  Wrapper,
  StyledForm,
  Title,
  BillingDetails,
  ShippingInfo,
  PaymentDetails,
  Label,
  ErrorMessage,
  LabelWrapper,
  Input,
  InputContainer,
  FieldsetTitle,
  AddressInputContainer,
  PaymentFieldset,
  CashOnDelivery,
  Desc
} from "./form-styles.ts";



const Form = () => {
  const dispatch = useAppDispatch();
  const [radio, setRadio] = useState("e-money");
  const methods = useForm({ mode: "onChange", defaultValues });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    dispatch(openModal({ type: "form" }));
    reset();
  };

  return (
    <Wrapper>
      <Title>CHECKOUT</Title>
      <StyledForm id="form" onSubmit={handleSubmit(onSubmit)}>
        <BillingDetails>
          <FieldsetTitle>BILLING DETAILS</FieldsetTitle>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.name && "error"}>Name</Label>
              {errors.name && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.name && "error"}
              {...register("name", { required: true })}
            />
          </InputContainer>

          <InputContainer>
            <LabelWrapper>
              <Label className={errors.email && "error"}>Email Address</Label>
              {errors.email?.type === "pattern" ? (
                <ErrorMessage>Email is invalid</ErrorMessage>
              ) : errors.email ? (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              ) : null}
            </LabelWrapper>
            <Input
              className={errors.email && "error"}
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.number && "error"}>Phone Number</Label>
              {errors.number && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.number && "error"}
              {...register("number", { required: true })}
            />
          </InputContainer>
        </BillingDetails>
        <ShippingInfo>
          <FieldsetTitle>SHIPPING INFO</FieldsetTitle>
          <AddressInputContainer>
            <LabelWrapper>
              <Label className={errors.address && "error"}>Your Address</Label>
              {errors.address && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.address && "error"}
              {...register("address", { required: true })}
            />
          </AddressInputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.zip_code && "error"}>ZIP Code</Label>
              {errors.zip_code && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.zip_code && "error"}
              {...register("zip_code", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.city && "error"}>City</Label>
              {errors.city && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.city && "error"}
              {...register("city", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <LabelWrapper>
              <Label className={errors.country && "error"}>Country</Label>
              {errors.country && (
                <ErrorMessage>Field cannot be empty</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              className={errors.country && "error"}
              {...register("country", { required: true })}
            />
          </InputContainer>
        </ShippingInfo>
        <PaymentDetails>
          <FieldsetTitle>PAYMENT DETAILS</FieldsetTitle>
          <Label>Payment Method</Label>
          <RadioButton value={radio} setValue={setRadio} />
          <AnimatePresence>
            {radio === "e-money" ? (
              <PaymentFieldset
                variants={slide_animation}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <InputContainer>
                  <LabelWrapper>
                    <Label className={errors.e_money_number && "error"}>
                      e-Money Number
                    </Label>
                    {errors.e_money_number && (
                      <ErrorMessage>Field cannot be empty</ErrorMessage>
                    )}
                  </LabelWrapper>
                  <Input
                    className={errors.e_money_number && "error"}
                    {...register("e_money_number", { required: true })}
                  />
                </InputContainer>

                <InputContainer>
                  <LabelWrapper>
                    <Label className={errors.e_money_pin && "error"}>
                      e-Money PIN
                    </Label>
                    {errors.e_money_pin && (
                      <ErrorMessage>Field cannot be empty</ErrorMessage>
                    )}
                  </LabelWrapper>
                  <Input
                    className={errors.e_money_pin && "error"}
                    {...register("e_money_pin", { required: true })}
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
  );
};

export default Form;
