import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  Text,
  Radio,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const { register, errors, handleSubmit, formState } = useForm();

  function onSubmit(data: any) {
    return;
  }

  return (
    <>
      <Heading mb={5}>Sign Up</Heading>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          w="100%"
          isInvalid={errors.email || errors.password || errors.user_type}
        >
          <FormLabel w="100%" textAlign="center" htmlFor="user_type">
            I am a/an
          </FormLabel>
          <Stack isInline spacing={4} justify="center">
            <Radio name="user_type" value="talent" ref={register}>
              Talent
            </Radio>
            <Radio name="user_type" value="agency" ref={register}>
              Agency
            </Radio>
          </Stack>
          {errors.user_type && (
            <FormErrorMessage>{errors.user_type.message}</FormErrorMessage>
          )}
          <FormLabel mt={4} htmlFor="email">
            Email
          </FormLabel>
          <Input
            name="email"
            placeholder="Email"
            ref={register({
              required: "Please enter an email address",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
          <FormLabel mt={4} htmlFor="password">
            Password
          </FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          w="full"
          mt={4}
          colorScheme="blue"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Create account
        </Button>
      </form>
      <Text textAlign="center" mt={4} color="cyan.700">
        <Link to="/signin">Already have an account?</Link>
      </Text>
    </>
  );
}

export default SignUpForm;
