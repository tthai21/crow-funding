import useToggleValue from "../hook/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import IconEyeToggle from "../components/icons";
import FormGroup from "../components/common/FormGroup";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "../components/label";

import { Button } from "../components/button";
import Checkbox from "../components/checkbox/Checkbox";
import ButtonGoogle from "../components/button/ButtonGoogle";
import Input from "../components/input/Input";

const schema = yup
  .object()
  .shape({
    fullname: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must be 8 characters"),
    term: yup.bool().required(),
  })
  .required();

const SignUpPage = () => {

  const {
    handleSubmit,
    control,
    formState: {
      //  isValid,
      //   isSubmitting,
      errors,
    },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };

  const {value: acceptTerm, handleToggleValue: handleToggleTerm} = useToggleValue()  
 
  const {value: showPassword, handleToggleValue: handleTogglePassword} = useToggleValue()

  


  return (
    <LayoutAuthentication heading="Sign Up">
      <p className=" w-full text-center text-xs lg:text-sm font-normal text-text3 lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
     <ButtonGoogle></ButtonGoogle>
      <p className="text-xs font-normal text-center lg:text-sm mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name*</Label>
          <Input
            id="fullname"
            name="fullname"
            control={control}
            placeholder="John Der"
            error={errors.fullname?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            control={control}
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            id="password"
            name="password"
            type={showPassword===true ? "text" : "password"}
            control={control}
            placeholder="Enter your password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox control={control} name="term" onClick={handleToggleTerm} checked={acceptTerm}>
            <p className="text-sm text-text2 dark:text-text3 flex-1 ">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create new account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
