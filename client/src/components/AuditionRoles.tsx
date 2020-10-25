import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { RoleDetailsFragment } from "../generated/graphql";

type Props = {
  roles:
    | Array<{ __typename?: "role" } & RoleDetailsFragment>
    | null
    | undefined;
} & AccordionProps;

export default function AuditionRoles({
  roles,
  ...props
}: Props): ReactElement | null {
  if (roles == null) {
    return null;
  }
  return (
    <Accordion {...props} allowToggle border="1px solid #eee" defaultIndex={0}>
      {roles.map(({ name, description }, i) => (
        <AccordionItem key={i}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{description}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
