import { ApolloQueryResult } from "@apollo/client";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Select,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BsFunnelFill } from "react-icons/bs";
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
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm<FormDataType>();

  function onSubmit(values: FormDataType) {
    const filter = { user_type_id: { _eq: parseInt(values.user_type_id) } };
    refetch({
      filter,
    });
  }

  return (
    <Box {...props}>
      <Flex align="center">
        <Icon as={BsFunnelFill} mr={1} />
        <Text fontWeight="bold" lineHeight={2.5}>
          {t("Filter Results")}
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="user_type_id">{t("Talent Type")}</FormLabel>
          <Select
            name="user_type_id"
            placeholder={t("Select type")}
            ref={register}
          >
            {Object.values(TALENT_TYPE).map(({ id, name }) => (
              <option key={id} value={id}>
                {t(name)}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          {t("Apply Filter")}
        </Button>
      </form>
    </Box>
  );
}
