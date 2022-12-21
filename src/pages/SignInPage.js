import useToggleValue from "../hook/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/icons";
import FormGroup from "../components/common/FormGroup";
import ButtonGoogle from "../components/button/ButtonGoogle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "../components/label";
import { Button } from "../components/button";

const schema = yup
  .object()
  .shape({    
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

const SignInPage = () => {
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

  const handleSignIn = (values) => {
    console.log(values);
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className=" w-full text-center text-xs lg:text-sm font-normal text-text3 lg:mb-8 mb-6">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>

      <form onSubmit={handleSubmit(handleSignIn)}>
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
            type={showPassword === true ? "text" : "password"}
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

        <FormGroup>
          <div className="text-right">
            <span className="text-primary inline-block text-sm font-medium cursor-pointer  ">
              Forgot password
            </span>
          </div>
        </FormGroup>

        <Button type="submit" className="w-full bg-primary text-white">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
