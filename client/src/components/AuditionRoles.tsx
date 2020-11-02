import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Badge,
  Box,
  Button,
  Flex,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { GoChecklist } from "react-icons/go";
import {
  RoleDetailsFragment,
  useApplyAuditionMutation,
} from "../generated/graphql";
import { getUID } from "../utils/getUID";

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
  const [applyAudition, { loading }] = useApplyAuditionMutation({
    onError: (e) => {
      console.log(e);
    },
  });

  if (roles == null || roles.length === 0) {
    return null;
  }

  return (
    <Accordion {...props} allowToggle border="1px solid #eee" defaultIndex={0}>
      {roles.map(
        ({
          id,
          name,
          description,
          role_type,
          did_user_applied,
        }: RoleDetailsFragment) => (
          <AccordionItem key={id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Badge mr={2}>{role_type.name}</Badge>
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {description}
              <Flex mt={2} justify="flex-end">
                <Button
                  isLoading={loading}
                  isDisabled={did_user_applied.length !== 0}
                  colorScheme="green"
                  leftIcon={<GoChecklist />}
                  onClick={() => {
                    applyAudition({
                      variables: {
                        applicant_input: {
                          user_id: getUID(),
                          role_id: id,
                        },
                      },
                    });
                  }}
                >
                  {did_user_applied.length !== 0 ? "Applied" : "Apply"}
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
