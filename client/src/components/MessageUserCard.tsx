import { Avatar, Flex, Box, FlexProps, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { TalentCardFragment } from "../generated/graphql";

type Props = {
  talent: TalentCardFragment;
} & FlexProps;

export default function MessageUserCard({
  talent,
  ...props
}: Props): ReactElement {
  const history = useHistory();
  return (
    <Flex
      alignItems="center"
      p={2}
      rounded="lg"
      onClick={() => history.push(`/messages/${talent.id}`)}
      {...props}
    >
      <Avatar name={talent.name} src={talent.profile_picture || ""} />
      <Box ml="3">
        <Text fontSize="sm" fontWeight="bold">
          {talent.name}
        </Text>
      </Box>
    </Flex>
  );
}
