import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import SignInForm from "../components/SignInForm";

export default function SignIn(): ReactElement {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      h="100vh"
      p={12}
    >
      <SignInForm />
    </Flex>
  );
}
