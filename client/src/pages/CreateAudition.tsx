import { Stack, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import CreateAuditionForm from "../components/CreateAuditionForm";

export default function CreateAudition(): ReactElement {
  const { t } = useTranslation();
  return (
    <Stack p={4} w={{ md: "1080px" }} m={{ md: "auto" }}>
      <Heading>{t("Create Audition")}</Heading>
      <CreateAuditionForm />
    </Stack>
  );
}
