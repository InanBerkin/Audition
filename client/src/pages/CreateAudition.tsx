import { Stack, Heading } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import CreateAuditionForm from "../components/CreateAuditionForm";

export default function CreateAudition(): ReactElement {
  return (
    <Stack p={4} w={{ md: "1080px" }} m={{ md: "auto" }}>
      <Heading>Create Audition</Heading>
      <CreateAuditionForm />
    </Stack>
  );
}
