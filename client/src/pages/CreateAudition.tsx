import { Box, Heading } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import CreateAuditionForm from "../components/CreateAuditionForm";

export default function CreateAudition(): ReactElement {
  return (
    <Box p={4} paddingBottom="60px">
      <Heading>Create Audition</Heading>
      <CreateAuditionForm />
    </Box>
  );
}
