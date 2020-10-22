import {
  Button,
  FormControl,
  Text,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/core";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function SignInForm() {
  const toast = useToast();
  const history = useHistory();

  const { register, errors, handleSubmit, formState } = useForm();

  async function onSubmit(data: any) {
    // const user = await signin(data);
    const user = null;
    if (user == null) {
      toast({
        title: "Login Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    history.push("/");
  }

  return (
    <>
      <Heading mb={5}>Login</Heading>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl w="100%" isInvalid={errors.email || errors.password}>
          <FormLabel htmlFor="email">Email</FormLabel>
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
          variantColor="blue"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </form>
      <Text textAlign="center" mt={4} color="cyan.700">
        <Link to="/signup">Create an account</Link>
      </Text>
    </>
  );
}

export default SignInForm;
