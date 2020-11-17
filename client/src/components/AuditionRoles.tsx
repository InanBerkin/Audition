import { ApolloQueryResult } from "@apollo/client";
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
  Divider,
  Flex,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { GoChecklist } from "react-icons/go";
import {
  AppliedAuditionsDocument,
  AuditionByIdQuery,
  Exact,
  RoleDetailsFragment,
  useApplyAuditionMutation,
} from "../generated/graphql";
import { getUID } from "../utils/getUID";
import RequirementsGrid from "./RequirementsGrid";
import useApplicantsModal from "./useApplicantsModal";

type Props = {
  roles:
    | Array<{ __typename?: "role" } & RoleDetailsFragment>
    | null
    | undefined;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            id: number;
            user_id: number;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<AuditionByIdQuery>>;
  isPostedByUser: boolean;
} & AccordionProps;

export default function AuditionRoles({
  roles,
  refetch,
  isPostedByUser,
  ...props
}: Props): ReactElement | null {
  const { modal, onOpen } = useApplicantsModal();
  const [applyAudition, { loading }] = useApplyAuditionMutation({
    onError: (e) => {
      console.log(e);
    },
    onCompleted: async () => {
      await refetch();
    },
    refetchQueries: [
      {
        query: AppliedAuditionsDocument,
        variables: { uid: getUID() },
      },
    ],
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
          requirement,
        }: RoleDetailsFragment) => (
          <AccordionItem key={id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Badge mr={2} colorScheme="purple">
                  {role_type.name}
                </Badge>
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {description}
              <Divider my={2} />
              <Box>
                <Text fontWeight="bold">Requirements</Text>
                <RequirementsGrid
                  mt={2}
                  gender={requirement?.physical_attribute?.gender?.name}
                  ethnicity={requirement?.physical_attribute?.ethnicity?.name}
                  eye_color={requirement?.physical_attribute?.eye_color?.name}
                  hair_color={requirement?.physical_attribute?.hair_color?.name}
                  body_height={requirement?.physical_attribute?.height}
                  body_type={requirement?.physical_attribute?.body_type?.name}
                />
              </Box>
              <Flex mt={2} justify="flex-end">
                {isPostedByUser ? (
                  <Button
                    onClick={() => onOpen(id)}
                    colorScheme="blue"
                    leftIcon={<GoChecklist />}
                  >
                    List Applicants
                  </Button>
                ) : (
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
                )}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        )
      )}
      {modal()}
    </Accordion>
  );
}
