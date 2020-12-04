import { Avatar, Badge, Flex, Box, FlexProps, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { TalentCardFragment } from "../generated/graphql";

type Props = {
  talent: TalentCardFragment;
} & FlexProps;

export default function TalentCard({ talent, ...props }: Props): ReactElement {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Flex
      alignItems="center"
      p={2}
      rounded="lg"
      border="1px solid #eee"
      onClick={() => history.push(`/profile/${talent.id}`)}
      {...props}
    >
      <Avatar name={talent.name} src={talent.profile_picture || ""} />
      <Box ml="3">
        <Text fontSize="sm" fontWeight="bold">
          {talent.name}
          <Badge ml="2" colorScheme="green">
            {t(talent.user_type.name)}
          </Badge>
        </Text>
        <Text fontSize="sm">Ankara</Text>
      </Box>
    </Flex>
  );
}
