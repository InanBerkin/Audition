import { ApolloQueryResult } from "@apollo/client";
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Exact, TalentsQuery, User_Bool_Exp } from "../generated/graphql";
import { TALENT_TYPE } from "../utils/constants";

type Props = {
  refetch: (
    variables?:
      | Partial<
          Exact<{
            filter?: User_Bool_Exp | null | undefined;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<TalentsQuery>>;
} & BoxProps;

type FormDataType = {
  user_type_id: string;
};

export default function TalentSearch({
  refetch,
  ...props
}: Props): ReactElement {
  const { handleSubmit, register } = useForm<FormDataType>();

  function onSubmit(values: FormDataType) {
    const filter = { user_type_id: { _eq: parseInt(values.user_type_id) } };
    refetch({
      filter,
    });
  }

  return (
    <Box {...props}>
      <Text fontWeight="bold" lineHeight={2.5}>
        Filter Results
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="user_type_id">Talent Type</FormLabel>
          <Select name="user_type_id" placeholder="Select type" ref={register}>
            {Object.values(TALENT_TYPE).map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Apply
        </Button>
      </form>
    </Box>
  );
}
