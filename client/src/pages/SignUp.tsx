import { Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import SignUpForm from "../components/SignUpForm";

export default function SignUp(): ReactElement {
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
      <SignUpForm />
    </Flex>
  );
}
